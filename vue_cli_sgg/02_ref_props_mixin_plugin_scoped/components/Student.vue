<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="newYear">过了一年</button>
  </div>
</template>

<script>
  import {hunhe} from '../mixin'


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Student",
  data() {
    return {
      name: this.arg_name,
      age: this.arg_age,
    };
  },
  methods:{
    newYear(){
      this.age++;
    },
  },
  props:{
    arg_name:{
      type:String,
      required:true,
    },
    arg_age:{
      type:Number,
      required:true,
    }
  },
  mounted() {
    this.hello();
  },
  mixins:[hunhe]//局部混入
};
</script>

<style scoped>
  .demo{
    background-color:burlywood;
  }
</style>