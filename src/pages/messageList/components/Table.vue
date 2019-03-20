<template>
    <el-table
    :data="messageList"
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
        label="昵称"
        align="center"
        width="100">
      </el-table-column>
      <el-table-column
        property="touziyear"
        align="center"
        width="100"
        label="投资年限">
      </el-table-column>
      <el-table-column
        property="email"
        align="center"
        width="220"
        label="绑定邮箱">
      </el-table-column>
      <el-table-column
        property="updatedAt"
        align="center"
        :formatter="formatUpdateTime"
        width="190"
        label="修改时间">
      </el-table-column>
      <el-table-column
        property="baseType"
        align="center"
        label="基本短信服务">
      </el-table-column>
      <el-table-column
        property="changeType"
        align="center"
        label="可选短信服务">
      </el-table-column>
    </el-table>
</template>

<script>
export default {
    name: 'AmUserListTable',
    props:{

      messageList:Array,
    },
    data () {
        return {
          
        };
    },
    methods: {
      
      formatUpdateTime (row, column, cellValue, index) {
        if(row.updatedAt){
          let time = this.getTime(row.updatedAt)
          return time
        }
        return ''
      },
      getTime (time){
        let date = time.toString()
        return date.substr(0,19).replace('T',' ');
      }

    },
   
}

</script>

<style lang="scss" scoped>

</style>
