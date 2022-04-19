<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
      <button @click="getBaidu">获取信息</button>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  methods:{
    getBaidu(){
      axios.get("/api1").then(
        response =>{
          console.log('请求成功了',response.data);
        },error =>{
          console.log('请求失败了',error);
        }
      )
    }
  }
}
</script>

<style>

</style>
