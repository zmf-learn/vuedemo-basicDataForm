<template>
  <div class="login-container">
    <el-form ref="formLogin" v-model="formLogin" :rules="rules"  class="login-form">
      <h3 class="title">基础数据平台</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="formLogin.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="formLogin.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item >
      <el-button type="primary" class="login-btn"  @click.native.prevent="loginSubmit" :loading="logining">登录</el-button>
    </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { requestLogin } from '../api/api';
  export default {
    data() {
      return {
        logining: false,
        formLogin: {
          account: 'admin',
          checkPass: '123456'
        },
        rules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        checked: true
      };
    },
    methods: {
      loginSubmit(ev) {
        var _this = this;
         var loginParams = { name: this.formLogin.account, password: this.formLogin.checkPass };
            // requestLogin(loginParams).then(data => {
            //   if(data.status==200){
            //     //否则就跳到默认的首页
            //     this.$router.push({
            //       name: 'Home'
            //     })
            //   }
            //   console.log(data);
            // });
            localStorage.userinfo={name: this.formLogin.account, password: this.formLogin.checkPass };
             this.$router.push({
                   name: 'Index'
               })
      }
    }
  }

</script>

<style lsng="scss" scoped>
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: white;
}
.login-container .login-form {
  width: 20%;
  margin: 10% auto;
  color: white;
}
.login-container .title {
  font-size: 1.8em;
    color: #797974;
}
.login-container .login-btn{width:100%;background-color: #173B8C !important;border-color: rgb(4, 46, 143);}
</style>
