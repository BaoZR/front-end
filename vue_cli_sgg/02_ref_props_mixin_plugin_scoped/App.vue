<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- props传值时，发现带：可以传数字、布尔，不带：传的是字符串 -->
      <student :arg_age="89" arg_name="ads"/>
      <button ref="btn" @click="show">点我输出dom</button>
  </div>
</template>

<script>
import Student from './components/Student.vue'


export default {
  name: 'App',
  components: {
    Student,
  },
  methods: {
    show:function(){
      console.log(this.$refs.btn);
    }
  },
}
  

</script>

