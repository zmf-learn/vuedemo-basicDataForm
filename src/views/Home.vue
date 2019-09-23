<template>
    <section class="index-container">

    <el-row :gutter="20">
      <el-col :span="22" ><div class="grid-content bg-purple"><h3>基础数据后台管理平台</h3></div></el-col>
      <el-col :span="2" ><div class="grid-content bg-purple"><img src="../assets/userlogin.png"><span>User</span></div></el-col>
    </el-row>

    <el-row :gutter="20"> 
     <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        router
        overflow-y:
        scroll
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">账号管理</span>
          </template>
          <el-menu-item index="/demo/index">列表</el-menu-item>
          <el-menu-item index="/demo/group/index">分组</el-menu-item>
        </el-submenu>
     </el-menu>

    </el-row>

   </section>
   
</template>

<script>
   export default {
  name: 'sliderMenu',
  data () {
    return {}
  },
  mounted () {},
  computed: {
    onRoutes () {
      // 当前激活菜单的 index
      let index = this.$route.path.replace('/', '')
      let title = this.$route.meta.title
      // 改变浏览器title
      document.title = title
      return index
    }
  },
  methods: {}
}
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
