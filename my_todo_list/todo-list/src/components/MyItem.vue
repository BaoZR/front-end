//MyItem.vue


<template>
  <div class="item">
    <div class="item-left">
      <input type="checkbox" v-bind:checked="todoObj.done" @change="handleCheck(todoObj.id)"/>
      <span v-show="!todoObj.isEditing" class="item-layout">{{ todoObj.title }}</span>
      <input  class="item-layout item-left-input" 
              type="text" 
              v-show="todoObj.isEditing"
              ref="inputText"
              :value="todoObj.title"
              @keyup.enter="handleEnter(todoObj,$event)"
              @blur="handleBlur(todoObj,$event)"
              />
    </div>
    <div class="item-right">
      <button class="item-btn item-btn-edit" @click="editItem(todoObj)">编辑</button>
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
    },
    handleEnter(todoObj,e){//处理enter键被按下的情况
      todoObj.isEditing = false;
      this.updateItem(todoObj.id,e.target.value);
    },
    handleBlur(todoObj,e){
      todoObj.isEditing = false;
      this.updateItem(todoObj.id,e.target.value);
    },
    //need study
    updateItem(id,val){
      console.log(id,val);
      //
      if(val.length <= 16){
        this.$bus.$emit("updateItem",id,val);
      }else{
        alert("输入的任务名字长度不超过16个字符")
      }
    },
    editItem(obj){
      if(Object.prototype.hasOwnProperty.call(obj,"isEditing")){
        obj.isEditing = true;
      }else{
        this.$set(obj,"isEditing",true);
      }
      this.$nextTick(function(){//等输入框出现后，再聚焦到上面去
        this.$refs.inputText.focus();
      })
    }
  },
};
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  height: 25px;
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

.item .item-left .item-layout {
  margin-left: 5px;
}

.item .item-left .item-left-input{
  font-size: 16px;
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