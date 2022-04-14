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
        //TODO 
        if(this.taskName.length <= 16){
          this.$emit("addItem",this.taskName);
        }else{
          alert("输入的任务名字长度不超过16个字符")
        }
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