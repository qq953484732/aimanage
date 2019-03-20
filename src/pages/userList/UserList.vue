<template>
    <div class="user-list">
      <div class="table-container" :style="{width:'100%'}">
        <am-user-list-table :userList="userList"></am-user-list-table>
      </div>
      <div>
        <am-paging :storageIndexName="'userCurrentIndex'" :storageNumName="'userCurrentNum'" :max="max"  @changeNum="handleChangeNum" @changeIndex="handleChangeIndex"></am-paging>

      </div>

    </div>
</template>

<script>
import axios from 'axios'
import _url from '@/apis/url.js'
import AmUserListTable from './components/Table'
import AmPaging from '@/components/Paging'
export default {
    name: 'AmUserList',
    data () {
        return {
          num:20,
          index:1,
          max:1,
          sortnum : 1,
          userList:[],
        };
    },
    components: {
      AmUserListTable,
      AmPaging
    },
    computed: {},
    methods: {
      setUserStorage(){
        let storage = window.sessionStorage
        storage.setItem("userCurrentIndex",this.index)
        storage.setItem("userCurrentNum",this.num)
      },
      getUserStorage(){
        let storage = window.sessionStorage
        this.num = parseInt(storage.userCurrentNum || 20)
        this.index = parseInt(storage.userCurrentIndex || 1)
      },
      pageSort(){
        this.userList.forEach((item,index)=>{
          item.sortnum = this.sortnum + (this.index - 1) * this.num + index
          
        })
      },
      getUserInfo () {
        axios.get(_url.url+'/getUserInfo?pageIndex='+this.index+'&liPage='+this.num)
            .then(this.getUserInfoSucc)               
      },
      getUserInfoSucc (res) {
          if(res.status == 200){
              const obj = res.data
              const data = obj.data
              if(obj.ok && data){
                this.userList = data
                this.max = obj.max
                this.pageSort()
                this.setUserStorage()
              }
          }
      },
      handleChangeNum(val){
        this.num = val
        this.getUserInfo()
      },
      handleChangeIndex(val){
        this.index = val
        this.getUserInfo()
      }
    },

    mounted() {
      this.getUserStorage()
      this.getUserInfo()
    },
}

</script>

<style lang="scss" scoped>
.user-list{
  padding: 10px;
  width: 100%;
  min-height: 500px;
  box-sizing: border-box;
}
</style>
