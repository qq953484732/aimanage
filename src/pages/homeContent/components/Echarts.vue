<template>
    <div class="am-echarts" ref="echart" :style="echartStyle"></div>
</template>

<script>
export default {
    name: 'AmHomeEchart',
    props:{
      option:{},
      echartStyle:{},
    },
    data () {
        return {
          myChart:{},
        };
    },
    components: {},
    computed: {},
    methods: {
        drawLine(){
          this.myChart = this.$echarts.init(this.$refs.echart)        
          this.myChart.setOption(this.option)
        }
    },
    mounted() {
      this.drawLine()
    },
    updated() {
      this.myChart.resize()
    },
}

</script>

<style lang="scss" scoped>

</style>