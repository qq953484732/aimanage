<template>
  <div class="titleBars">
    <span class="barsT" @click="changeBar">
      <i :class="isMargin?'el-icon-d-arrow-left':'el-icon-d-arrow-right'"></i>
    </span>
    <router-link tag="span" to="/home" class="title">首页</router-link>
    <span class="titleS" v-if="data.title!=''">/</span>
    <span class="title" v-if="data.title!=''">{{data.title}}</span>
    <span class="titleS" v-if="data.children.title!=undefined">/</span>
    <span class="title1" v-if="data.children.title!=undefined">{{data.children.title}}</span>
  </div>
</template>

<script>
  export default {
    name: "am-title",
    data(){
      return{
        isMargin:false
      }
    },
    props: ["data"],
    methods:{
      //修改样式
      changeBar(){
        let is = this.isMargin;
        this.isMargin = !is
        this.$emit("change",this.isMargin)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .titleBars {
    height: 30px;
    line-height: 30px;
    background: #EFF2F7;
    .barsT{
      float: left;
      padding:  0  10px;
    }
    span{
      float: left;
    }
    .title {
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
    }

    .title:hover {
      color: #409eff;
    }

    .title1 {
      font-weight: 100;
      color: #5a5e66;
      font-size: 12px;
    }

    .titleS {
      margin: 0 9px;
      font-weight: 700;
      color: #b4bccc;
      font-size: 14px;
      line-height: 30px;
    }

  }
</style>
