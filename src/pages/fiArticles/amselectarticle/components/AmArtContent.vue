<template>
<div class="artTop">
  <div v-html="content">
  </div>
</div>
</template>

<script>
export default {
  name:'AmArtContent',
  props:['content']
}
</script>

<style scoped>
.artTop{
  text-indent: 2em;
  padding: 10px;
  margin: 0 205px 30px;
  line-height: 30px;
}
</style>
