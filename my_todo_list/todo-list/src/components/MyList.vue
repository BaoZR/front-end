// MyList.vue

<template>
    <ul >
        <ol v-for="todoObj in todoList" v-bind:key="todoObj.id">
            <my-item :todoObj = "todoObj" />
        </ol>
    </ul>


</template>

<script>
import MyItem from "./MyItem.vue";

export default {
  name:'MyList',
  components: { MyItem },
  props:['todoList'],
};
</script>

<style scoped>

ol:nth-child(1) .item{
    border-top: 1px solid #d1d1d1;
    border-radius:5px 5px 0px 0px;

}

ol:nth-last-child(1) .item{
    border-radius: 0px 0px 5px 5px;
}

</style>