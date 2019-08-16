<template>
  <div class="loading">
    <h1>不要催了我很努力了 ━((*′д｀)爻(′д｀*))━...</h1>
  </div>
</template>
<script>
export default {
  name: "loading",
  props: {
    title: {
      type: String,
      default: "正在玩命加载中..."
    }
  }
};
</script>
<style lang="scss" scoped>
.loading {
  background-color: #0c102d;
  height: 100%;
  width: calc(100% - 398px);
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-weight: 100;
  }
}
</style>

