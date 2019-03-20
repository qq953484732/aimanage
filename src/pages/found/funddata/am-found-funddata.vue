<template>
  <div class="funddata">
    <div id="funddataCharts">

    </div>
  </div>
</template>

<script>
  //引入ecahrts
  import echarts from 'echarts'
  import Vue from "vue"
  import world from 'echarts/map/json/china.json'
  import  'echarts/map/js/china'

  Vue.prototype.$echarts = echarts
  echarts.registerMap('world', world)

  export default {
    name: "AmFoundFunddata",
    methods: {
      initData() {
        let myChart = this.$echarts.init(document.getElementById('funddataCharts'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '收支情况'
          },
          backgroundColor: "#FEF8EF",
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          grid: {
            height: 500,
            top: "middle"
          },
          toolbox: {
            feature: {
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar']},
              restore: {show: true},
              saveAsImage: {show: true},
            }
          },
          legend: {
            data: ['收入', '支出', '平均'],
            y: 100,
            x: 150
          },
          xAxis: [
            {
              type: 'category',
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '单位/万元',
              min: 0,
              max: 21000,
              interval: 3000,
              axisLabel: {
                formatter: '{value} '
              }
            }
          ],
          series: [{
            name: '收入',
            type: 'bar',
            stack: '使用情况',
            data: [5000, 2000, 3600, 1000, 1000, 2000, 5000, 5003, 5000, 5001, 8000, 1000],
            barWidth: 40,
            itemStyle: {
              normal: {
                color: "#0099CC",
                label: {
                  show: true, //开启显示,
                  position: "insideTop",
                  textStyle: { //数值样式
                    color: '#fff',
                    fontSize: 12
                  }
                }
              }
            }
          }, {
            name: '支出',
            type: 'bar',
            stack: '使用情况',
            data: [4000, 2002, 1800, 3500, 4200, 4000, 10032, 5005, 4000, 3000, 3500, 500],
            itemStyle: {
              normal: {
                color: "#66CC99",
                label: {
                  show: true, //开启显示
                  position: "top",
                  textStyle: { //数值样式
                    color: '#66CC99',
                    fontSize: 12
                  }
                }
              },
            },
          }, {
            name: '平均',
            type: 'line',
            data: [500, 5000, 6000, 8000, 9000, 10000, 8200, 2300, 2300, 1600, 1200, 6000],
            itemStyle: {
              normal: {
                color: "red",
                label: {
                  show: true, //开启显示
                  textStyle: { //数值样式
                    color: 'red',
                    fontSize: 12
                  }
                }
              },
            },
          }
          ],
          dataZoom: [
            {
              xAxisIndex: [0, 0],
              // moveOnMouseMove: true,
              bottom: 50,
              show: true, //是否显示
              realtime: true, //拖动  时，是否实时更新系列的视图
              start: 30, //伸缩条开始位置（1-100），可以随时更改
              end: 90, //伸缩条结束位置（1-100），可以随时更改
              zoomOnMouseWheel:false,
            }

          ]
        });

      }
    },
    mounted() {
      this.initData();
    }
  }
</script>

<style lang="scss" scoped>
  .funddata {
    flex: 1;
    display: flex;
    height: 98%;
    padding: 1% 3%;

    #funddataCharts {
      border-radius: 10px;
      /*overflow: hidden;*/
      box-shadow: 0 0 10px #a6e3e9;
      width: 100%;
      height: 100%;
    }
  }

</style>
