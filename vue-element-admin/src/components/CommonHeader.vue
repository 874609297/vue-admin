<template>
    <div class="container" style="padding: 0px;">
        <el-header>
            <div class="left-icon">
                <el-button size="large"
                @click="changeCollpase"
                >
                    <el-icon :size="20">
                        <Menu/>
                    </el-icon>
                </el-button>
                <el-breadcrumb separator="/" class="disinline">
                    <el-breadcrumb-item v-for="(item,index) in getTitleList()" :key="index">
                    {{ item }}
                    </el-breadcrumb-item>
                </el-breadcrumb>
          </div>
        <div class="right-icon">
            <el-dropdown>
                    <span class="el-dropdown-link">
                        <el-avatar class="user-icon" :size="50">
                            <img :src="usericon" alt="">
                        </el-avatar>
                     </span>
                <template  template #dropdown>
                    <el-dropdown-menu>
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            </div>           
        </el-header>
        <div>
           <el-tag
           v-for="(item,index) in routerStoreList.routerList"
           closable
           style="margin-left: 15px;"
           size="large"
           @click="changeRouter"
           >
           {{ item.routerName }}
           </el-tag>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import {isCollapse,routerStore} from '../store/index'
import {ref,onMounted, watch,reactive} from 'vue'
export default{
    name:'CommonHeader',
    setup(){
        const usericon = new URL("../assets/user.jpg",import.meta.url).href
        //改变侧边栏展开状态
        const changeCollpase=()=>{
            const store = isCollapse()
            store.isCollapse=store.isCollapse?false:true
        }
        //根据路由改变标题
        const router = useRouter()
        //获取标题列表函数
        const getTitleList = function(){
            let routerList = router.currentRoute.value.matched
            let titleList =[]
            for(let i in routerList){
                titleList.push(routerList[i].meta.name)
            }
            return titleList
        }

        //tag标签添加路由信息
        let routerStoreList = routerStore()
        //添加状态路由信息函数
        const changeTagRouterStore = function(){
            return {
                routerPath:router.currentRoute.value.fullPath,
                routerName:router.currentRoute.value.meta.name
            }
        }
        watch(()=>router.currentRoute.value.matched,(newValue,oldValue)=>{
            routerStoreList.$patch((state) => {
                state.routerList.push(changeTagRouterStore())
            })
        },
        { immediate: true }
        )
        //tag跳转路由
        const changeRouter = function(){
            
        }
        return{
            changeCollpase,
            usericon,
            getTitleList,
            changeRouter,
            routerStoreList
        }
    },
    
}
</script>
<style scoped>
header{
    flex-wrap: wrap;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}
.el-header{
    padding: 0;
}
.disinline{
    display: inline-block;
    margin-left: 20px;
}
</style>