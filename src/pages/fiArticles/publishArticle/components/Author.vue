<template>
  <div>
    <el-form 
      :model="ruleForm" 
      :rules="rules" 
      inline 
      ref="ruleForm" 
      size="mini"
      class="demo-ruleForm"
    >
      <div class="article-textarea">
        <el-form-item class="article-textarea" label="标题" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item class="article-textarea" label="摘要" prop="abstracts" >
          <el-input v-model="ruleForm.abstracts"></el-input>
        </el-form-item>
      </div>
      <div class="publish-author">
        <el-form-item label="作者:" prop="author">
          <el-select v-model="ruleForm.author" placeholder="作者" >
            <el-option v-for="item of authorData" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="类目:" prop="category" >
          <el-select v-model="ruleForm.category" placeholder="类目">
            <el-option v-for="item of categoryData" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="来源:" prop="comeFrom" >
          <el-select v-model="ruleForm.comeFrom" placeholder="来源">
            <el-option v-for="item of comeFromData" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="重要性:" prop="important" >
          <el-select v-model="ruleForm.important" placeholder="重要性">
            <el-option v-for="item of importantData" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间" >
          <el-col :span="14" >
            <el-form-item prop="publishDate">
              <el-date-picker type="datetime" placeholder="选择日期时间" 
                v-model="ruleForm.publishDate" style="width: 100%;"
                value-format="yyyy-MM-dd HH:mm:ss"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
      </div>
    </el-form>
    <am-publish-editor ref="edit">
    </am-publish-editor>
  </div>
</template>

<script>
import AmPublishEditor from './Editor'
import tinymce from 'tinymce/tinymce'
export default {
    name: 'AmPublishAuthor',
    components:{
      AmPublishEditor
    },
    data () {
      return {
        content:'',
        ruleForm:{
          title:'',
          abstracts:'',
          author:'',
          category:'',
          comeFrom:'',
          important:'',
          publishDate:'',
        },
        authorData:[
          {'label':'张小明','value':0},
          {'label':'李鹏飞','value':1},
          {'label':'王亚兰','value':2},
          {'label':'吴明东','value':3},
          {'label':'张琪格','value':4},
          {'label':'黄雅丽','value':5}
        ],
        categoryData:[
            {'label':'军事','value':0},
            {'label':'社会','value':1},
            {'label':'财经','value':2},
            {'label':'科技','value':3},
            {'label':'娱乐','value':4},
            {'label':'互联网','value':5}
        ],
        comeFromData:[
          {'label':'人民网','value':0},
          {'label':'央视新闻','value':1},
          {'label':'新浪新闻','value':2},
          {'label':'腾讯新闻','value':3},
          {'label':'凤凰资讯','value':4},
          {'label':'新华社','value':5}
        ],
        importantData:[
          {'label':'1','value':0},
          {'label':'2','value':1},
          {'label':'3','value':2},
          {'label':'4','value':3},
          {'label':'5','value':4}
        ],
        rules: {
          title: [{ required: true,message: '文章标题为必填项~',trigger : 'blur' }],
          abstracts: [{ required: true,message: '文章摘要为必填项~' ,trigger : 'blur'}],
          author: [{ required: true, message: '请选择文章作者', trigger: 'change'}],
          category: [{ required: true, message: '请选择文章类目', trigger: 'change' }],
          comeFrom: [{ required: true, message: '请选择文章来源', trigger: 'change' }],
          important: [{ required: true, message: '请选择文章重要性', trigger: 'change' }],
          publishDate: [{ required: true, message: '请选择发布日期', trigger: 'blur' }]
        },
        //详情弹框信息
        dialog: {
          width:'400px',
          show : false,
          title: '修改资金信息',
          formLabelWidth:'120px'
        }
        
      };
    },
    methods: {
       col(type){
         this.publishArticle(type)
       },
       clearArticle(){
          this.$refs.ruleForm.resetFields();
          tinymce.activeEditor.setContent('');
       },
       publishArticle(type){
        this.$refs.ruleForm.validate((valid) => {
            if (valid) {//表单数据验证完成之后，提交数据;
                let content = tinymce.activeEditor.getContent()
                if(content === ''){
                    this.$message({
                        message: '输入内容为必填项',
                        type: 'error'
                    });
                    return;
                }
                let formData = this.ruleForm;
                let data = {};
                for(var i in formData){
                    data.title = formData['title']
                    data.abstracts = formData['abstracts']
                    data.author = this.authorData[formData['author']]['label']
                    data.category = this.categoryData[formData['category']]['label']
                    data.comeFrom = this.comeFromData[formData['comeFrom']]['label']
                    data.important = this.importantData[formData['important']]['label']
                    data.publishDate = new Date(formData['publishDate']).toJSON()
                    data.content = content
                }
                if(type == 'publish'){
                    data.status = '1';  // 发布
                }else{
                    data.status = '2';  // 草稿
                }
                this.$emit('addArticle',data);
            }
        })
    },
      
    }
}

</script>

<style lang="scss">
.publish-author{
  .el-input__inner{
    width: 141px;
    height: 36px;
  }
  .el-date-editor{
    .el-input__inner{
      width: 180px;
    }
  }
}
.article-textarea{
    .el-form-item__label{
      padding: 0;
    }
    .el-input__inner {
      height: 32px;
      width: 1000px;
      border-top-width: 0;
      border-left-width: 0;
      border-right-width: 0;
      border-bottom-width: 1px;
      /*outline: medium;*/
    }
}
</style>