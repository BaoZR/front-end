<template>
  <div>
      <h1>当前求和值为：{{sum}}</h1>
      <h1>放大10的数：{{$store.getters.bigSum}}</h1>
      <button @click="log">log</button>
      <button @click="increment(1)">+1</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['sum'])
  },
  methods: {
    log(){
      console.log(this);
    },
    increment(num){
      this.$store.dispatch('add',num);
    }
  },
}
</script>

<style>

</style>