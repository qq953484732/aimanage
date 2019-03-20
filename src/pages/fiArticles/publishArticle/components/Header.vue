<template>
    <div>
      <div class="header-content">
        <el-button type="primary" size="mini" @click="handlePublish('publish')">发布</el-button>
        <el-button type="warning" size="mini" @click="handlePublish('draft')">草稿</el-button>
      </div>
    </div>
</template>

<script>

export default {
    name: 'AmPublishHeader',
    data () {
        return {
        };
    },
    methods: {
       handlePublish(data,type){
         console.log('child-header')
         this.$emit('EventPublishArticle',data,type)
       }
    }
}

</script>

<style lang="scss" scoped>
.header-content{
  height: 50px;
  line-height: 50px;
  background-color: #38a884;
  color: #fff;
  text-align: right;
  padding: 0 10px;
  margin-bottom: 10px; 
}
</style>