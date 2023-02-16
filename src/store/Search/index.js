import { reqGetSearchInfo } from "@/api";
// Search模块小仓库
const state = {
    searchinfo:{}
}
const mutations ={
    GETSEARCHINFO(state , searchinfo){
        state.searchinfo = searchinfo
    }
}
const actions = {
    async GetSearchInfo({commit} , params={}){
        const result = await reqGetSearchInfo(params)
        if(result.code === 200){
            commit('GETSEARCHINFO' , result.data)
        }
    }
}
const getters = {
    attrsList(state){
        return state.searchinfo.attrsList || []
    },
    trademarkList(state){
        return state.searchinfo.trademarkList || []
    },
    goodsList(state){
        return state.searchinfo.goodsList || []
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}