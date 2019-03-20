<template>
    <div class="message-list">
      <div class="table-container" :style="{width:'100%'}">
        <am-message-list-table :messageList="messageList" ></am-message-list-table>
      </div>
      <div>
        <am-paging :storageIndexName="'messageCurrentIndex'" :storageNumName="'messageCurrentNum'" :max="max" @changeNum="handleChangeNum" @changeIndex="handleChangeIndex"></am-paging>

      </div>

    </div>
</template>

<script>
import axios from 'axios'
import _url from '@/apis/url.js'
import AmMessageListTable from './components/Table'
import AmPaging from '@/components/Paging'
export default {
    name: 'AmMessageList',
    data () {
        return {
          num:20,
          index:1,
          max:1,
          sortnum : 1,
          messageList:[],
        };
    },
    components: {
      AmMessageListTable,
      AmPaging
    },
    computed: {},
    methods: {
      setMessageStorage(){
        let storage = window.sessionStorage
        storage.setItem("messageCurrentIndex",this.index)
        storage.setItem("messageCurrentNum",this.num)
      },
      getMessageStorage(){
        let storage = window.sessionStorage
        this.num = parseInt(storage.messageCurrentNum || 20)
        this.index = parseInt(storage.messageCurrentIndex || 1)
      },
      pageSort(){
        this.messageList.forEach((item,index)=>{
          item.sortnum = this.sortnum + (this.index - 1) * this.num + index
          
        })
      },
      getMessageInfo () {
        axios.get(_url.url+'/getInfoList?pageIndex='+this.index+'&liPage='+this.num)
            .then(this.getMessageInfoSucc)           
      },
      getMessageInfoSucc (res) {
        if(res.status == 200){
            const obj = res.data
            const data = obj.data
            if(obj.ok && data){
                this.messageList = data
                this.max = obj.max
                this.pageSort()
                this.setMessageStorage()
            }
        }
      },
      handleChangeNum(val){
        this.num = val
        this.getMessageInfo()
      },
      handleChangeIndex(val){
        this.index = val
        this.getMessageInfo()
      }
    },
    mounted() {
      this.getMessageStorage()
      this.getMessageInfo()
    },
}

</script>

<style lang="scss" scoped>
.message-list{
  padding: 10px;
  height: 100%;
  width: 100%;
  min-height: 500px;
  box-sizing: border-box;
}

</style>
