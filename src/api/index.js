// 当前这个模块：API进行统一管理
import requests from './request'
import mockRequest from './mockAjax'
// 三级联动接口
// /api/product/getBaseCategoryList get请求 无参数
export const reqCategoryList = () => requests({url:'/product/getBaseCategoryList',method:'get'})
// 获取banner数据 （Home首页轮播图）
export const reqGetBannerList = () => mockRequest.get('/banner')
// 获取floor数据 （Home首页底部轮播图）
export const reqGetFloorList = () => mockRequest.get('/floor')
// 搜索模块数据 地址/api/list  post请求 需要带参数
export const reqGetSearchInfo = (params) => requests({url:'/list',method:'post',data:params,})
// 获取商品详情信息 /api/item/{ skuId }  get请求 需要带参数 
export const reqGetGoodInfo = (skuId) => requests({url : `/item/${skuId}` , method:'get'})
// 添加购物车 (修改更新商品个数 )/api/cart/addToCart/{ skuId }/{ skuNum } post请求 需要带参数
export const reqGetAddShopcart = (skuId,skuNum) => requests({url : `/cart/addToCart/${skuId}/${skuNum}` , method : 'post' })
// 获取购物车列表 /api/cart/cartList get请求
export const reqGetCartList = () => requests({url : '/cart/cartList' , method : 'get'})
// 删除购物车商品 /api/cart/deleteCart/{skuId} delete请求 需要带参数
export const reqDeleteCaetByid = (skuId) => requests({url: `/cart/deleteCart/${skuId}` , method : 'delete'})
// 切换商品勾选状态 /api/cart/checkCart/{skuID}/{isChecked} get请求 
export const reqCheckCartById = (skuId , isChecked) => requests({url : `/cart/checkCart/${skuId}/${isChecked}` ,method : 'get'})
// 获取验证码  /api/user/passport/sendCode/{phone} get请求 需要带参数
export const reqGetPhoneCode = (phone) => requests({url : `/user/passport/sendCode/${phone}` , method : 'get'})
// 注册用户 /api/user/passport/register post请求 需要带参数
export const userRegisterInfo = (data) => requests({url : '/user/passport/register' , data , method : 'post'})
// 用户登录 /api/user/passport/login post请求 需要带参数
export const reqUserLogin = (data) => requests({url : '/user/passport/login' , data , method : 'post'})
// 获取用户信息 （需要带着用户的token向服务器要信息，在请求头中携带token）/api/user/passport/auth/getUserInfo get请求
export const reqUserInfo = () => requests({url : '/user/passport/auth/getUserInfo' , method : 'get'})
// 退出登录 /api/user/passport/logout get请求 
export const reqUserLogout = () => requests({url : '/user/passport/logout' , method : 'get'})
// 获取用户地址信息 /api/user/userAddress/auth/findUserAddressList get请求
// export const reqUserAddressList = () => requests({url : '/user/userAddress/auth/findUserAddressList' , method : 'get'})
export const reqUserAddressList = () => mockRequest.get('/addressList')
// 获取商品清单 /api/order/auth/trade get请求
export const reqOrder = () => requests({url : '/order/auth/trade' , method : 'get'})
// 提交订单 /api/order/auth/submitOrder?tradeNo={tradeNo} post请求 需要带参数
export const reqSubmitOrder = (tradeNo , data) => requests({url : `/order/auth/submitOrder?tradeNo=${tradeNo}` , data , method: 'post'})
// 获取订单支付信息 /api/payment/weixin/createNative/{orderId} get请求
export const reqOrderPayInfo = (orderId) => requests({url : `/payment/weixin/createNative/${orderId}` , method : 'get'})
// 查询订单支付状态 /api/payment/weixin/queryPayStatus/{orderId} get请求
export const reqPayStatus = (orderId) => requests({url : `/payment/weixin/queryPayStatus/${orderId}` , method : 'get'})
// 获取我的订单列表  /api/order/auth/{page}/{limit} get1请求
export const reqGetMyOrder = (page , limit) => requests({url : `/order/auth/${page}/${limit}` , method : 'get'}) 