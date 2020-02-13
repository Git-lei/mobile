import { extend, localize } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
// rules: {alpha:xx,alpha_dash:xx,alpha_num:xx……}

import zhCN from 'vee-validate/dist/locale/zh_CN.json' // 引入中文语言包

localize({ zhCN }) // 注册语言包
localize('zhCN') // 设置默认语言
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})
extend('phone', {
  validate: value => {
    const reg = /^1[35789]\d{9}$/
    return reg.test(value)
  },
  message: '{_field_}格式不正确'
})
// Object.keys(rules) 获得对象中全部的属性名称，
// 并以数组返回["alpha", "alpha_dash", "alpha_num", ……]
// extend(rule, rules[rule]) 完成每个内置校验规则的注册操作
