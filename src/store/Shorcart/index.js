import { reqGetCartList , reqDeleteCaetByid , reqCheckCartById} from "@/api"
const state = {
    cartList : []
}
const mutations = {
    GETCARTLIST(state , cartList){
        state.cartList = cartList
    }
}
const actions = {
    // 获取购物车数据
    async getCartList({commit}){
        let result = await reqGetCartList()
        if (result.code === 200) {
            commit('GETCARTLIST' , result.data)
        }
    },
    // 删除购物车中的某个商品
    async DeleteCartById({commit} , skuid){
        let result = await reqDeleteCaetByid(skuid)
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('false'))
        }
    },
    // 修改勾选状态
    async CheckCart({commit} , {skuId , isChecked}){
        let result = await reqCheckCartById(skuId , isChecked)
        if (result.code == 200) {
            return 'ok'
        }else{
            return Promise.reject(new Error('false'))
        }
    },
    // 删除所以勾选的商品
    deleteAllCheckedCart({dispatch , getters}){
        let PromiseAll = []
        getters.cartList.cartInfoList.forEach(item => {
            let Promise = item.isChecked == 1 ?  dispatch('DeleteCartById' , item.skuId) : ''
            PromiseAll.push(Promise)
        });
        return Promise.all(PromiseAll)
    },
    // 全选勾选状态
    AllCheckedCart({dispatch , getters } , isChecked){
        let PromiseAll = []
        getters.cartList.cartInfoList.forEach(item => {
            let Promise = dispatch('CheckCart' , {skuId : item.skuId , isChecked})
            PromiseAll.push(Promise)
        })
        return Promise.all(PromiseAll)
    }
}
const getters = {
    cartList(){
        return state.cartList[0] || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
}
