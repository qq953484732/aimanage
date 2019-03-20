export default {
  changeStatus (state) {
      state.status = state.status === false? true : false
  },
  changeThemeNum(state,val){
    let num = Number(val)
    if(num){  
      state.themeNum = num
      console.log(state.themeNum)
    }else{
      state.themeNum = 1
    }
  }
}