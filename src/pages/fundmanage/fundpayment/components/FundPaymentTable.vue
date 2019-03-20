<template>
  <div>
    <div class="fund-payment-header" >
      <div class="title">
        <h2>支付单号:</h2>
      </div>
      <el-input max="200px" v-model="input" placeholder="请输入支付单号"></el-input>
      <el-button type="primary" size="small" @click="find">筛选</el-button>
      <el-button type="danger" size="small"  @click="isDelData">删除</el-button>
    </div>
    <div class="fund-payment-table">
      <el-table height="640" :data="paymentData" style="width: 100%" align='center'
                @selection-change="handleSelectionChange" @sort-change="handleSortChange" >
        <el-table-column type="selection" width="55" align='center'></el-table-column>
        <el-table-column prop="payNumber" label="支付单号" width="200" align='center'>
          <template slot-scope="scope">{{ scope.row.payNumber }}</template>
        </el-table-column>
        <el-table-column prop="orderMoney" label="订单金额" width="120" align='center' sortable="custom">
          <template slot-scope="scope">
            <span style="color:#0066CC">{{ scope.row.orderMoney }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="incomeMoney" label="收益金额" width="120" align='center' sortable="custom">
          <template slot-scope="scope">
            <span style="color:#00d053">+ {{ scope.row.incomeMoney }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="payType" label="支付项目" width="120" align='center' :render-header="renderHeader">
          <template slot-scope="scope">
            <span>{{ scope.row.payType }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="orderTime" label="下单时间" width="220" align='center' sortable="custom">
          <template slot-scope="scope">
            <el-icon name="time"></el-icon>
            <span style="margin-left: 10px;color: #66CCFF">{{ scope.row.orderTime }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="payStatus" label="支付状态" width="120" align='center' :render-header="renderHeader"></el-table-column>
        <el-table-column prop="remarks" label="备注" align='center' show-overflow-tooltip></el-table-column>
      </el-table>
    </div>
  </div>

</template>

<script>
  import axios from "axios"
  import url from  "@/apis/url.js"
  export default {
    name: "FundPaymentTable",
    data() {
      return {
        input: '',
        paymentData:[],
        delData:[],
        disabled: false
      }
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      //是否选中
      handleSelectionChange(val) {
        this.multipleSelection = val
        //获取选中数据的订单号
        if(this.multipleSelection.length>0){
          for(var i=0;i<this.multipleSelection.length;i++) {
            //console.log(t his.multipleSelection[i]._id,this.multipleSelection[i].payNumber)
            this.delData.push(this.multipleSelection[i].payNumber)
            //this.delData.join(",")
            console.log(this.delData)
          }
        }
      },
      //在列标题后面加一个图标的方法
      renderHeader(h, {column}) { // h即为cerateElement的简写，具体可看vue官方文档
        return h(
          'div',
          [
            h('span', column.label),
            h('i', {
              class: 'el-icon-arrow-down',
              style: 'font-size:6px'
            })
          ],
        );
      },
      //初始化获取数据
      getPaymentInfo(){
        axios.get(url.url+'/getFundpayment'+"?"+"pageIndex"+"="+1 )
          .then(this.getPaymentInfoSucc)
      },
      getPaymentInfoSucc(res){
        res = res.data
        //console.log(res)
        this.paymentData = res.data
       // console.log(this.paymentData)
      },

      //订单金额，收益金额，下单时间排序
      handleSortChange(column, prop, order){
        // console.log(column.prop);
        let name = 1
        let num = 1
        if(column.prop == "orderMoney"){
          name = 1
        }else if(column.prop == "incomeMoney"){
          name = 2
        }else if(column.prop == "orderTime"){
          name = 3
        }

        if(column.order == "ascending"){
          num = -1
        }else if(column.order == "descending"){
          num = 1
        }

        axios({
          methods: "get",
          params:{
            name:name,
            num:num
          },
          url:url.url+"/getFundpaymentOrder"
        }).then((res)=>{
          console.log(res.data)
          this.paymentData = res.data.data
          // this.formatterType()
        }).catch((err)=>{
          console.log("请求失败")
        })

        // console.log(column.order);
      },

      //删除数据
      isDelData(){
        let delNum=this.delData.join(",")
        //console.log(delNum)
        axios({
          method: 'get',
          params: {
            payNumber: delNum
          },
          url: url.url + '/delFundpayment'
        }).then((res) => {
          // alert("删除成功")
          console.log(res.data)
          this.getPaymentInfo()
        }).catch(res => {
          console.log('请求失败：' + res.status + ',' + res.statusText);
        });
      },
      /*handleChangeTag(){
        console.log(this.disabled)
        this.disabled = this.disabled === false ? true : false
      },*/
      //筛选数据
      find(){
        axios({
          methods: "get",
          params:{
            payNumber: this.input
          },
          url:url.url+"/getFundpaymentOrder"
        }).then((res)=>{
          console.log(res.data)
          this.paymentData = res.data.data
          // this.formatterType()
        }).catch((err)=>{
          console.log("请求失败")
        })
      },

    },
    mounted(){
      this.getPaymentInfo()
    }


  }
</script>

<style scoped>
  .fund-payment-header{
    display: -webkit-flex;
    height: 50px;
    align-items: center;
  }
  .el-input>>>{
    width: 180px;
    margin: 0 10px;
  }
</style>
