<template>
    <div class="content">
        <el-row :gutter="10">
            <el-col :md="4">
                <div class="grid-content grid-content-box grid-content-one">
                    <img :src="user.personalImg" alt=""/>
                    <div class="pBtn upload">
                        <p>上传</p>
                        <img src="../../../../static/img/upload.png" alt=""/>
                    </div>
                </div>
            </el-col>
            <el-col :md="5">
                <div class="grid-content grid-content-box grid-content-two">
                    <p>姓名：{{user.username}}</p>
                    <p>昵称：{{user.nickname}}</p>
                    <p>投资年限：{{user.touziyear}}年</p>
                    <p>绑定邮箱：{{user.email}}</p>
                    <p>绑定手机：{{user.telphone}}</p>
                    <div class="pBtn sign">
                        <img src="../../../../static/img/sign.png" alt=""/>
                        <p>签到有奖</p>
                    </div>
                </div>
            </el-col>
            <el-col :md="10">
                <div class="grid-content grid-content-box grid-content-three">
                    <div class="grid-content-child">
                        <div class="moneyArea">
                            <h3>可用现金：</h3>
                            <p><span>{{user.availableMoney}}</span>元</p>
                        </div>
                        <div class="moneyPlay">
                            <img src="../../../../static/img/invite.png" alt=""/>
                            <div class="moneyPlayChild">
                                <p>我要出借</p>
                                <p>充值</p>
                                <p>提现</p>
                            </div>
                        </div>
                    </div>
                    <p class="fundCustody">您的每笔交易资金，都将接受银行全程存管 <span>了解资金存管 》</span></p>
                </div>
            </el-col>
            <el-col :md="5">
                <div class="grid-content grid-content-box">
                    <div class="pBtn sign pData">
                        <img src="../../../../static/img/sign.png" alt=""/>
                        <p>个人数据</p>
                    </div>
                    <div class="dataDel">
                        <div class="dataDelChild">
                            <p>{{user.investNum}}</p>
                            <p>投资数量</p>
                        </div>
                        <div class="dataDelChild">
                            <p>{{user.attentionNum}}</p>
                            <p>关注的人</p>
                        </div>
                        <div class="dataDelChild">
                            <p>{{user.fans}}</p>
                            <p>粉丝</p>
                        </div>
                    </div>
                    <p class="fundCustody">谢谢您的关注，<span>了解我的更多个人信息 》</span></p>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :md="6" v-for="(m,inx) in personalInfo.money" :key="inx">
                <div class="grid-content grid-content-box grid-content-five">
                    <div class="moneyData">
                        <img src="../../../../static/img/set.png" alt=""/>
                        <h3>{{m.name}}</h3>
                    </div>
                    <p class="moneyDataDel">￥ <span>{{m.moneyNum}}</span></p>
                    <p class="seeDetails">查看详情 》</p>
                </div>
            </el-col>
        </el-row>
        <div class="grid-content-six">
            <div class="grid-content-six-child" v-for="item in personalInfo.bandata">
                <a :href="item.url" target="_blank" :style="{backgroundPosition:0 +' -'+ item.data+'px'}"></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AmPersonalInfoCon",
        props:["personalInfo","user"]
    }
</script>

