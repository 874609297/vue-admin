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
                <span style="font-size: 20px;">测试title</span>      
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
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import {isCollapse} from '../store/index'
import {ref} from 'vue'
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
        const route = useRoute()
        // let title = route
        return{
            changeCollpase,
            usericon
        }
    },
    
}
</script>
<style scoped>
header{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}
.el-header{
    padding: 0;
}
</style>