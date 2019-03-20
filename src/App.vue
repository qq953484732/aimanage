<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
  #app{
    height: 100%;
  }
  body .el-table th.gutter{
    display: table-cell!important;

  }
</style>
