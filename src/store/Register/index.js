import { userRegisterInfo, reqGetPhoneCode ,reqUserLogin , reqUserInfo , reqUserLogout} from '@/api'
import { setToken , getToken , removeToken} from "@/utils/userToken";
const state = {
    code: '',
    token: getToken(),
    name:'',
}
const mutations = {
    GETPHONECODE(state, code) {
        state.code = code
    },
    USERLOGIN(state , token){
        state.token = token
    },
    GETUSERINFO(state , name){
        state.name = name
    },
    USERLOGOUT(state){
        state.token = ''
        state.name = ''
        removeToken()
    }
}
const actions = {
    // 获取验证码
    async GetPhoneCode({ commit }, phone) {
        let result = await reqGetPhoneCode(phone)
        if (result.code == 200) {
            commit('GETPHONECODE', result.data)
        }
    },
    // 用户注册
    async UserRegister({ commit }, data) {
        let result = await userRegisterInfo(data)
        if (result.code == 200) {
            return 'ok'
        }else{
            return Promise.reject(new Error(result.message))
        }
    },
    // 用户登录
   async userLogin({commit} , data){
        let result = await reqUserLogin(data)
        // console.log(result);
        if (result.code == 200) {
            commit('USERLOGIN' , result.data.token)
            setToken(result.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error(result.message))
        }
    },
    // 获取用户信息
    async getUserInfo({commit}){
        let result = await reqUserInfo()
        console.log(result);
        if (result.code == 200) {
            commit('GETUSERINFO' , result.data.name)
        }else{
            return Promise.reject(result.message)
        }
    },
    // 退出登录
    async UserLogout({commit}){
        let result = await reqUserLogout()
        if(result.code == 200){
            commit('USERLOGOUT')
            return 'ok'
        }else{
            return Promise.reject(new Error(result.message))
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