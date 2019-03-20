<template>
    <div>
      <el-table style="width: 1146px" :data="items">
        <el-table-column label="序号" width="80px" type="index"></el-table-column>
        <el-table-column label="省份"  width="120px" prop="province" ></el-table-column>
        <el-table-column  label="投资总额" sortable  width="120px" prop="totalInvest"></el-table-column>
        <el-table-column  label="收益金额" sortable  width="120px" prop="amounts"></el-table-column>
        <el-table-column  label="主要项目投资"  width="120px" prop="project"></el-table-column>
        <el-table-column  label="投资周期"  width="120px" prop="investCycle"></el-table-column>
        <el-table-column  label="投资人数"  width="120px" prop="investPerson"></el-table-column>
        <el-table-column  label="投资年变化率"  width="120px" prop="annualRate"></el-table-column>
        <el-table-column  label="备注"  prop="remarks"></el-table-column>
      </el-table>
    </div>
</template>

<script>

    export default {
        name: "AmAreaInvestTableTH",
        props:["items"]

    }
</script>

<style scoped>
  el-table-column{
    padding: 6px 0px;
  }
</style>
