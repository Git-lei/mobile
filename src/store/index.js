import Vue from 'vue'
import Vuex from 'vuex'

// 导入auth
import * as auth from '@/utils/auth.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // vuex通过localStorage获得用户token等信息
    user: auth.getUser()
  },
  mutations: {
    updateUser (state, user) {
      // 更新vuex中用户token等信息
      state.user = user
      // 更新localStorage的用户token等信息
      auth.setUser(user)
    },
    clearUser (state, user) {
      // 删除vuex中用户token等信息
      state.user = {}
      // 清除localStorage的用户token等信息
      auth.setUser(user)
    }
  },
  actions: {
  },
  modules: {
  }
})
