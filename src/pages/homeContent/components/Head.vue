<template>
    <div class="head" :style="{width:w+'px'}">
      <div class="item-container" v-for="(item,index) of list" :key="index">
        <div class="item" :style="{backgroundColor:item.color}">
          <p class="num">{{item.num}}</p>
          <p class="desc">{{item.name}}</p>
        </div>
      </div>     
    </div>
</template>

<script>
export default {
    name: 'AmHomeHead',
    props:{
      w:Number
    },
    data () {
        return {
          list:[
            {
              "color":"#18a689",
              "name":"盈亏(千万)",
              "num":"+208.65"
            },{
              "color":"#9c0",
              "name":"收益率(%)",
              "num":"+12.37"
            },{
              "color":"#3c9",
              "name":"潜在投资人(人)",
              "num":"686"
            },{
              "color":"#3b5999",
              "name":"意向投资人(人)",
              "num":"264"
            },{
              "color":"#6c9",
              "name":"待审投资人(人)",
              "num":"137"
            },{
              "color":"#099",
              "name":"审核中投资人(人)",
              "num":"100"
            },{
              "color":"#f90",
              "name":"审核通过投资人(人)",
              "num":"86"
            },{
              "color":"#09c",
              "name":"新增投资人(人)",
              "num":"36"
            },
          ]
        };
    },
    components: {},
    computed: {},
    methods: {}
}

</script>

<style lang="scss" scoped>
.head{
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
  .item-container{
    padding: 0 5px;
    width: 0;
    flex: 1 1 0;
    // width: 12.5%;
    .item{
      font-size: 14px;
      border-radius: 6px;
      padding: 15px 0;
      color:#fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-wrap: wrap;
      .num{
        font-size: 16px;
        line-height: 20px;
        font-weight: 800;
      }
      .desc{
        line-height: 19px;
      }
      
    }
  }
  
}
</style>
