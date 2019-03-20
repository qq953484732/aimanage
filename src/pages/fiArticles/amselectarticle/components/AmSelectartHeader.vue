<template>
<div class="amselectartheader">
  <h1>{{title}}</h1>
  <p>
    <span>{{comeFrom}}</span> |
    <span>{{author}}</span> |
    <span>{{publishDate}}</span>
  </p>
</div>
</template>

<script>
export default {
  name:"AmSelectartHeader",
  props:['title','comeFrom','author','publishDate']

}
</script>

<style scoped>
.amselectartheader{
  width:100%;
  margin:30px auto;
}
  h1{
    font-size: 18px;
    letter-spacing: 3px;
    text-align: center;
  }
p{
  text-align: center;
}
p span{
  font-size:14px;
}
p span:nth-child(1){
  font-weight:600;
}
</style>
