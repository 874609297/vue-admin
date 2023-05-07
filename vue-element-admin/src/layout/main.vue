<template>
    <div class="common-layout">
      <el-container class="topcontainer">
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

<style>
.topcontainer{
    /* position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0; */
}

</style>