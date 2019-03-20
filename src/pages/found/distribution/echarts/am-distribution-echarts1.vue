<template>
  <div id="distributionCharts1">

  </div>
</template>

<script>

  export default {
    name: "am-distribution-echarts1",
    methods: {
      _initData() {
        let myChart = this.$echarts.init(document.getElementById('distributionCharts1'))
        myChart.setOption({
          backgroundColor: "#FEF8EF",
          angleAxis: {},
          radiusAxis: {
            type: 'category',
            data: ['2011', '2012', '2013', '2014', '2015', '2016', "2017", '2018'],
            z: 10
          },
          polar: {},
          series: [{
            type: 'bar',
            data: [10, 20, 30, 40,50,60,70,80],
            coordinateSystem: 'polar',
            name: '储蓄',
            stack: 'a'
          }, {
            type: 'bar',
            data: [20, 40, 60, 80,50,60,30,40],
            coordinateSystem: 'polar',
            name: '基金',
            stack: 'a'
          }, {
            type: 'bar',
            data: [10, 20, 30, 40,60,40,60,50],
            coordinateSystem: 'polar',
            name: '股票',
            stack: 'a'
          },
            {
              type: 'bar',
              data: [40, 50, 30, 60,80,30,50,40],
              coordinateSystem: 'polar',
              name: '债券',
              stack: 'a'
            },
            {
              type: 'bar',
              data: [60, 70, 80, 90,70,60,40,80],
              coordinateSystem: 'polar',
              name: '期货',
              stack: 'a'
            }
          ],
          legend: {
            data: ['储蓄', '基金', '股票', "债券", '期货'],
          }
        })
      }
    },
    mounted() {
      this._initData();
    }
  }
</script>

<style>
</style>
