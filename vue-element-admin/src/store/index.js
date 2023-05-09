import {defineStore} from 'pinia'

export const isCollapse =defineStore('pageStore',{
    state:()=>{
        return{
            // 定义菜单栏是否关闭
            isCollapse:false
        }
    }
})