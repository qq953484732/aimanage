<template>
    <div class="publish">
      <am-publish-header @EventPublishArticle="handlePublishArticle"></am-publish-header>
      <am-publish-author ref="author" @addArticle="sendMessageInfo"></am-publish-author>
    </div>
</template>

<script>
import _url from '@/apis/url'
import axios from 'axios'
import AmPublishHeader from './components/Header'
import AmPublishAuthor from './components/Author'
export default {
    name: 'AmPublishArticle',
    data () {
        return {
        };
    },
    components: {
      AmPublishHeader,
      AmPublishAuthor,
    },
    computed: {},
    methods: {
      sendMessageInfo (data) {
        axios.post(_url.url+'/addFundArticles',data)
            .then(this.sendMessageInfoSucc)
            .catch(this.sendMessageInfoErr)           
      },
      sendMessageInfoSucc (res) {
        console.log(res)
        if(res.data.ok == 1){
          this.$message({
            message:'新增成功~',
            type:'success'
          });
          this.$refs.author.clearArticle()
          //实现菜单跳转，重定向
          this.$router.push({path: '/home/editArticle'});
        }else{
          this.$message.error('发送失败请重试')
        }
      },
      sendMessageInfoErr(res){
        this.$message.error('新增失败请重试,')
      },
      handlePublishArticle(type){
        console.log('parent')
        this.$refs.author.col(type)
     },
    }
}

</script>

<style lang="scss" scoped>
.publish{
  height: 100%;
  padding: 0 10px;
}
</style>
