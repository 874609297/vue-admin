<template>

    <el-menu
    class="el-menu-vertical-demo"
    :collapse="collapseStore.isCollapse"
    :collapse-transition	="false" 
    >
    <div v-show="!collapseStore.isCollapse" style="text-align: center;">
    Levi'admin
    </div>
    <div v-show="collapseStore.isCollapse" style="text-align: center;">
    Levi
    </div>
    <!-- 无子菜单的导航 -->
      <el-menu-item :index="item.path" v-for="item in listData.nChildren" :key="item.path"
      @click="changeLink(item.path)"
      >
        <el-icon>
          <component v-if="item.icon" :is='item.icon'/>
        </el-icon>      

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
</template>

<script>
import { useRouter } from 'vue-router'
import {isCollapse} from '../store/index'
import {ref,reactive,toRefs} from 'vue'
export default{
    name:'CommonAside',
    setup(){
        //菜单列表
         let list=[
          {
            path:'/index',
            name:'index',
            label:'首页',
            icon:'House',
            url:''
          },
          {
            path:'/user',
            name:"user",
            label:"用户管理",
            icon:'User',
            url:"UserManage/UserManage"
          },
          {
            path:'/test',
            name:'dosomething',
            label:'测试1',
            icon:'Link',
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
        //侧边菜单是否收缩
        const collapseStore = isCollapse()

        //跳转路由
        const router = useRouter()
        const changeLink =(path)=>{
          router.push(path)
        }
        return{
            collapseStore,
            listData,
            changeLink
        }
        
    }
}
</script>

<style>
.el-aside{
    height: 100%;
  }
</style>