<style scoped>
    .content{
        padding: 20px;
    }
    .el-row{
        padding: 10px 0;
    }
    .grid-content-box {
        border: 1px solid #dfdfdf;
        min-height: 36px;
        padding: 10px 12px;
    }
    .grid-content-one{
        text-align: center;
      height: 215px;
    }
    .grid-content-two{
      height: 215px;
    }
    .grid-content-three{
      height: 215px;
    }
    .grid-content-four{
      height: 215px;
    }
    .grid-content-one>img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    .pBtn{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        color: #fff;
        font-size: 12px;
    }
    .upload{
        width: 73px;
        border-radius: 2px;
        background: #67c23a;
        margin: 5px auto 0;
    }


    .upload:hover{
        background: #85CE61;
    }
    .grid-content-two>p{
        font-size: 14px;
        line-height: 24px;
    }
    .sign{
        background: #3bc5ff;
    }
    .sign>img{
        margin-right: 5px;
        width: 13px;
        height: 13px;
    }
    .sign:hover{
        background:#F9C855;
    }
    .grid-content-child{
        display: flex;
        justify-content: space-between;
    }
    .moneyArea{
        padding-right: 10px;
        font-size: 14px;
        line-height: 50px;
    }
    .moneyArea>h3{
        font-weight: 900;
        vertical-align: center;
    }
    .moneyArea>p>span{
        color: #c10000;
        font-weight: 900;
    }
    .moneyPlay{
        display: flex;
        flex-direction: column;
    }
    .moneyPlay>img{
        width: 315px;
        height: 40px;
    }

    .moneyPlayChild{
        display: flex;
        justify-content: center;
    }
    .moneyPlayChild>p{
        margin: 14px 8px;
        font-size: 12px;
        color: #ffffff;
        padding: 9px 16px;
        border-radius: 2px;
    }
    .moneyPlayChild>p:first-child{
        background: #67c23a;
    }
    .moneyPlayChild>p:nth-child(2){
        background: #eb9e05;
    }
    .moneyPlayChild>p:last-child{
        background: #fa5555;
    }
    .moneyPlayChild>p:first-child:hover{
        background: #85CE61;
    }
    .moneyPlayChild>p:nth-child(2):hover{
        background: #EFB137;
    }
    .moneyPlayChild>p:last-child:hover{
        background: #FB7777;
    }
    .fundCustody{
        padding: 10px 0;
        font-size: 14px;
        line-height: 20px;
    }
    .fundCustody>span{
        color: #3bc5ff;
    }
    .pData:hover{
        background: #3bc5ff;
    }
    .dataDel{
        display: flex;
        justify-content: space-around;
        padding: 10px 0;
    }
    .dataDelChild>p{
        text-align: center;
        line-height: 40px;
    }
    .dataDelChild>p:first-child{
        font-size: 12px;
        color: #c10000;
        font-weight: 900;
    }
    .dataDelChild>p:last-child{
        font-size: 14px;
        color: #3bc5ff;
    }
    .grid-content-five{
        text-align: center;
    }
    .moneyData{
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 70px
    }
    .moneyData>img{
        width: 16px;
        height: 16px;
        margin-right: 10px;
    }
    .moneyData>h3{
        font-size: 18px;
        font-weight: 900;
    }
    .moneyDataDel{
        font-size: 14px;
        font-style: italic;
        line-height: 70px
    }
    .moneyDataDel>span{
        color:#c10000;
        font-weight: 900;
        font-style: normal;
    }
    .seeDetails{
        padding: 9px 0;
        font-size: 14px;
        font-weight: 900;
        border: 1px solid #3bc5ff;
        background: #3bc5ff;
        color: #fff;
    }
    .seeDetails:hover{
        background: #fff;
        color: #3bc5ff;
    }
    /*.seeDetailsTwo{*/
        /*background: #fff;*/
        /*color: #3bc5ff;*/
    /*}*/
    /*.seeDetailsTwo:hover{*/
        /*background: #3bc5ff;*/
        /*color: #fff;*/
    /*}*/
    .grid-content-six{
        display: flex;
        justify-content: space-around;
        padding: 10px 0;
    }
    .grid-content-six-child{
      display: flex;
    }
    .grid-content-six-child a{
        display: block;
        height: 50px;
        background-image: url("../../../../static/img/pro_map.gif");
    }
    @media screen and (max-width:991px) {
      .grid-content-one>img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      .moneyPlay>img{
        width: 100%;
        height: 40px;
      }
      .grid-content-one{
        text-align: center;
        height: 160px;
      }
      .grid-content-two{
        text-align: center;
        height: 175px;
      }
    }
</style>
