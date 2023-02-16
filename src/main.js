import Vue from 'vue'
import App from './App.vue'
// 引入Vuex仓库
import store from './store/index'
// 引入mock虚拟数据
import '@/mock/mockServe'
// 引入swiper样式
import 'swiper/css/swiper.css'
// 引入所有API
import * as API from '@/api'
// 支付页面弹出框
import { MessageBox } from 'element-ui';
// 图片懒加载
import VueLazyload from 'vue-lazyload'
// 引入路由
import router from './router/index'
// 引入全局组件 
import TypeNav from './components/TypeNav/TypeNav.vue'
import SPHPagination from './components/Pagination/SPHPagination.vue'
// 注册全局组件 在入口组件注册一次 在所有组件都可以共用
Vue.component(TypeNav.name, TypeNav)
Vue.component(SPHPagination.name, SPHPagination)
//ElementUI注册组件的时候，还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
// 自定义表单验证
import '@/plugins/validate'
// 加载中图片
import loadimage from '@/assets/1.jpg'
// 加载失败图片
import errorimage from '@/assets/2.jpg'
Vue.use(VueLazyload, {
  error: errorimage,
  loading: loadimage,
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    // 全局事件总线
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  // 注册路由信息 组件身上都拥有$route,$router属性
  router,
  // 注册仓库 组件实例的身上多了一个$store属性
  store,
}).$mount('#app')
