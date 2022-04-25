<template>
  <div class="wrapper">
      <input type="text" class="search-input" maxlength="20" v-model="name"/>
      <button class="search-btn" @click="searchGithub">Search</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name:'',
        }
    },
    methods: {
        searchGithub(){
            this.$emit('searchGithub',this.name);
        }
    },
}
</script>

<style scoped> 
    .wrapper{
        width:100%;
        padding:2px;
        box-sizing: border-box;
        height:auto;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .search-input{
        padding:3px 2px 1px 4px;
        width:100%;
        vertical-align: bottom;
    }
    .search-btn{
        margin-left: 2px;
        height: 100%;
        padding: 2px 0;
    }
</style>