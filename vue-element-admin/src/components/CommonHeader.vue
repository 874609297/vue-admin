<template>
    <div class="container">
        <el-header class="aa">
            <div class="left-icon">
                <el-button size="large">
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
import {ref} from 'vue'
export default{
    name:'CommonHeader',
    setup(){
        const usericon = new URL("../assets/user.jpg",import.meta.url).href
        return{
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
</style>