<template>
  <div class="tinymce-container">
    <editor id='tinymce' :init='init'></editor>
  </div>
</template>

<script>
  import tinymce from 'tinymce/tinymce'
  import Editor from '@tinymce/tinymce-vue'
  import 'tinymce/themes/silver/theme'
  import 'tinymce/plugins/image'
  import 'tinymce/plugins/link'
  import 'tinymce/plugins/code'
  import 'tinymce/plugins/table'
  import 'tinymce/plugins/lists'
  import 'tinymce/plugins/wordcount'

  export default {
  name: 'tinymce',
  data () {
    return {
      init: {
        selector: 'textarea',
        language_url: '/static/tinymce/zh_CN.js',
        language: 'zh_CN',
        skin_url: '/static/tinymce/skins/ui/oxide',
        height: 640,
        type: 'alertbanner',
        plugins: 'link lists image code table wordcount',
        toolbar:
          'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
        branding: false
      }
    }
  },
  mounted () {
    tinymce.init({})
  },
  components: {Editor}
}
</script>

<style lang="scss">
.tinymce-container{
  .tox{
    .tox-menubar{
      background-color: #eee;
    }
    .tox-toolbar{
      background-color: #eee;
    }
  }
}

</style>