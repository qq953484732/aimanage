<template>
  <div class="fund-flow">
    <fund-flow-header @isGetData="getInfo"></fund-flow-header>
    <fund-flow-table :flowDataa="items"></fund-flow-table>
    <am-paging :max="max" @changeNum="" @changeIndex="handleChangeIndex"></am-paging>
  </div>
</template>

<script>
  import FundFlowHeader from './components/FundFlowHeader'
  import FundFlowTable from './components/FundFlowTable'
  import AmPaging from "../../../components/Paging";
  import axios from "axios"
  import url from  "@/apis/url.js"
  export default {
    name: "FundFlow",
    components:{
      AmPaging,
      FundFlowHeader,
      FundFlowTable
    },
    data(){
      return{
        items:[],
        num:20,
        index:1,
        max:1,
        sortnum : 1,
      }
    },
    methods:{
      handleChangeNum(val){
        this.num = val
      },
      handleChangeIndex(val){
        axios.get(url.url+"/getFundflow?pageIndex="+val+"&liPage="+this.num)
          .then(res=>{
            console.log(res.data)
              this.items = res.data.data
              this.max = res.data.max
          })
      },
      getInfo(val){
        this.items = val;
      // console.log(2,val)
      }

    },
    mounted(){

    }
  }
</script>

<style scoped>
  .fund-flow{
    width: 100%;
  }
</style>
