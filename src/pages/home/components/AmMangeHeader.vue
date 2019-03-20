<template>
  <div class="amHeader" ref="amHeader">
    <div class="amHeaderLeft">
      <router-link tag="img" to="/home" src="static/img/logo.png" class="logo">
      </router-link>
      <!--<img class="logo" src="static/img/logo.png" />-->
      <h3 class="amh3">小爱后台管理系统</h3>
    </div>
    <div class="amHeaderRight">
      <div>
        <ul class="amUls">
          <li>
            <am-theme :theme="theme"></am-theme>
          </li>
          <li>
            <el-badge :value="0" class="item">
              <el-button size="small" class="amButton">
                <i class="el-icon-time"></i>
              </el-button>
            </el-badge>
          </li>
          <li>
            <el-badge :value="0" class="item" type="primary">
              <el-button size="small" class="amButton">
                <i class="el-icon-message"></i>
              </el-button>
            </el-badge>
          </li>
          <li>
            <el-badge :value="0" class="item" type="warning">
              <el-button size="small" class="amButton">
                <i class="el-icon-bell"></i>
              </el-button>
            </el-badge>
          </li>
        </ul>
      </div>
      <div class="amWelcom">
        <img class="headerimg" src="static/img/headerimg.jpg"/>
        <div>
          <p class="alp1">欢迎您</p>
          <p class="alp2">{{user.key}}</p>
        </div>
      </div>
      <div class="out">
        <i class="el-icon-caret-bottom" @click="handleChangeTag"></i>
        <!--<div class="outlist" @click="show">-->
        <div class="outlist" v-if="tag">
          <router-link tag="p" to="/home/modifyinfo">
            修改信息
          </router-link>
          <router-link tag="p" to="/home/modifyinfo">
            修改密码
          </router-link>
          <router-link to="/login">
            <p @click="out">退出</p>
          </router-link>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import url from "@/apis/url.js"
  import AmTheme from './AmTheme'
  export default {
    name: 'AmMangerHeader',
    props:{
      theme:Object
    },
    data(){
      return{
        user:{
          key: ""
        },
        tag:false,
      }
    },
    watch:{
      theme(){
        this.$refs.amHeader.style.background = this.theme.headBgColor
        this.$refs.amHeader.style.color = this.theme.textColor
        document.querySelectorAll(".el-menu-item i").forEach(element => {
          element.style.color = this.theme.textColor
        });
        
        document.querySelectorAll(".el-submenu__title i").forEach(element => {
          element.style.color = this.theme.textColor
        });
      }
    },
    methods: {
      handleChangeTag(){
        // console.log(this.tag)
        this.tag = this.tag === false ? true : false
      },
      getName: function () {
        let customer = sessionStorage.getItem('aimanage');
        // console.log('customer is ' + customer)
        axios.post(url.url+'/users/userYZ', {
          key:customer
        }).then(res => {
          // console.log(res)
            if(res.data.ok==1){
              this.user.key=res.data.name;
            }else{
              this.$router.push("/login")
            }
          }).catch(err => {
          console.log('请求失败');
          this.$router.push("/login")
        });
      },
      out:function(){
        sessionStorage.removeItem("aimanage")
        this.$message("注销成功");
        outlist.style.display="none";
      },
      show:function(){
        let outlist=document.querySelectorAll(".outlist");
        outlist.style.display="block";
      }
    },
    created() {
      this.getName()
    },
    components:{
      AmTheme,
    }
  }


</script>


<style scoped>
  .amHeader{
    height:70px;
    width:100%;
    display:flex;
    background:url("/static/img/ambg.jpg");
    background-size:100% 70px;
    align-items: center;
    position: relative;
    /*background: linear-gradient(rgba(26, 176, 255, 0.85),rgba(4,122,153,0.8));*/
  }
  .amHeaderRight,.amHeaderLeft{
    display:flex;
    align-items: center;
    position: absolute;
  }
  .amHeaderRight{
    right:50px;
    top:0;
  }
  .amHeaderLeft{
    left:0;
    top:0;
  }
  .amh3{
    color:#000;
    font-weight: 100;
    letter-spacing: 4px;
    -webkit-text-stroke: 1px #000;
    line-height: 70px;
  }
  .logo{
    width:50px;
    height:50px;
    /*border-radius:50%;*/
    margin-left:10px;
    margin-right: 10px;
  }
  .headerimg{
    width:40px;
    height:40px;
    border-radius:50%;
  }
  .amUls{
    display:flex;
    list-style: none;
    margin-right:27px;
  }
  .amWelcom{
    display:flex;
    align-items: center;
    height:70px;
  }
  .amUls li{
    margin:0 10px;
  }
  .el-icon-time,.el-icon-message,.el-icon-bell{
    color:#3BC5FF;
    font-weight:600;
    font-size:16px;
  }
  .amButton{
    background:transparent;
    width:30px;
    height:30px;
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .alp1,.alp2{
     height:12px;
    margin-left:5px;
  }
  .alp1{
    font-size:12px;
     font-weight: 800;
    color:#fA5DD3;

    /*margin-top:20px;*/
  }
  .alp2 {
    color: #fff;
    line-height: 25px;
  }
  .el-icon-caret-bottom{
    color:#fff;
    margin-top: 30px;
  }
  .out{
    position:relative;
  }
  .outlist{
    position:absolute;
    left:-15px;
    top: 50px;
    color:#000;
    border:1px solid #EEEEEE;
    width:70px;
    height:90px;
    background:#fff;
    text-align: center;
    z-index:999;
    /*display:none;*/
  }
  .outlist p{
    font-size:12px;
    transform: scale(.8);
    cursor: pointer;
    line-height:30px;
  }
  .outlist p:hover{
    color:#11A0D4;
  }
</style>
