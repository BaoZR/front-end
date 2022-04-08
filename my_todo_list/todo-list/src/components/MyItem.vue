//MyItem.vue


<template>
  <div class="item">
    <div class="item-left">
      <input type="checkbox" v-bind:checked="todoObj.done" @change="handleCheck(todoObj.id)"/>
      <div class="label">{{ todoObj.title }}</div>
    </div>
    <div class="item-right">
      <button class="item-btn item-btn-edit">编辑</button>
      <button class="item-btn item-btn-delete" @click="deleteItem(todoObj.id)">删除</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'MyItem',
  props: ["todoObj"],
  methods: {
    deleteItem:function(id){
      this.$bus.$emit("deleteItem",id);
      //console.log("deleteItem",id);
    },
    //改变勾选状态，自定义事件
    handleCheck(id){
      //console.log("emit",id);
      this.$bus.$emit("changeCheck",id);
    }
  },
};
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid #d1d1d1;
  border-left: 1px solid #d1d1d1;
  border-right: 1px solid #d1d1d1;
  justify-content: space-between;
}

.item .item-left {
  display: flex;
  align-items: center;
}

.item .item-right {
  border: none;
}

.item .item-left .label {
  margin-left: 5px;
}

.item .item-btn {
  margin-left: 3px;
}

/* show hidden */
.item .item-btn {
  visibility: hidden;
}

.item:hover {
  background-color: #dfe6e9;
}

.item:hover .item-btn {
  visibility: visible;
}
</style>