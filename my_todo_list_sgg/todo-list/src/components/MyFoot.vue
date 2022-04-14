//MyFoot.vue

<template>
  <footer>
    <div class="footer-left">
      <input class="footer-check-all" type="checkbox" v-model="allChecked" @change="handleAllCheck"/>
      <div class="footer-label">已完成 {{doneCount}} /全部 {{todoList.length}}</div>
    </div>
    <button class="item-btn item-btn-delete" @click="deleteCheckedItem">删除已完成任务</button>
  </footer>
</template>

<script>
export default {
  name:'MyFoot',
  props:['todoList'],

  computed:{
    doneCount(){
      return this.todoList.filter(item => item.done === true).length
    },
    //全选框
    allChecked:{
      get(){
        let t = this.todoList.reduce(
          function(acc,cur){
            if(cur.done === true) { acc++;}
            return acc;
          },0);
          //要是有个强制刷新的方法就好了，watch方法还不会用
        if(t === 0) return false;
        return t === this.todoList.length ? true : false;
      },
      set(value){
        console.log(value);
      }
    }
  },
  methods: {
    //处理全部选择框改变选择
    handleAllCheck(e){
      //console.log(e)
      this.$emit("changeAllCheck",e.target.checked)
    },
    //删除已完成的任务
    deleteCheckedItem(){
      this.$emit("deleteCheckedItem");
    }
  },

  

};
</script>

<style>
/*footer*/
footer {
  padding: 5px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

footer .footer-left {
  display: flex;
  align-items: center;
}

footer .footer-left .footer-label {
  margin-left: 5px;
}
</style>