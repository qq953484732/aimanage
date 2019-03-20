<template>
<div>
  <am-selectart-header :title="this.title" :comeFrom="comeFrom" :author="author" :publishDate="publishDate"></am-selectart-header>
  <am-abstract :abstracts='abstracts'></am-abstract>
  <am-art-content :content='content'></am-art-content>
  <am-art-footer :author="author"></am-art-footer>
</div>
</template>

<script>
import AmSelectartHeader from "./components/AmSelectartHeader"
import AmAbstract from "./components/AmAbstract"
import AmArtContent from "./components/AmArtContent"
import AmArtFooter from "./components/AmArtFooter"
import axios from "axios"
import url from "@/apis/url.js"
  export default {
  name:'AmSelectArticle',
    data() {
      return {
        title:'',
        comeFrom:'',
        author:'',
        publishDate:'',
        abstracts:'',
        content:'',
        url:''
      }
    },
    components:{
      AmSelectartHeader,
      AmAbstract,
      AmArtContent,
      AmArtFooter
    },
    mounted(){
      this.send(this.$route.query.id)
    },
    methods:{
      send(artid='5c025f836f54040bb44ed172'){
        axios({
          method:'get',
          params: {
            id:artid
          },
          url: url.url+'/findFundArticles'
        }).then((resp)=>{
          console.log(resp.data);
          this.title=resp.data.data.title;
          this.comeFrom=resp.data.data.comeFrom;
          this.author=resp.data.data.author;
          this.publishDate=resp.data.data.publishDate;
          this.abstracts=resp.data.data.abstracts;
          this.content=resp.data.data.content;
        }).catch(resp => {
          console.log('请求失败');
        });
      }
    },
    watch:{
      $route:function(id,b){
        if(id.query.id!=b.query.id){
          this.send(id.query.id)
        }
      }
    }
  }
</script>

<style scoped>

</style>
