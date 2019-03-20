<template>
    <div class="homeContent" ref="homeContent">
      <div class="part">
        <am-home-head  :w="offsetWidth"></am-home-head>
      </div>      
      <div class="part chart" ref="part">
        <am-home-echarts :option="echart1.option" :echartStyle="style1" ></am-home-echarts>
        <am-home-echarts :option="echart2.option" :echartStyle="style1" ></am-home-echarts>
      </div>
      <div class="part chart">
        <am-home-echarts :option="echart3.option" :echartStyle="style2" ></am-home-echarts>
        <am-home-echarts :option="echart4.option" :echartStyle="style2" ></am-home-echarts>
        <am-home-echarts :option="echart5.option" :echartStyle="style2" ></am-home-echarts>
      </div>
      
    </div>
</template>

<script>
//引入echarts
import echarts from 'echarts'
import Vue from 'vue'
Vue.prototype.$echarts = echarts

import AmHomeHead from './components/Head'
import AmHomeEcharts from './components/Echarts'
import {mapState} from 'vuex'

export default {
    name: 'AmHomeContent',
    data () {
        return {
          offsetWidth:0,
          echartsWidthL:654,
          echartsWidthS:432,
          screenHeight:document.documentElement.clientHeight,
          echart1:{
            option:{
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'直接访问',
                        type:'bar',
                        data:[320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name:'邮件营销',
                        type:'bar',
                        stack: '广告',
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'联盟广告',
                        type:'bar',
                        stack: '广告',
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'视频广告',
                        type:'bar',
                        stack: '广告',
                        data:[150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name:'搜索引擎',
                        type:'bar',
                        data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                        markLine : {
                            lineStyle: {
                                normal: {
                                    type: 'dashed'
                                }
                            },
                            data : [
                                [{type : 'min'}, {type : 'max'}]
                            ]
                        }
                    },
                    {
                        name:'百度',
                        type:'bar',
                        barWidth : 5,
                        stack: '搜索引擎',
                        data:[620, 732, 701, 734, 1090, 1130, 1120]
                    }
                ]
            }
          },
          echart2:{
            option:{               
                tooltip : {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'邮件营销',
                        type:'line',
                        stack: '总量',
                        areaStyle: {},
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'联盟广告',
                        type:'line',
                        stack: '总量',
                        areaStyle: {},
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'视频广告',
                        type:'line',
                        stack: '总量',
                        areaStyle: {},
                        data:[150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name:'直接访问',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name:'搜索引擎',
                        type:'line',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        areaStyle: {normal: {}},
                        data:[820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            }
          },
          echart3:{
              option:{
                title : {
                    text: '用户投资类型',
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['基金','股票','债券','存储','期货']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'基金'},
                            {value:310, name:'股票'},
                            {value:234, name:'债券'},
                            {value:135, name:'存储'},
                            {value:1548, name:'期货'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
          },
          echart4:{
            option:{
              title : {
                  text: '用户投资区域',
                  subtext: '纯属虚构',
                  x:'center'
              },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','谷歌']
                },
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        selectedMode: 'single',
                        radius: [0, '30%'],
                        center: ['50%', '60%'],
                        label: {
                            normal: {
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'直达', selected:true},
                            {value:679, name:'营销广告'},
                            {value:1548, name:'搜索引擎'}
                        ]
                    },
                    {
                        name:'访问来源',
                        type:'pie',
                        center: ['50%', '60%'],
                        radius: ['40%', '55%'],
                        label: {
                            normal: {
                                formatter: '{b}',
                                backgroundColor: '#eee',
                                borderColor: '#aaa',
                                borderWidth: 1,
                                borderRadius: 4,
                                rich: {
                                    a: {
                                        color: '#999',
                                        lineHeight: 22,
                                        align: 'center'
                                    },
                                    hr: {
                                        borderColor: '#aaa',
                                        width: '100%',
                                        borderWidth: 0.5,
                                        height: 0
                                    },
                                    b: {
                                        fontSize: 16,
                                        lineHeight: 33
                                    },
                                    per: {
                                        color: '#eee',
                                        backgroundColor: '#334455',
                                        padding: [2, 4],
                                        borderRadius: 2
                                    }
                                }
                            }
                        },
                        data:[
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:600, name:'谷歌'}
                        ]
                    }
                ]
            }
          },
          echart5:{
              option:{
                title : {
                    text: '用户投资区域',
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['华东','华南','华中','华北','西南','东北','港澳台']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:135, name:'华东'},
                            {value:110, name:'华南'},
                            {value:134, name:'华中'},
                            {value:335, name:'华北'},
                            {value:600, name:'西南'},
                            {value:154, name:'东北'},
                            {value:184, name:'港澳台'},
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
          }
        };
    },
    components: {
      AmHomeHead,
      AmHomeEcharts,
    },
    watch:{
      status(){
        setTimeout(this.changeView,500)
        // this.changeView()
        console.log(this.$refs.part.offsetWidth)

      }
    },
    computed: {
      ...mapState(['status']),
      style1(){
        return{width:this.echartsWidthL+'px', height: '400px'}
      },
      style2(){
        return{width:this.echartsWidthS+'px', height: '280px'}
      },
    },
    methods: {
      changeView(){
        this.offsetWidth = this.$refs.part.offsetWidth 
        this.echartsWidthL = (this.$refs.part.offsetWidth - 10) / 2
        this.echartsWidthS = (this.$refs.part.offsetWidth - 10) / 3
      }
    },
    mounted () {
      this.$nextTick(()=>{
        this.changeView()
      })
      window.onresize = () => {
        this.$nextTick(()=>{
          this.changeView()
        })
      }  
    },
     destroyed() {
       window.onresize = null
     },
    
}

</script>

<style lang='scss' scoped>
.homeContent{
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  .part{
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    flex-shrink: 0;
  }
}
</style>
