<template>
  <div class="distribution">
    <am-distribution-echarts1></am-distribution-echarts1>
    <am-distribution-echarts2></am-distribution-echarts2>
  </div>
</template>

<script>
  import AmDistributionEcharts1 from "./echarts/am-distribution-echarts1"
  import AmDistributionEcharts2 from "./echarts/am-distribution-echarts2"

  export default {
    name: "amFoundDistribution",
    components: {
      AmDistributionEcharts1,
      AmDistributionEcharts2,
    },
  }
</script>

<style lang="scss" scoped>
  .distribution{
    display: flex;
    height: 98%;
    padding:  1% 3%;
    justify-content: space-around;
    #distributionCharts1{
      height: 530px;
      flex: 1;
      box-shadow: 0 0 10px #a6e3e9;
      border-radius: 10px;
      margin-right: 5%;
    }
    #distributionCharts2{
      box-shadow: 0 0 10px #a6e3e9;
      border-radius: 10px;
      height: 530px;
      flex: 1;
    }
  }
</style>
