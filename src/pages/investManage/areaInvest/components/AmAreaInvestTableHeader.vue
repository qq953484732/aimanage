<template>
    <div class="headerBox">
      <el-tabs type="border-card" @tab-click="send">
        <el-tab-pane>
          <span slot="label"><i class="iconfont icon-zxj"></i> 华东地区</span>
            <am-area-invest-table-t-h :items="items"></am-area-invest-table-t-h>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="iconfont icon-gd"></i> 华南地区</span>
          <am-area-invest-table-t-h :items="items"></am-area-invest-table-t-h>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="iconfont icon-lft"></i> 华中地区</span>
          <am-area-invest-table-t-h :items="items"></am-area-invest-table-t-h>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="iconfont icon-dh"></i> 华北地区</span>
          <am-area-invest-table-t-h :items="items"></am-area-invest-table-t-h>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="iconfont icon-gd"></i> 西北地区</span>
          <am-area-invest-table-t-h :items="items"></am-area-invest-table-t-h>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="iconfont icon-yyq"></i> 西南地区</span>
          <am-area-invest-table-t-h :items="items"></am-area-invest-table-t-h>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="iconfont icon-zfj"></i> 东北地区</span>
          <am-area-invest-table-t-h :items="items"></am-area-invest-table-t-h>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="iconfont icon-rl"></i> 台港澳地区</span>
          <am-area-invest-table-t-h :items="items"></am-area-invest-table-t-h>
        </el-tab-pane>
      </el-tabs>

    </div>
</template>

<script>
  import AmAreaInvestTableTH from "./AmAreaInvestTableTH"
  import axios from "axios"
  import url from  "@/apis/url"
    export default {
        name: "AmAreaInvestTableHeader",
      components:{
        AmAreaInvestTableTH
      },
      data(){
        return {
          items: []
        }
      },
      mounted(){
        this.send({
          index:0
        })
      },
      methods:{
        send(num) {
          console.log(num.index)
          axios({
            method: 'get',
            params: {
              area: num.index
            },
            url: url.url + '/getAreaInvest'
          }).then((resp) => {
            this.items = resp.data.data.areaEast
          }).catch(resp => {
            console.log('请求失败：' + resp.status + ',' + resp.statusText);
          });
        }
      }

    }
</script>

<style scoped>

  .headerBox{
    height: 100%;
    margin: 5px 10px 0px;
  }

</style>
