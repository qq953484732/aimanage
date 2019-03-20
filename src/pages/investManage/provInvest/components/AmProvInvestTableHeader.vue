<template>
  <div class="table-header">
    <table cellpadding="0" cellspacing="0" style="width: 100%;text-align: center;">
      <tr>
        <th><div class="cell">序号</div></th>
        <th><div class="cell">省份</div></th>
        <th class="el-table_1_column_3 is-center is-leaf is-sortable">
          <div class="cell">
            投资总额
            <span class="caret-wrapper">
              <i class="sort-caret ascending el-icon-caret-top" @click="sendA" ></i>
              <i class="sort-caret descending el-icon-caret-bottom" @click="send"></i>
            </span>
          </div>
        </th>
        <th class="el-table_1_column_3 is-center is-leaf is-sortable">
          <div class="cell">收益金额
            <span class="caret-wrapper">
              <i class="sort-caret ascending el-icon-caret-top" @click="sendC"></i>
              <i class="sort-caret descending el-icon-caret-bottom" @click="sendB"></i>
            </span>
          </div>
        </th>
        <th><div class="cell">主要项目投资</div></th>
        <th><div class="cell">投资周期</div></th>
        <th><div class="cell">投资人数</div></th>
        <th><div class="cell">投资年变化率</div></th>
        <th><div class="cell" style="text-align: left;">备注</div></th>
      </tr>
    </table>
  </div>
</template>

<script>
  import axios from "axios"
  import url from  "@/apis/url"
    export default {
        name: "AmProvInvestTableHeader",
      methods:{
          //投资总额从小到大
        send(){
          axios({
            method:'get',
            params: {
              name: 0,
              num:-1
            },
            url: url.url+'/getProvince'
          }).then((resp)=>{
            //console.log(resp.data.data.provinceList)
            this.data = resp.data.data.provinceList
            this.$emit('isGetData',this.data)
          }).catch(resp => {
            console.log('请求失败：'+resp.status+','+resp.statusText);
          });
        },
        //投资总额从大到小
        sendA(){
          axios({
            method:'get',
            params: {
              name: 0,
              num:1
            },
            url: url.url+'/getProvince'
          }).then((resp)=>{
            //console.log(resp.data.data.provinceList)
            this.data = resp.data.data.provinceList
            this.$emit('isGetData',this.data)
          }).catch(resp => {
            console.log('请求失败：'+resp.status+','+resp.statusText);
          });
        },

        //收益金额从小到大
        sendB(){
          axios({
            method:'get',
            params: {
              name: 1,
              num:-1
            },
            url: url.url+'/getProvince'
          }).then((resp)=>{
            //console.log(resp.data.data.provinceList)
            this.data = resp.data.data.provinceList
            this.$emit('isGetData',this.data)
          }).catch(resp => {
            console.log('请求失败：'+resp.status+','+resp.statusText);
          });
        },
        //收益金额从大到小
        sendC(){
          axios({
            method:'get',
            params: {
              name: 1,
              num:1
            },
            url: url.url+'/getProvince'
          }).then((resp)=>{
            //console.log(resp.data.data.provinceList)
            this.data = resp.data.data.provinceList
            this.$emit('isGetData',this.data)
          }).catch(resp => {
            console.log('请求失败：'+resp.status+','+resp.statusText);
          });
        }
      }
    }

</script>

<style scoped>
  .table-header{
    margin: 0px 10px;
    color: #878d99;
    font-weight: 500;
  }
  th{
    border-bottom: 1px solid #e6ebf5;
    padding: 6px 0;
    font-size: 12px;
    width: 111px;
  }
  th:first-child{
    width: 74px;
  }
  th:last-child{
    width: 209px;
  }
  .cell{
    line-height: 23px;
    position: relative;
  }
  .caret-wrapper{
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    width: 24px;
    cursor: pointer;
  }
  .sort-caret.ascending {
    top: 0px;
  }
  .sort-caret.descending{
    top: 7px;
  }
   .sort-caret {
    color: #b4bccc;
    width: 14px;
    overflow: hidden;
    font-size: 15px;
    position: absolute;
  }
  .el-table .ascending .sort-caret.ascending, .el-table .descending .sort-caret.descending {
    color: #409eff;
  }
</style>
