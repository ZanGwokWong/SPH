// 引入路由组件
// import Home from '../pages/Home/SPHindex.vue'
// import Search from '../pages/Search/SPHindex.vue'
// import Login from '../pages/Login'
// import Register from '../pages/Register'
// import Detail from '../pages/Detail'
// import AddCartSuccess from '../pages/AddCartSuccess'
// import ShopCart from '../pages/ShopCart'
// import Trade from '../pages/Trade'
// import Pay from '../pages/Pay'
// import PaySuccess from '../pages/PaySuccess'
// import Center from '../pages/Center'
// import myOrder from '../pages/Center/myOrder'
// import groupOrder from '../pages/Center/groupOrder'
// 配置路由
export default [
    {
        path: '/center',
        component: () => import('../pages/Center'),
        meta: { show: true },
        children: [
            {
                path: '/center/myorder',
                component: () => import('../pages/Center/myOrder'),
            },
            {
                path: '/center/grouporder',
                component: () => import('../pages/Center/groupOrder'),
            }
        ]
    },
    {
        path: '/paysuccess',
        component: () => import('../pages/PaySuccess'),
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if (from.path === '/pay') {
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path: '/pay',
        component: () => import('../pages/Pay/'),
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if(from.path === '/trade'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path: '/trade',
        component: () => import('../pages/Trade'),
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if (from.path === '/shopcart') {
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path: '/shopcart',
        component: () => import('../pages/ShopCart'),
        meta: { show: true }
    },
    {
        path: '/addcartsuccess',
        name: 'addcartsuccess',
        component: () => import('../pages/AddCartSuccess'),
        meta: { show: true }
    },
    {
        path: '/detail/:skuid',
        component: () => import('../pages/Detail'),
        meta: { show: true }
    },
    {
        path: '/',
        component: () => import('../pages/Home/SPHindex.vue'),
        meta: { show: true }
    },
    {
        path: '/search/:keyword?',
        component: () => import('../pages/Search/SPHindex.vue'),
        meta: { show: true },
        name: 'search'
    },
    {
        path: '/login',
        component: () => import('../pages/Login'),
        meta: { show: false }
    },
    {
        path: '/register',
        component: () => import('../pages/Register'),
        meta: { show: false }
    },
]