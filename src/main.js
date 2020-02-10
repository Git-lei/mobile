import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入vant组件库
import Vant from 'vant'
import 'vant/lib/index.css'
//导入 amfe-flexible
import 'amfe-flexible/index.min.js'
Vue.config.productionTip = false
Vue.use(Vant),
new Vue({
 
  router,
  store,
  render: h => h(App)
}).$mount('#app')