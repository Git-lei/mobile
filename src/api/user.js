import request from '@/utils/request.js' // 引入封装的模块

// 用户相关的请求函数
export function apiUserLogin ({ mobile, code }) {
  return request({
    url: '/app/v1_0/authorizations',
    data: {
      mobile,
      code
    },
    method: 'post'
  })//  得到一个promise对象  返回
}
