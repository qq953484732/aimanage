<template>
  <div class="amartfooter">
    编辑：<b>{{author}}</b> | 责任编辑：<b>{{author}}</b>
  </div>
</template>

<script>
export default {
  name: 'AmArtFooter',
  props:['author']
}
</script>

<style scoped>
  .amartfooter{
    font-size: 14px;
    margin: 30px 190px 30px;
  }
</style>

