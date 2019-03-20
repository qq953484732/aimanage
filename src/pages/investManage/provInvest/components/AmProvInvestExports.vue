<template>
  <div class="export">
    <button>
      <span>导出excel</span>
    </button>
  </div>
</template>

<script>
    export default {
        name: "AmProvInvestExports"
    }
</script>

<style scoped>
  .export{
    height: 36px;
    line-height: 36px;
    margin: 0 10px;
  }
  button{
    width: 63px;
    cursor: pointer;
    background: #fff;
    border: 1px solid #d8dce5;
    background-color: #409eff;
    border-color: #409eff;
    font-size: 12px;
    border-radius: 3px;
  }
  button span{
    color: #fff;
  }
</style>
