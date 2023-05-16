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
        <el-tabs
            v-model="editableTabsValue"
            type="card"
            closable
            class="demo-tabs"
            @tab-remove="removeTab"
            @tab-click	="changeTabLight"
            >
            <el-tab-pane
            v-for="item in routerStoreList.setrouterStore"
            :key="item.path"
            :label="item.routerName"
            :name="item.routerName"
            >
            </el-tab-pane>
        </el-tabs>
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
        const changeCollpase=()=>{
            const store = isCollapse()
            store.isCollapse=store.isCollapse?false:true
        }
        const router = useRouter()
        const getTitleList = function(){
            let routerList = router.currentRoute.value.matched
            let titleList =[]
            for(let i in routerList){
                titleList.push(routerList[i].meta.name)
            }
            return titleList
        }

        let routerStoreList = routerStore()
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
        // tab标签进行页面管理
        let tabIndex = 0
        let editableTabsValue = ref('首页')
        const editableTabs = ref(routerStoreList.routerList)
        const removeTab =function(event){
           console.log(event);
        }
        const changeTabLight =function(event){
            editableTabsValue = event.props.name
        }
        return{
            tabIndex,
            changeCollpase,
            usericon,
            getTitleList,
            routerStoreList,
            editableTabsValue,
            editableTabs,
            removeTab,
            changeTabLight
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