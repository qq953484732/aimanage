<template>
  <div class="block">
    <el-row>
      <el-col :span="24">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page='paginations.page_index'
          :page-sizes="paginations.page_sizes"
          :page-size="paginations.page_size"
          :layout="paginations.layout"
          :total="paginations.total">
        </el-pagination>
      </el-col>
    </el-row>
  </div> 
</template>

<script>
    export default {
        name: "AmPaging",
        props:{
          max:Number,
          storageIndexName:String,
          storageNumName:String
        },
        
        data() {
          return {
            sortnum:0,
            tableData: [],
            //需要给分页组件传的信息
            paginations: {
              page_index: 1,  // 当前位于哪页
              total: 112,        // 总数
              page_size: 20,   // 1页显示多少条
              page_sizes: [5, 10, 15, 20],  //每页显示多少条
              layout: "total, sizes, prev, pager, next, jumper"   // 翻页属性
            },
          };
        },
        methods: {        
          handleSizeChange(val) {
            // console.log(`每页 ${val} 条`)
            this.$emit('changeNum',val)
          },
          handleCurrentChange(val) {
            // console.log(`当前页: ${val}`)
            this.$emit('changeIndex',val)
          },
          changePage(){
            this.paginations.total = this.max
          },
          getUserStorage(){
            let storage = window.sessionStorage
            this.paginations.page_size = parseInt(storage[this.storageNumName] || 20)
            this.paginations.page_index = parseInt(storage[this.storageIndexName] || 1)          
            // console.log(111)
          }
        },
        mounted() {
          this.getUserStorage()
        },
        watch: {
          max(){
            this.paginations.total=this.max
          }
        },
    }
</script>

<style scoped>

</style>
