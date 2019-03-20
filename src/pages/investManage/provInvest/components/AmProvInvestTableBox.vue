<template>
  <div>
    <div class="tableBox">
      <am-prov-invest-table-header @isGetData = "isGetData"></am-prov-invest-table-header>
      <am-prov-invest-table-content :items="items"></am-prov-invest-table-content>
    </div>
  </div>
</template>

<script>
  import AmProvInvestTableHeader from "./AmProvInvestTableHeader"
  import AmProvInvestTableContent from "./AmProvInvestTableContent"
  import axios from "axios"
  import url from  "@/apis/url"
  export default {
    name: "AmProvInvestTableBox",
    components :{
      AmProvInvestTableHeader,
      AmProvInvestTableContent
    },
    data(){
      return {
        items: []
      }
    },
    created:function(){
      this.send()
    },
    methods:{
      send(){
        axios({
          method:'get',
          url: url.url+'/getProvince'
        }).then((resp)=>{
          //console.log(resp.data.data.provinceList)
          this.items = resp.data.data.provinceList
        }).catch(resp => {
          console.log('请求失败：'+resp.status+','+resp.statusText);
        });
      },
      isGetData (data) {
          this.items = data
          //console.log(this.items)
      }
    }

  }
</script>

<style scoped>
  .tableBox{
    width: 100%;
  }
</style>
