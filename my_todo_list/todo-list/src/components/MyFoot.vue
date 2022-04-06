//MyFoot.vue

<template>
  <footer>
    <div class="footer-left">
      <input class="footer-check-all" type="checkbox" />
      <div class="footer-label">已完成 3 /全部 4</div>
    </div>
    <button class="item-btn item-btn-delete">删除已完成任务</button>
  </footer>
</template>

<script>
export default {
  name:'MyFoot',
};
</script>

<style>
/*footer*/
footer {
  padding: 5px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

footer .footer-left {
  display: flex;
  align-items: center;
}

footer .footer-left .footer-label {
  margin-left: 5px;
}
</style>