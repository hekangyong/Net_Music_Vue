<template>
  <div class="loading">
    <img src="../assets/images/loading.gif" alt />
  </div>
</template>
<script>
export default {
  name: "loading",
  props: {
    title: {
      type: String,
      default: '正在加载中请稍后...'
    }
  }
};
</script>
<style lang="scss" scoped>
.loading{
    background-color: #0c102d;
    height: 100%;
    width: 100%;
}
</style>

