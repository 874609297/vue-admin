<template>
    <div class="common-layout">
      <el-container class="one">
        <el-aside width="200px" class="aside">
            <CommonAside></CommonAside>
        </el-aside>
        <el-container>
          <el-header>
            <CommonHeader></CommonHeader>
          </el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
<script>
import CommonAside from '../components/CommonAside.vue';
import CommonHeader from '../components/CommonHeader.vue'
export default {
    name:'main',
    components:{
        CommonHeader,
        CommonAside
    },
    setup() {
        
    }
}
</script>

<style scoped>
.common-layout{
  height: 100%;
}
.one{
  height: 100%;
}
</style>