<template>
  <div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage1"
        :page-sizes="[20, 40, 60, 73]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="73">
      </el-pagination>
    </div>
  </div>

</template>

<script>
    export default {
        name: "FundPaymentPagin",
      methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          //console.log( `${val}`);
          this.index= `${val}`
           //console.log(this.index)
          this.$emit('isGetPage',this.index)
        }
      },
      data() {
        return {
          currentPage1: 5,
          currentPage2: 5,
          currentPage3: 5,
          currentPage4: 4
        };
      }
    }
</script>

<style scoped>

</style>
