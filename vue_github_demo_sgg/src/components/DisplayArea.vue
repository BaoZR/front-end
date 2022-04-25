<template>
  <div class="DisplayWrapper">
    <div class="item" v-for="user in list" v-bind:key="user.id">
      <p class="name">{{user.login}}</p>
      <img class="pic" :src="user.avatar_url" />
    </div>
  </div>
</template>

<script>
export default {
    props:['list'],
};
</script>

<style scoped>
.DisplayWrapper {
  width:100%;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
}
.item {
  width: 25%;
  box-sizing: border-box;
}
.item .name {
  width: auto;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item .pic {
  width: 100%;
  padding:2px;
  box-sizing: border-box;
}
</style>