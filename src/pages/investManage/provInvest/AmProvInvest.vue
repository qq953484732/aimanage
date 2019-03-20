<template>
    <div class="provlinvests">
      <am-prov-invest-exports></am-prov-invest-exports>
      <am-prov-invest-table-box></am-prov-invest-table-box>
    </div>
</template>

<script>
  import AmProvInvestExports from "./components/AmProvInvestExports"
  import AmProvInvestTableBox from "./components/AmProvInvestTableBox"
  export default {
      name: "AmProvInvest",
      components:{
        AmProvInvestExports,
        AmProvInvestTableBox
      }
  }
</script>

<style scoped>
</style>
