import {reqGetGoodInfo , reqGetAddShopcart} from '@/api'
import { getUUID } from '@/utils/UUIDToken'
const state = {
    goodinfo : {},
    uuidToken: getUUID()
}
const mutations = {
    GETGOODINFO(state ,goodinfo){
        state.goodinfo = goodinfo
    },
}
const actions = {
    // 商品详情
    async getGoodInfo({commit} , skuid){
        let result = await reqGetGoodInfo(skuid)
        if(result.code === 200){
            console.log(result.data);
            commit('GETGOODINFO' , result.data)
        }
    },
    // 添加购物车 提交或修改参数
    async getAddShopcart({commit},{skuid , skunum}){
        const result = await reqGetAddShopcart(skuid , skunum)
        if (result.code == 200) {
            //返回的是成功的标记
            return "ok";
          } else {
            //返回的是失败的标记
            return Promise.reject(new Error("faile"));
          }
    }
}
const getters = {
    categoryView(){
        return state.goodinfo.categoryView || {}
    },
    skuInfo(){
        return state.goodinfo.skuInfo || {}
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
}