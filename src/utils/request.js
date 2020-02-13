import axios from 'axios'
import JSONBig from 'json-bigint'

// 导入路由
import router from '@/router/index.js'

// 引入 vuex 判断用户是否登录
import store from '@/store'

// 创建一个axios实例 和原来的axios没有关系
const instance = axios.create({
  // 构造参数
  baseURL: 'http://ttapi.research.itcast.cn/', // 设置请求地址常量
  transformResponse: [function (data) {
    //   data就是后端响应的字符串 默认的转化是 JSON.parse 处理大数字是有问题的额 需要用JSONBIG替换
    // return data ? JSONBig.parse(data) : {}
    try {
      return JSONBig.parse(data)
    } catch (error) {
      return data
    }
  }]
})

// 请求拦截器
instance.interceptors.request.use(function (config) {
  if (store.state.user.token) {
    // 应该在返回配置之前  往配置里塞入token
    config.headers.Authorization = `Bearer ${store.state.user.token}`
  }
  // 配置信息
  return config
}, function (error) {
  return Promise.reject(error) // 直接返回promise错误
})

// 响应拦截器
instance.interceptors.response.use(function (response) {
  // 响应数据  返回得到的响应数据  第一层data是axios默认包data, 第二个data是接口返回里面的包的data
  try {
    return response.data.data
  } catch (error) {
    // 非正常处理 401
    if (error.response.status === 401) {
      router.push('/login')
      return new Promise(function () {})
    }
    return response.data
  }
}, function (error) {
  // 错误的时候 token容易失效
  return Promise.reject(error)
})

// 导出
export default instance
