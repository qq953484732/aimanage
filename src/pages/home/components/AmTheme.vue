<template>
    <div class="theme">
      <el-row class="block-col-1" >
        <el-col :span="24" >
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link"  ref="eldropdownlink">
              更换主题<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="1" icon="el-icon-plus" >黯然忧郁</el-dropdown-item>
              <el-dropdown-item command="2" icon="el-icon-circle-plus">晓之时</el-dropdown-item>
              <el-dropdown-item command="3" icon="el-icon-circle-plus-outline">过的去</el-dropdown-item>
              <el-dropdown-item command="4" icon="el-icon-check">海的味道</el-dropdown-item>
              <el-dropdown-item command="5" icon="el-icon-circle-check-outline">秋天的回忆</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name: 'AmTheme',
    props:{
      theme:Object
    },
    data () {
        return {
        };
    },
    watch:{
      theme(){
        this.$refs.eldropdownlink.style.color = this.theme.headTextColor
        // console.log(this.$refs.textTheme)
      }
    },
    methods: {
      ...mapMutations(['changeThemeNum']),
      handleCommand(command) {
        this.changeThemeNum(command)
      },
    }
}

</script>

<style lang="scss" >
.theme{
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 2px;
  border: 1px solid #eee;
  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
}

</style>
