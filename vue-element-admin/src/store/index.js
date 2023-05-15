import {defineStore} from 'pinia'

export const isCollapse =defineStore('pageStore',{
    state:()=>{
        return{
            // 定义菜单栏是否关闭
            isCollapse:false
        }
    }
})

export const routerStore = defineStore('routerStore',{
    state:()=>{
        return{
            routerList:[
               
            ]
        }
    },
    getters:{
        // 对路由tag进行去重处理
        setrouterStore:()=>{
            
        }
    }
})