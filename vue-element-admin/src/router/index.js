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
            children:[
                {
                    path:'',
                    component:()=>import('../views/home/home.vue')
                },
            ]
        }
    ]
})

export default router