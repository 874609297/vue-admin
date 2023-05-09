<template>
    <div style="">
    <el-radio-group v-model="isCollapse" style="">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group>
    <el-menu
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    >
    <!-- 无子菜单的导航 -->
      <el-menu-item :index="item.path" v-for="item in listData.nChildren" :key="item.path">
        <el-icon><FullScreen /></el-icon>
        <template #title>
          {{item.label}}
        </template>
      </el-menu-item>
      <!-- 有子菜单的导航 -->
      <el-sub-menu :index="item.label" v-for="item in listData.hChildren" :key ="item.path">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{item.label}}</span>
          </template>         
          <el-menu-item v-for="subitem in item.children" :index="subitem.path" :key="subitem.path">{{ subitem.label }}</el-menu-item>
          
      </el-sub-menu>
  </el-menu>
    </div>
</template>

<script>
import {ref,reactive,toRefs} from 'vue'
export default{
    name:'CommonAside',
    setup(){
        //菜单列表
         let list=[
          {
            path:'/user',
            name:"user",
            label:"用户管理",
            icon:"",
            url:"UserManage/UserManage"
          },
          {
            path:'/dosomething',
            name:'dosomething',
            label:'测试1',
            icon:'',
            url:''
          },
          {
            label:"其他",
            icon:'',
            children:[
              {
                path:'/page1',
                name:'page1',
                label:'页面1',
                icon:'',
                url:'Other/PageOne'
              },
              {
                path:'/page2',
                name:'page2',
                label:'页面2',
                icon:'',
                url:'Other/PageTwo'
              }
            ]
          }
          ]
        const hasChildren = function(){
          return list.filter((item)=>{
            return item.children
          })
        }       
        const noChildren = function(){
          return list.filter((item)=>{
            return !item.children
          })
        }
        const listData = reactive({
          hChildren:hasChildren(),
          nChildren:noChildren()
        })
        const isCollapse = ref(false)
        return{
            isCollapse,
            listData
        }
        
    }
}
</script>

<style>
.el-aside{
    border: 1px solid red;
    height: 100%;
  }
</style>