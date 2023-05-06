import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            redirect:'/wel'
        },
        {
            path:'/wel',
            component:()=>import('../components/welcome.vue')
        }
    ]
})

export default router