import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            redirect:'/index'
        },
        {
            path:'/index',
            component:()=>import('../layout/main.vue'),
            meta:{name:'首页'},
            children:[
                {
                    path:'',
                    component:()=>import('../views/home/home.vue'),
                    meta:{name:'首页'}
                },
                {
                    path:'/user',
                    component:()=>import('../views/user/user.vue'),
                    meta:{name:'用户管理'}
                },
                {
                    path:'/test',
                    component:()=>import('../views/test/test.vue'),
                    meta:{name:'测试'}
                }
            ]
        },
        
    ]
})

export default router