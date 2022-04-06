//MyHeader.vue

<template>
  <header>
    <input class="header-input" 
            placeholder="请输入你的任务名称，按回车确认" 
            @keyup.enter="addItem" 
            v-model="taskName"/>
  </header>
</template>

<script>
export default {
  name:'MyHeader',
  data() {
    return {
      taskName:"",
    }
  },
  methods: {
    addItem:function(){
      if(this.taskName){
        this.$emit("addItem",this.taskName);
      }
    }
  },
};
</script>

<style scoped>
/* head */
.header-input{
    border: 1px solid #d1d1d1;
    border-radius: 5px;
    width:100%;
    height: 30px;
    box-sizing: border-box;
    padding-left: 5px;
    margin-bottom: 10px;
}
</style>