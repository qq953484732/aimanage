<template>
  <div class="fund-payment">

    <fund-payment-table ></fund-payment-table>
    <fund-payment-pagin></fund-payment-pagin>
  </div>

</template>

<script>
  import FundPaymentTable from './components/FundPaymentTable'
  import FundPaymentPagin from "./components/FundPaymentPagin"

  export default {
    name: "FundPayment",
    components:{
      FundPaymentTable,
      FundPaymentPagin
    },
    data(){
      return{
        data:[]
      }
    },
    methods:{
      isDelData (delData) {
        this.data = delData
        console.log(this.data )
      }
    }

  }
</script>

<style scoped>
  .fund-payment{
    padding: 0 10px;
  }
</style>
