import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

//首页
import AmHomeContent from "@/pages/homeContent/HomeContent"

//资金数据
import AmFoundFunddata from "@/pages/found/funddata/am-found-funddata"
import AmFoundDistribution from "@/pages/found/distribution/am-found-distribution"
import AmFoundInvest from "@/pages/found/invest/am-found-invest"

// 投资管理***************
import AmAreaInvest from "../pages/investManage/areaInvest/AmAreaInvest"

import AmProvInvest from "../pages/investManage/provInvest/AmProvInvest"
//注册
import Amlogin from "../pages/login/AmLogin"

// 用户列表
import AmUserList from "../pages/userList/UserList"
// 信息列表
import AmMessageList from "../pages/messageList/MessageList"
// 修改信息
import AmModifyInfo from "../pages/ModifyInfo/AmModifyInfo"
// 个人信息
import AmPersonalInfo from "../pages/PersonalInfo/AmPersonalInfo"
//发布文章
import AmPublishArticle from  "../pages/fiArticles/publishArticle/PublishArticle"
//查看文章
import AmSelectArticle from "../pages/fiArticles/amselectarticle/AmSelectArticle"
//支付单据
import FundPayment from "../pages/fundmanage/fundpayment/FundPayment"
// 资金流水
import FundFlow from "../pages/fundmanage/fundflow/FundFlow"

//修改文章
import AmEditArticle from "../pages/fiArticles/AmEditArticle/AmEditArticle"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/home"
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          redirect: "index"
        },
        //首页
        {
          path: "index",
          name: "index",
          component: AmHomeContent
        },
        // ************资金数据************************
        //收支统计
        {
          path: 'funddata',
          name: 'funddata',
          component: AmFoundFunddata,
        },
        //项目分布
        {
          path: 'distribution',
          name: 'distribution',
          component: AmFoundDistribution,
        },
        //投资分布
        {
          path: 'invest',
          name: 'invest',
          component: AmFoundInvest,
        },
        //省份投资
        {
          path: 'areaInvest',
          name: 'areaInvest',
          component: AmAreaInvest,
        },
        //区域投资
        {
          path: 'provInvest',
          name: 'provInvest',
          component: AmProvInvest,
        },
        //用户列表userlist
        {
          path: 'userlist',
          name: 'userlist',
          component: AmUserList,
        },
        // 信息列表userlist
        {
          path: 'messagelist',
          name: 'messagelist',
          component: AmMessageList,
        },// 修改信息modifyinfo
        {
          path: 'modifyinfo',
          name: 'modifyinfo',
          component: AmModifyInfo,
        },//个人信息personalinfo
        {
          path: 'personalinfo',
          name: 'personalinfo',
          component: AmPersonalInfo,
        },//发布文章
        {
          path: 'fiArticles',
          name: 'fiArticles',
          component: AmPublishArticle,
        },//查看文章
        {
          path: 'findArticle',
          name: 'findArticle',
          component: AmSelectArticle,
        },
        //修改文章
        {
          path: 'editArticle',
          name: 'editArticle',
          component: AmEditArticle,
        },
        //支付单据
        {
          path:"fundpayment",
          name:"fundpayment",
          component:FundPayment,
        },
        //资金流水
        {
          path:"fundFlow",
          name:'fundFlow',
          component:FundFlow
        }


      ]
    },
    {name:'login',
      path:"/login",
      component:Amlogin
    }

  ]
})
