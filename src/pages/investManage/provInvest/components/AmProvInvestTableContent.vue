<template>
  <div class="table-content">
    <table cellpadding="0" cellspacing="0" style="width: 100%;text-align: center;">
      <tr  v-for="(item,i) in items" :key="item.id">
        <td><div class="cell">{{i+1}}</div></td>
        <td><div class="cell">{{item.province}}</div></td>
        <td><div class="cell">{{item.totalInvest}}</div></td>
        <td><div class="cell">{{item.amounts}}</div></td>
        <td><div class="cell"><span>{{item.project}}</span></div></td>
        <td><div class="cell">{{item.investCycle}}个月</div></td>
        <td><div class="cell">{{item.investPerson}}人</div></td>
        <td><div class="cell">{{item.annualRate}}</div></td>
        <td><div class="cell" style="text-align: left;">{{item.remarks}}</div></td>
      </tr>
    </table>
  </div>
</template>

<script>
    export default {
      name: "AmProvInvestTableContent",
      props: ['items'],
  }


</script>

<style scoped>
  .table-content{
    margin: 0px 10px;
    color: #878d99;
    font-weight: 500;
  }
  td{
    border-bottom: 1px solid #e6ebf5;
    padding: 6px 0;
    font-size: 12px;
    width: 111px;
  }
  td:first-child{
    width: 74px;
  }
  td:last-child{
    width: 209px;
  }
  .cell{
    white-space: normal;
    word-break: break-all;
    line-height: 23px;
    position: relative;
    word-wrap: normal;
    text-overflow: ellipsis;
    vertical-align: middle;
    width: 100%;
    box-sizing: border-box;
  }
  .cell span{
    display: inline-block;
    width: 54px;
    height: 20px;
    background: #f3f3f5;
    border-color: black;
    border-radius: 3px;
  }
  .cell i{
    width:0;
    height: 0;
    border: 5px solid transparent;
  }
  .cell i:first-child{
    margin-top: 5px;
    border-bottom-color: #b4bccc;
  }
  .cell i:last-child{
    margin-top: 3px;
    border-top-color: #b4bccc;
  }
  .table-content tr{
    line-height: 20px;
  }
  tr td:nth-child(3) .cell{
    color: #d00033;
  }
  tr td:nth-child(4) .cell{
    color: #00d053;
  }
</style>
