<template>
  <div class="amabstract">
    {{abstracts}}
  </div>
</template>

<script>
  export default {
    name:"AmAbstract",
    props:['abstracts']
  }
</script>

<style scoped>
  .amabstract{
    /*width:1180px;*/
    color:#999;
    border: 1px dotted #999;
    text-indent: 2em;
    padding: 10px;
    margin: 0 205px 30px;
    line-height: 30px;
  }

</style>
