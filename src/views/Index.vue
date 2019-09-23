<template>
    <section class="index-container">

    <el-row :gutter="20">
      <el-col :span="22" ><div class="grid-content bg-purple"><h3>基础数据后台管理平台</h3></div></el-col>
      <el-col :span="2" ><div class="grid-content bg-purple"><img src="../assets/userlogin.png"><span>User</span></div></el-col>
    </el-row>

    <el-row :gutter="20"> 
       <el-col :span="4" >
            <el-menu 
            :default-active="$route.path"
            background-color="#383838"
            text-color="#ccc"
            active-text-color="#fff000" router :default-openeds="['2']">
            <el-menu-item index="/Index">
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2"  >
              <template slot="title">基本信息查询</template>
              <el-menu-item index="/baseInfoSearch/drugInfoSearch">药品信息查询</el-menu-item>
              <el-menu-item index="/baseInfoSearch/diagnoseInfoSearch">诊断信息查询</el-menu-item>
              <el-menu-item index="/baseInfoSearch/medicalServiceSearch">医院信息查询</el-menu-item>
              <!-- <el-submenu index="2-2">
                <template slot="title">导航12</template>
                <el-menu-item index="/nav2/nav1">导航121</el-menu-item>
                <el-menu-item index="/nav2/nav2">导航122</el-menu-item>
              </el-submenu> -->
            </el-submenu>
          </el-menu>
       </el-col>
       <el-col :span="18" >

       </el-col>
     
        
    </el-row>

   </section>
   
</template>

<script>

</script>

<style scoped>
    /*index*/
    .index-container {
        width: 100%;
        float: left;
    }
    .title{font-size:1.2em;font-weight:bold;margin:10px}

     /*改变router-link样式*/
  a {
    text-decoration: none;
    color: inherit;
  }
  .el-submenu .el-menu-item a {
    position: absolute;
    height: 100%;
    width: calc(100% - 50px);
    left: 0;
    padding-left: 50px;
  }
  .el-menu-item a {
    position: absolute;
    height: 100%;
    width: calc(100% - 60px);
    left: 0;
    padding-left: 60px;
  }
</style
