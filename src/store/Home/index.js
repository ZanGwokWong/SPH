import { reqCategoryList,reqGetBannerList,reqGetFloorList} from "@/api";
// Home模块小仓库
const state = {
    // 三级导航栏数据
    categoryList:[],
    // banner轮播图数据
    bannerList:[],
    // floor轮播图
    floorList:[],
}
const mutations ={
    // 修改categoryList的数据
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    // 修改bannerList中的数据
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    // 修改floorList中的数据
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
    }
}
const actions = {
    // 向服务器获取三级导航栏数据
   async categoryList({commit}){
        let result = await reqCategoryList()
        if (result.code === 200) {
            commit('CATEGORYLIST',result.data)
        }
    },
    // 向服务器获取图片数据
   async getbannerList({commit}){
        let result = await reqGetBannerList()
        if(result.code === 200){
            commit('GETBANNERLIST',result.data)
        }
    },
    // 向服务器获取图片数据
    async getfloorList({commit}){
        let result = await reqGetFloorList()
        if (result.code === 200) {
            commit('GETFLOORLIST', result.data)
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}