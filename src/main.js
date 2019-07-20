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


// 组件
import 'swiper/dist/css/swiper.css'


/* eslint-disable no-new */
Vue.filter('formatMoney', (value) => {
  let arr = value.split('.');
  let dotRight = '';
  if (arr[1].charAt(1) != 0) {
    console.log("hello");

    dotRight = '.' + arr[2];
  } else {
    if (arr[1].charAt(0) != 0) {
      dotRight = '.' + arr[1].slice(0, 1);
    } else {
      dotRight = '';
    }
  }
  return arr[0] + dotRight;
});

new Vue({
  el: '#app',
  components: {
    App
  },
  router,
  store,
  render: h => h('app')
})

