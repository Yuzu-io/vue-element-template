import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
// 模块
// import layout from './modules/layout'
// import tagsView from './modules/tagsView'

// 自动导入对应文件中的文件
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  // modules: {
  //   layout,
  //   tagsView
  // }
  modules
})
