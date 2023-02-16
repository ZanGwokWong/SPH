import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 引入小仓库
import home from './Home/index'
import search from './Search/index'
import detail from './Detail/index'
import shorcart from './Shorcart/index'
import register from './Register/index'
import trade from './Trade/index'
// 对外暴露Store类的一个实例
export default new Vuex.Store({
    // 实现Vuex仓库模块式开发存储数据
    modules:{
        home,
        search,
        detail,
        shorcart,
        register,
        trade,
    }
})