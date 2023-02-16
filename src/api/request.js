// 对axios进行二次封装
import axios from 'axios'
// 引入进度条
import nProgress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'
// 引入仓库中的uuid和token
import store from '@/store'
// 利用axios对象的方法create 去创建一个axios实例
const request = axios.create({
    // 基础路径 发请求的时候 路径当中会出现api
    baseURL:'/api',
    // 代表请求超时时间5s
    timeout:5000,
})
// 请求拦截器：在发请求之前 请求拦截器可以检测到 可以在请求发出去之前做一些事情
request.interceptors.request.use((config)=>{
    //现在的问题是config是什么?配置对象
    //可以让进度条开始动
    if (store.state.detail.uuidToken) {
        //请求头添加一个字段(userTempId):和后台老师商量好了
        config.headers.userTempId = store.state.detail.uuidToken
    }
    // 需要携带token给服务器
    if (store.state.register.token) {
        config.headers.token = store.state.register.token
    }
    // 进度条开始
    nProgress.start()
    return config
})
// 响应拦截器
request.interceptors.response.use((res)=>{
    // 响应成功后进度条结束
    nProgress.done()
    return res.data
},(error)=>{
    // 响应失败
    return error
})
// 对外暴露
export default request
