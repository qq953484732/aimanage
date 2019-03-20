<template>
  <div class="container demo-1">
    <div class="content">
      <div id="large-header" class="large-header">
        <canvas id="demo-canvas"></canvas>
        <div class="logo_box">
          <h3>小爱金融后台管理系统</h3>
          <form action="#" name="f" method="post">
            <div class="input_outer">
              <span class="u_user"></span>
              <input id="ID" class="text" v-model="user.name" style="color: #000000 !important" type="text" placeholder="请输入账户">
            </div>
            <div class="input_outer">
              <span class="us_uer"></span>
              <input id="PASSWORD"  v-model="user.pwd" class="text" style="color: #000000 !important; position:absolute; z-index:100;"value="" type="password" placeholder="请输入密码">
            </div>
            <div id="LOGIN" class="mb2"><a class="act-but submit" href="javascript:;" @click="login" style="color: #FFFFFF">登录</a></div>
          </form>
        </div>
      </div>
    </div>
  </div><!-- /container -->
</template>
<script>
  import AmLoginHeader from "./component/AmLoginHeader";
  import axios from 'axios'

  import url from "@/apis/url.js"
  export default {
    name: 'AmLogin',
    components: {
      AmLoginHeader
    },
    data(){
      return{
        user:{
          name: '',
          pwd: ''
        }
      }
    },
    methods: {
      login: function () {
        let customer = this.user;
        axios.post(url.url+'/users/login', {
          name:customer.name,
          pass:customer.pwd
        })
          .then(res => {
            if(res.data.ok==888){
              sessionStorage.setItem("aimanage",res.data.key);
              this.$message({
                message: '登录成功',
                type: 'success'
              });
              this.$router.push("/home");
              customer.name="";
              customer.pwd="";
            }else{
              this.$message.error(res.data.msg)
              customer.name="";
              customer.pwd="";
            }
          }).catch(err => {
          console.log('请求失败');

        });
      },
    },
    mounted() {
    }
  }
</script>
<style  scoped>
  .container{
   height: 100%;
  }
  .content{
    height: 100%;
  }
  #large-header{
    height: 100%;
  }
  input::-webkit-input-placeholder{
    color:rgba(0, 0, 0, 0.726);
  }
  input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:rgba(0, 0, 0, 0.726);
  }
  input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:rgba(0, 0, 0, 0.726);
  }
  input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
    color:rgba(0, 0, 0, 0.726);
  }
</style>
