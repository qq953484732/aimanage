<template>
  <div class="fund-flow-header">
    <div class="title-word">
      <h2>投标时间筛选:</h2>
    </div>
    <div class="block">
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="选择开始时间">
      </el-date-picker>
    </div>
     --
    <div class="block">
      <el-date-picker
        v-model="value2"
        type="datetime"
        placeholder="选择结束时间">
      </el-date-picker>
    </div>
    <el-button type="primary" size="small" @click="selectData">筛选</el-button>
    <!--<fund-bounced class="fund-flow-header-right"></fund-bounced>-->
    <div class="fund-flow-header-right">
      <el-button type="primary" size="small" @click="dialogFormVisible = true">添加</el-button>

      <el-dialog title="新增资金信息" :visible.sync="dialogFormVisible">
        <el-form :model="form" :rules="rules" ref="form" class="flowForm">
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
            <el-button @click="resetForm('form')">取消</el-button>
            <el-button type="primary" @click="submitForm('form')">提交</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import url from  "@/apis/url.js"
  export default {
    name: "FundFlowHeader",
    data() {
      return {
        datas:[],
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
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
        rules: {
          incomePayType: [
            { required: true, message: '请选择一个', trigger: 'blur' }
          ],
          incomePayDes: [
            { required: true, message: '请输入内容', trigger: 'blur' },
          ],
          income: [
            { required: true, message: '请输入内容', trigger: 'change' }
          ],
          pay: [
            { required: true, message: '请输入内容', trigger: 'blur' }
          ],
          accoutCash: [
            { required: true, message: '请输入内容', trigger: 'change' }
          ],
          remarks: [
            { required: true, message: '请输入内容', trigger: 'change' }
          ]
        },
        formLabelWidth: '120px'
      };
    },
    methods: {
      submitForm(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            let formData = this[form];
            axios.post(url.url+"/addFundflow",formData)
              .then(res=>{
                if(res.data.ok==1){
                  alert("添加成功")
                }
              }).catch(err=>{
                alert("添加失败")
            })

            console.log(formData)
            // alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(form) {
        this.$refs[form].resetFields();
      },

  selectData(){
    let startTime = this.value1.toJSON().split(".")[0].replace(/\-|\:|T/g,'')
    let endTime = this.value2.toJSON().split(".")[0].replace(/\-|\:|T/g,'')

    axios({
      methods: "get",
      params:{
        startTime:startTime,
        endTime:endTime
      },
      url:url.url+"/getFundflowOrder"
    }).then((res)=>{
      console.log(res)
      console.log(res.data)
      this.datas = res.data.data
      console.log(this.datas)
      this.$emit('isGetData',this.datas)
    }).catch((err)=>{
      console.log("请求失败")
    })
    // console.log(this.value1.toJSON().split(".")[0].replace(/\-|\:|T/g,''))
        // console.log(this.value2.toJSON().split(".")[0].replace(/\-|\:|T/g,''))
      }
    }
  }
</script>

<style scoped>
  .fund-flow-header{
    height: 55px;
    display: -webkit-flex;
    -webkit-align-items: center;
    flex-wrap: nowrap;
    /*position: relative;*/
  }
  .title-word h2{
    text-indent: 10px;
  }
  .block{
    margin-right: 6px;
    margin-left: 6px;
  }
  .fund-flow-header-right{
    margin-left: 10%;
  }
  .el-button--default>>>{
    margin-left: 450px;
  }
  .el-dialog>>>{
    overflow:hidden;
  }
</style>
