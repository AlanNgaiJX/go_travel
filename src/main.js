// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'

// 移动端点击事件延迟解决方案
fastclick.attach(document.body);

Vue.config.productionTip = false

// CSS
  // 兼容预设
import 'styles/reset.css';
  // 移动端1px边框解决方案
import 'styles/border.css';
  // 启用iconfont
import 'styles/iconfont.css';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components:{
    App
  },
  router,
  store,
  render:h => h('app')
})
