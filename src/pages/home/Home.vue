<template>
  <div class="home">
    <div class="header">
    <am-manger-header :theme="theme"></am-manger-header>
    </div>
    <div class="section">
      <div class="secLeft" ref="secLeft">
        <el-row class="tac">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            :background-color="theme.listBgColor"
            :text-color="theme.textColor"
            @open="openLi"
            :router="true"
            active-text-color="#FF6428"
            :collapse="isCollapse"
            :unique-opened="true"

          >
            <el-menu-item index="/home/index" @click="titleChange">
              <i class="iconfont icon-zhuye"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/home/userlist" @click="titleChange">
              <i class="iconfont icon-userlist"></i>
              <span slot="title">用户列表</span>
            </el-menu-item>
            <el-menu-item index="/home/messagelist" @click="titleChange">
              <i class="iconfont icon-xinxilist"></i>
              <span slot="title">信息列表</span>
            </el-menu-item>
            <el-submenu index="4">
              <template slot="title">
                <i class="iconfont icon-xinximangee"></i>
                <span>信息管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/home/personalinfo" @click="titleChange">个人信息</el-menu-item>
                <el-menu-item index="/home/modifyinfo" @click="titleChange">修改信息</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="iconfont icon-zijinguanli"></i>
                <span>资金管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/home/fundFlow" @click="titleChange">资金流水</el-menu-item>
                <el-menu-item index="/home/fundpayment" @click="titleChange">支付单据</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="iconfont icon-touzi"></i>
                <span>投资管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/home/provInvest" @click="titleChange">省份投资</el-menu-item>
                <el-menu-item index="/home/areaInvest" @click="titleChange">区域投资</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">
                <i class="iconfont icon-art"></i>
                <span>金融文章</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/home/fiArticles" @click="titleChange">发布文章</el-menu-item>
                <el-menu-item index="/home/editArticle" @click="titleChange">编辑文章</el-menu-item>
                <el-menu-item index="/home/findArticle" @click="titleChange">查看文章</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="8">
              <template slot="title">
                <i class="iconfont icon-shuju"></i>
                <span>资金数据</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/home/invest" @click="titleChange">投资分布</el-menu-item>
                <el-menu-item index="/home/distribution" @click="titleChange">项目分布</el-menu-item>
                <el-menu-item index="/home/funddata" @click="titleChange">收支统计</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-row>
      </div>
      <div class="secRight">
        <am-title :data="title" @change="isTitleChange"></am-title>
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>
  import AmTitle from "../../components/am-title"
  import AmMangerHeader from "./components/AmMangeHeader"
  import {mapState,mapMutations} from 'vuex'
  export default {
    name: 'Home',
    data() {
      return {
        theme:{},
        isTitle:null,
        title: {
          title: "",
          children: {
            title: "",
          }
        },
        close:0,
        oldOpen:0,
        isCollapse:false,
        titleTable:
          {
            index:"",
            funddata: "资金数据&收入统计",
            distribution:"资金数据&项目分布",
            invest:"资金数据&投资分布",
            areaInvest:"投资管理&区域投资",
            provInvest:"投资管理&省份投资",
            userlist:"用户列表",
            messagelist:"信息列表",
            personalinfo:"信息管理&个人信息",
            modifyinfo:"信息管理&修改信息",
            fiArticles:"金融文章&发布文章",
            findArticle:"金融文章&查看文章",
            fundpayment:"基金管理&支付单据",
            fundFlow:"基金管理&资金流水",
            editArticle:"金融文章&修改文章"
          },
          colorList:{
            "1":{
              listBgColor:'#1d2b36',
              headBgColor:'#7266ba',
              textColor:'#fff',
              headTextColor:'#fff',
              checkBgColor:''
            },
            "2":{
              listBgColor:'#ffffff',
              headBgColor:'#3a3f52',
              textColor:'#000',
              headTextColor:'#eee',
              checkBgColor:''
            },
            "3":{
              listBgColor:'#3a3f52',
              headBgColor:'#27c24c',
              textColor:'#eee',
              headTextColor:'#000',
              checkBgColor:''
            },
            "4":{
              listBgColor:'#119cc5',
              headBgColor:'#e4e9ec',
              textColor:'#111',
              headTextColor:'#000',
              checkBgColor:''
            },
            "5":{
              listBgColor:'#87cc00',
              headBgColor:'orange',
              textColor:'#111',
              headTextColor:'#000',
              checkBgColor:''
            },
          },
      }
    },
    components: {
      AmTitle,
      AmMangerHeader
    }
    ,
    methods: {
      initTheme(){
        this.theme = this.colorList['1']
        this.$refs.secLeft.style.backgroundColor = this.theme.listBgColor
        this.$refs.secLeft.style.color = this.theme.textColor
      },
      //改变title
      titleChange(index) {
        let url = this.$route.name;
          this.title.title=this.titleTable[url].split("&")[0];
          this.title.children.title=this.titleTable[url].split("&")[1];
      },
      //获取展开的导航
      openLi(index,a){
        this.close = this.oldOpen
        this.oldOpen = index;
        // console.log(index,a)
      },
      isTitleChange(data){
        this.isTitle = data;
        if(!this.isCollapse){
        setTimeout(()=> {
          let is =this.isCollapse
          this.isCollapse=!is;
        },1000)
        }else{
          let is =this.isCollapse
          this.isCollapse=!is;
        }
      },
      ...mapMutations(['changeStatus'])
    },
    computed: {
      ...mapState(['themeNum']),
    },
    watch:{
      $route(to,from){
        if(to.path=="/home/index"||to.path=="/home"||to.path=="/"){
          this.titleChange();
        }
      },
      isTitle(a,b){
        if(a){
          document.querySelector(".secRight").style.marginLeft = "-160px";
          this.changeStatus()
        }else{
          document.querySelector(".secRight").style.marginLeft = "0";
          this.changeStatus()

        }
      },
      themeNum(){
        this.theme = this.colorList[this.themeNum]
        this.$refs.secLeft.style.backgroundColor = this.theme.listBgColor
        this.$refs.secLeft.style.color = this.theme.textColor
      }
    },
    mounted() {
      this.initTheme()
      //初始化title
      this.titleChange()
  /*    console.log(
`//                                                          _ooOoo_
//                                                         o8888888o
//                                                         88" . "88
//                                                         (| -_- |)
//                                                          O\\ = /O
//                                                      ____/\`---'\\____
//                                                    .   ' \\\\| |// \`.
//                                                     / \\\\||| : |||// \\
//                                                   / _||||| -:- |||||- \\
//                                                     | | \\\\\\ - /// | |
//                                                   | \\_| ''\\---/'' | |
//                                                    \\ .-\\__ \`-\` ___/-. /
//                                                 ___\`. .' /--.--\\ \`. . __
//                                              ."" '< \`.___\\_<|>_/___.' >'"".
//                                             | | : \`- \\\`.;\`\\ _ /\`;.\`/ - \` : | |
//                                               \\ \\ \`-. \\_ __\\ /__ _/ .-\` / /
//                                       ======\`-.____\`-.___\\_____/___.-\`____.-'======
//                                                          \`=---='
//
//                                       .............................................
//                                              佛祖保佑             永无BUG
//                                      佛曰:
//                                              写字楼里写字间，写字间里程序员；
//                                              程序人员写程序，又拿程序换酒钱。
//                                              酒醒只在网上坐，酒醉还来网下眠；
//                                              酒醉酒醒日复日，网上网下年复年。
//                                              但愿老死电脑间，不愿鞠躬老板前；
//                                              奔驰宝马贵者趣，公交自行程序员。
//                                              别人笑我忒疯癫，我笑自己命太贱；
//                                              不见满街漂亮妹，哪个归得程序员？`
      )*/
    }
  }

</script>

<style lang='scss' scoped>
  .home {
    display: flex;
    flex-direction: column;
    height: 100%;

    .header {
      height: 70px;
      background: red;
    }

    .section {
      display: flex;
      /*flex: 1;*/
      height: 100%;
      width: 100%;
      .secLeft {
        width: 200px;
        height: 100%;
        background: #324057;
      }

      .secRight {
        height: 100%;
        overflow-y: auto;
        flex: 1;
        display: flex;
        flex-direction: column;
        background: #ffffff;
        z-index: 50;
        transition: all 1s ease;

      }
    }

  }
</style>
