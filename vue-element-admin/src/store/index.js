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
               
            ],
            pathIndex:''
        }
    },
    getters:{
        setrouterStore(state){
            return state.routerList.filter((item,index,arr)=>{
                return arr.findIndex(el=>el.routerName==item.routerName) === index
            })
        }
    }
})