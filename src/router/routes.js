// 首页
const Home = () => import(/* webpackChunkName: "router" */ 'Views/home')
// 数据管理
const UserList = () => import(/* webpackChunkName: "router" */ 'Views/userlist')
const Shop = () => import(/* webpackChunkName: "router" */ 'Views/shop')
const FoodList = () => import(/* webpackChunkName: "router" */ 'Views/foodlist')

const OrderList = () => import(/* webpackChunkName: "router" */ 'Views/orderlist')
const AdminList = () => import(/* webpackChunkName: "router" */ 'Views/adminlist')
// 添加数据
const AddShop = () => import(/* webpackChunkName: "router" */ 'Views/addshop')
const AddFoods = () => import(/* webpackChunkName: "router" */ 'Views/addfoods')
// 修改数据
const Shop_Modify = () => import(/* webpackChunkName: "router" */ 'Views/shop_modify')
// 图表
const Visitor = () => import(/* webpackChunkName: "router" */ 'Views/visitor')
// 编辑
const VueEdit = () => import(/* webpackChunkName: "router" */ 'Views/vueedit')
// 设置
const AdminSet = () => import(/* webpackChunkName: "router" */ 'Views/adminset')
// 说明
const Explain = () => import(/* webpackChunkName: "router" */ 'Views/explain')
// 登录注册
const Login = () => import(/* webpackChunkName: "router" */ 'Views/login')
const Register = () => import(/* webpackChunkName: "router" */ 'Views/register')
// 删除
const Edit = () => import(/* webpackChunkName: "router" */ 'Views/edit')
const Set = () => import(/* webpackChunkName: "router" */ 'Views/set')
// 错误
const Error = () => import(/* webpackChunkName: "router" */ 'Views/error')

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            name: 'Home'
        }
    },
    {
        path: '/userlist',
        component: UserList,
        meta: {
            name: 'UserList'
        }
    },
    {
        path: '/shop',
        component: Shop,
        meta: {
            name: 'Shop'
        }
    },
    {
        path: '/foodlist',
        component: FoodList,
        meta: {
            name: 'FoodList'
        }
    },
    {
        path: '/orderlist',
        component: OrderList,
        meta: {
            name: 'OrderList'
        }
    },
    {
        path: '/adminlist',
        component: AdminList,
        meta: {
            name: 'AdminList'
        }
    },
    {
        path: '/addshop',
        component: AddShop,
        meta: {
            name: 'AddShop'
        }
    },
    {
        path: '/addfoods',
        component: AddFoods,
        meta: {
            name: 'AddFoods'
        }
    },
    {
        path: '/shop_modify',
        component: Shop_Modify,
        name: 'shop_modify',
        meta: {
            name: 'Shop_Modify'
        }
    },
    {
        path: '/visitor',
        component: Visitor,
        meta: {
            name: 'Visitor'
        }
    },
    {
        path: '/vueedit',
        component: VueEdit,
        meta: {
            name: 'VueEdit'
        }
    },
    {
        path: '/adminset',
        component: AdminSet,
        meta: {
            name: 'AdminSet'
        }
    },
    {
        path: '/edit',
        component: Edit,
        meta: {
        name: 'Edit'
        } 
    },
    {
        path: '/set',
        component: Set,
        meta: {
        name: 'Set'
        } 
    },
    {
        path: '/explain',
        component: Explain,
        meta: {
            name: 'Explain'
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            name: 'Login'
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            name: 'Register'
        }
    },
    {
        path: '*',
        component: Error,
        meta: {
            name: 'Error'
        }
    },
]

export default routes