import {reqUserAddressList , reqOrder} from '@/api'
const state = {
    addressList : [],
    order : {},
}
const mutations = {
    GETUSERADDRESSLIST(state , addressList){
        state.addressList = addressList
    },
    GETORDER(state , order){
        state.order = order
    }
}
const actions = {
    // 获取用户地址
    async getUserAddressList({commit}){
        let result = await reqUserAddressList()
        if(result.code == 200){
            commit('GETUSERADDRESSLIST' , result.data)
        }
    },
    // 获取商品清单
    async getOrder({commit}){
        let result = await reqOrder()
        if (result.code == 200) {
            commit('GETORDER' , result.data)
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters,
}