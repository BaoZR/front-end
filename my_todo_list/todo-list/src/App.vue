<template>
  <div class="container">
    <my-header v-on:addItem="addItem" />
    <my-list :todoList="todoList" v-on:deleteItem="deleteItem" />
    <my-foot :todoList="todoList" 
              v-on:changeAllCheck="changeAllCheck" 
              v-on:deleteCheckedItem="deleteCheckedItem"/>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFoot from "./components/MyFoot.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFoot,
  },
  data() {
    return {
      todoList: [
        { id: "001", title: "苹果", done: true },
        { id: "002", title: "香蕉", done: false },
        { id: "003", title: "西瓜", done: true },
      ],
    };
  },
  methods: {
    //添加item信息
    addItem: function (value) {
      let maxId = Math.max(...this.todoList.map(item => item.id)) ;
      //console.log(maxId,"获取的值");  
      // eslint-disable-next-line no-undef
      if(!Number.isInteger(maxId)){//如果list为空
        maxId = 0;
      } 
      //console.log(maxId,"待计算的值");  
      const item = {
        id: ("000" + (++maxId)).slice(-3),
        title: value,
        done: false,
        isEditing:false,
      };
      this.todoList.unshift(item);
    },
    deleteItem:function(id){
      // console.log(id,'接收到的id是');
      this.todoList = this.todoList.filter(item => item.id !== id);
    },
    updateItem:function(id,val){
      this.todoList.forEach(function(item){
        if(item.id === id) item.title = val;
      })
    },
    changeCheck(id){
      //console.log("changecheck")
      this.todoList.forEach(function(item){
        if(item.id === id) item.done = !item.done
      })
    },
    //删除已完成的任务
    deleteCheckedItem(){
      this.todoList = this.todoList.filter(item => item.done === false)
    },
    //全选框改变
    changeAllCheck(val){
      this.todoList.forEach(item => item.done = val);
    }
  },
  mounted() {
    this.$bus.$on("deleteItem",this.deleteItem);
    this.$bus.$on("changeCheck",this.changeCheck);
    this.$bus.$on("updateItem",this.updateItem);
  },
  beforeDestroy(){
    this.$bus.$off("deleteItem");
    this.$bus.$off("changeCheck");
    this.$bus.$off("updateItem");
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
ul,
ol {
  list-style: none;
}

.container {
  border: 1px solid #d1d1d1;
  padding: 5px 5px 15px 5px;
  border-radius: 5px;
  width: 600px;
  margin: auto;
}

.container .item-btn {
  padding: 1px 5px;
  border-radius: 3px;
  border: 1px solid #f7f7f7;
}

.container .item-btn-delete {
  background-color: #e17055;
}

.container .item-btn-edit {
  background-color: lightskyblue;
}
</style>
