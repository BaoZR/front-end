<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <div>
      <button @click="getBaidu">获取信息</button>
    </div> -->
    <search-area v-on:searchGithub="searchGithub"/>
    <display-area :list="list"/>
  </div>
</template>

<script>
import DisplayArea from './components/DisplayArea.vue'
import SearchArea from './components/SearchArea.vue'
// import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    // HelloWorld
    SearchArea,DisplayArea
  },
  data() {
    return {
      list:[],
    }
  },
  methods:{
    // getBaidu(){
    //   axios.get("/api1").then(
    //     response =>{
    //       console.log('请求成功了',response.data);
    //     },error =>{
    //       console.log('请求失败了',error);
    //     }
    //   )
    // }
    searchGithub(e){
      axios.get(`https://api.github.com/search/users?q=${e}`).then(
        (response)=>{
          console.log("请求成功了");
          console.log(response);
          this.list = response.data.items;
        },
        (error) => {
          console.log(error);
          this.lists = [];
        });
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

</style>
