<template>
    <section class="index-container">

    <el-row :gutter="24">
      <el-col :span="22" ><div class="grid-content bg-purple"><h3>基础数据后台管理平台</h3></div></el-col>
      <!-- <el-col :span="2" ><div class="grid-content bg-purple"><img src="../assets/userlogin.png" ><span>User</span></div></el-col> -->
       <el-col :span="2" class="userinfo" >
				<el-dropdown trigger="hover"> 
					<span class="el-dropdown-link userinfo-inner"><img src="../assets/userlogin.png" > {{sysUserName}}</span>
					<el-dropdown-menu slot="dropdown"  v-show="collapsed">
						<el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
    </el-row>
    
    <el-row :gutter="20"> 
       <el-col :span="4" >
          	<el-menu :default-active="$route.path" class="el-menu-vertical-demo" 
					 unique-opened router v-show="!collapsed">
					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
						<el-submenu :index="index+''" v-if="!item.leaf">
							<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
							<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
					</template>
				</el-menu>
       </el-col>
       <el-col :span="18" >
       </el-col>
    </el-row>
   </section>
   
</template>

<script>
   	export default {
		data() {
			return {
				sysName:'VUEADMIN',
				collapsed:false,
				sysUserName: 'sfsdfsdf',
				sysUserAvatar: '',
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
    	methods: {
			onSubmit() {
				console.log('submit!');
			},
			handleopen() {
				//console.log('handleopen');
			},
			handleclose() {
				//console.log('handleclose');
			},
			handleselect: function (a, b) {
			},
			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/login');
				}).catch(() => {

				});
			},
			//折叠导航栏
			collapse:function(){
				this.collapsed=!this.collapsed;
			},
			showMenu(i,status){
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			}
		},
		mounted() {
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysUserAvatar = user.avatar || '';
			}

		}
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
