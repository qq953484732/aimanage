<template>
  <el-table
    v-loading="loading"
    :data="userList"
    border
    size="mini"
    style="width: 100%">
    <el-table-column
      property="sortnum"
      label="#"
      align="center"
      width="60">
    </el-table-column>
    <el-table-column
      property="username"
      label="用户姓名"
      align="center"
      width="150">
    </el-table-column>
    <el-table-column
      className="address"
      property="address"
      align="center"
      width="180"
      label="注册地址">
    </el-table-column>
    <el-table-column
      property="isp"
      align="center"
      width="100"
      label="网络">
    </el-table-column>
    <el-table-column
      property="ip"
      align="center"
      width="300"
      label="ip地址">
    </el-table-column>
    <el-table-column
      property="createTime"
      align="center"
      width="200"
      :formatter="formatCreateTime"
      label="注册时间">
    </el-table-column>
    <el-table-column
      property="updateTime"
      align="center"
      :formatter="formatUpdateTime"
      width="200"
      label="登录时间">
    </el-table-column>
    <el-table-column
      property="region_id"
      align="center"
      label="地区编号">
    </el-table-column>
    <el-table-column
      property="city_id"
      align="center"
      label="城市编号">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: 'AmUserListTable',
    data() {
      return {
        loading: true
      };
    },
    props: {'userList': Array,},
    components: {},
    computed: {},
    methods: {
      formatCreateTime(row, column, cellValue, index) {
        let time = this.getTime(row.createTime)
        return time
      },
      formatUpdateTime(row, column, cellValue, index) {
        let time = this.getTime(row.updateTime)
        return time
      },
      getTime(v) {
        let originTime = v.toString();
        let time = originTime.substring(0, 4) + '-' +
          originTime.substring(4, 6) + '-' +
          originTime.substring(6, 8) + ' ' +
          originTime.substring(8, 10) + ':' +
          originTime.substring(10, 12) + ':' +
          originTime.substring(12)
        return time
      }
    },
    watch: {
      userList:function () {
        if(this.userList.length>0){
          this.loading=false
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
.address{
  display: none!important;
}
</style>
