<template>
  <div class="fund-flow-table">
    <el-table
      :data="flowData"
      style="width: 100%"
      align='center'
      @sort-change='handleSortChange'>
      <el-table-column
        type="index"
        label="序号"
        align='center'
        width="80">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间"
        align='center'
        width="220"
        sortable='custom'>
        <template slot-scope="scope">
          <el-icon name="time"></el-icon>
          <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="incomePayType"
        label="收支类型"
        align='center'
        width="180"
        :formatter="formatterType"
        :filters="fields.incomePayType.filter.list"
        :filter-method="filterType"
        >
        <template slot-scope="scope">
          <el-tag style="margin-left: 10px" >{{ scope.row.incomePayType }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="incomePayDes"
        label="收支描述"
        align='center'
        width="240">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.incomePayDes }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="income"
        label="收入"
        align='center'
        width="170"
        sortable='custom'>
        <template slot-scope="scope">
          <span style="color:#00d053">+ {{ scope.row.income }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="pay"
        label="支出"
        align='center'
        width="170"
        sortable='custom'>
        <template slot-scope="scope">
          <span style="color:#f56767">- {{ scope.row.pay }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="accoutCash"
        label="账户现金"
        align='center'
        width="170"
        sortable='custom'>
        <template slot-scope="scope">
          <span style="color:#4db3ff">{{ scope.row.accoutCash }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="remarks"
        label="备注"
        align='center'
        width="250">
        <template slot-scope="scope">
          <span>{{ scope.row.remarks}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="operation"
        align='center'
        label="操作"
        fixed="right"
        width="180">
        <template slot-scope='scope'>
          <el-button
            type="warning"
            icon='edit'
            size="mini"
            @click="dialogFormVisible = true ,handleEdit(scope.$index, scope.row)"
          >编辑</el-button>

          <el-dialog
            title="更改资金信息"
            :visible.sync="dialogFormVisible"
            :modal-append-to-body="false"
            :close-on-click-modal="false"
             class="edit-form"
            :before-close="handleClose">
            <el-form :model="form"  ref="form" class="flowForm">
              <el-form-item label="收支类型:" :label-width="formLabelWidth" prop="incomePayType">
                <el-select v-model="form.incomePayType" placeholder="收支类型">
                  <el-option label="提现" value="0"></el-option>
                  <el-option label="提现手续费" value="1"></el-option>
                  <el-option label="提现锁定" value="2"></el-option>
                  <el-option label="理财服务退出" value="3"></el-option>
                  <el-option label="购买宜定盈" value="4"></el-option>
                  <el-option label="充值" value="5"></el-option>
                  <el-option label="优惠券" value="6"></el-option>
                  <el-option label="充值礼券" value="7"></el-option>
                  <el-option label="转账" value="8"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="收支描述:" :label-width="formLabelWidth" prop="incomePayDes">
                <el-input type="textarea" v-model="form.incomePayDes" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="收入:" :label-width="formLabelWidth" prop="income">
                <el-input v-model="form.income" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="支出:" :label-width="formLabelWidth" prop="pay">
                <el-input v-model="form.pay" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="账户现金:" :label-width="formLabelWidth" prop="accoutCash">
                <el-input v-model="form.accoutCash" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="备注:" :label-width="formLabelWidth" prop="remarks">
                <el-input type="textarea" v-model="form.remarks" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click.native="handleCancel('editForm')">取消</el-button>
                <el-button type="primary" @click.native="handleUpdate('editForm')">更新</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>

          <el-button
            type="danger"
            icon='delete'
            size="mini"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import axios from "axios"
  import url from  "@/apis/url.js"
  export default {
    name: "FundFlowTable",
    props:{
      flowDataa:Array
    },
    data() {
      return {
        dialogTableVisible: false,
        dialogFormVisible: false,

        //form里面的参数
        form: {
          incomePayType: "",
          incomePayDes:"",
          income:"",
          pay:"",
          accoutCash:"",
          remarks:""
        },

        formLabelWidth: '120px',
        flowData:[],
        //收支类型数据
        fields: {
          incomePayType:{
            filter: {
              list: [{
                text: '提现',
                value: 0
              },{
                text: '提现手续费',
                value: 1
              }, {
                text: '提现锁定',
                value: 2
              }, {
                text: '理财服务退出',
                value: 3
              }, {
                text: '购买宜定盈',
                value: 4
              }, {
                text: '充值',
                value: 5
              }, {
                text: '优惠券',
                value: 6
              }, {
                text: '充值礼券',
                value: 7
              }, {
                text: '转账',
                value: 8
              }],
              multiple: true
            }
          },
          create_time: {
            info: {
              prop: 'create_time',
              label: '日期',
              sortable: true
            },
            filter: {

            },
            style: {
              width: '260',
              align: 'center'
            }
          },
        },
        format_type_list: {
          0: '提现',
          1: '提现手续费',
          2: '提现锁定',
          3: '理财服务退出',
          4: '购买宜定盈',
          5: '充值',
          6: '优惠券',
          7: '充值礼券',
          8: '转账'
        },
        //需要给分页组件传递的信息
        paginations: {
          pageIndex: 1,  // 当前位于哪页
          total: 231,        // 总数
          page_size: 20,   // 1页显示多少条
          page_sizes: [5, 10, 15, 20],  //每页显示多少条
        }
      }
    },
    methods: {
      // let item = this.flowData

      formatterType(value,row) {
        // const type = parseInt(item.incomePayType);
        // return this.format_type_list[type];
        // return row.incomePayType == value
        this.flowData.forEach(ele=>{
          // console.log(this.flowData)
          if(ele.incomePayType=="0"){
            ele.incomePayType="提现"
          }else if(ele.incomePayType=="1"){
            ele.incomePayType="提现手续费"
          }else if(ele.incomePayType=="2"){
            ele.incomePayType="提现锁定"
          }else if(ele.incomePayType=="3"){
            ele.incomePayType="理财服务退出"
          }else if(ele.incomePayType=="4"){
            ele.incomePayType="购买宜定盈"
          }else if(ele.incomePayType=="5"){
            ele.incomePayType="充值"
          }else if(ele.incomePayType=="6"){
            ele.incomePayType="优惠券"
          }else if(ele.incomePayType=="7"){
            ele.incomePayType="充值礼券"
          }else if(ele.incomePayType=="8"){
            ele.incomePayType="提现手续费"
          }
        })
      },
      //选中类型，显示对应的数据方法
        filterType(val) {
        let filterTypeValue = val;
        this.aaaa.push(filterTypeValue)
          console.log(this.aaaa)
      },

      getFlowInfo(){
        axios.get(url.url+"/getFundflow?pageIndex=1")
          .then(this.getFlowInfoSucc)
      },
      getFlowInfoSucc(res){
        res = res.data
        // console.log(res)
        if(res.ok==1){
          this.flowData = res.data
          // console.log(this.flowData)
          this.formatterType()
        }else{
          console.log("请求失败")
        }
      },
      //pageSize改变时触发
      handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
      },
      //当前页改变是触发
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        this.paginations.pageIndex = val
      },
      //自定义后端排序
      handleSortChange(column, prop, order){
        // console.log(column.prop);
        let name = 0
        let num = 1
        if(column.prop == "createTime"){
          name = 0
        }else if(column.prop == "income"){
          name = 1
        }else if(column.prop == "pay"){
          name = 2
        }else if(column.prop == "accoutCash"){
          name = 3
        }

        if(column.order == "ascending"){
          num = 1
        }else if(column.order == "descending"){
          num = -1
        }

        axios({
          methods: "get",
          params:{
            name:name,
            num:num
          },
          url:url.url+"/getFundflowOrder"
        }).then((res)=>{
          console.log(res.data)
          this.flowData = res.data.data
          this.formatterType()
        }).catch((err)=>{
          console.log("请求失败")
        })

        // console.log(column.order);
      },

      //编辑数据的方法
      handleEdit(index, row) {
        console.log(index, row);
        this.dialogFormVisible = true;
        this.form = Object.assign({}, row);
      },
      handleClose(done) {
        /*done();
        location.reload();*/
        this.editFormVisible = false;
      },

      handleCancel(formName) {
        this.dialogFormVisible = false;
      },


      //删除数据方法
      handleDelete(index, row) {
        let rowData = row
        let deleteId = rowData._id
        // console.log(deleteId)
        axios({
          methods: "get",
          params:{
            id:deleteId
          },
          url:url.url+"/delFundflow"
        }).then((res)=>{
          // console.log(res.data)
          alert(res.data.msg)
          if(res.data.ok == 1){
            this.getFlowInfo()
          }
          // this.flowData = res.data.data
        }).catch((err)=>{
          console.log("请求失败")
        })
      }
    },
    mounted(){
      this.getFlowInfo()
    },
    watch:{
      flowDataa(e) {
          this.flowData = this.flowDataa;
          this.formatterType()
      }
    }
  }
</script>

<style scoped>
  /*.el-dialog>>>{*/
    /*overflow: auto;*/
  /*}*/
</style>
