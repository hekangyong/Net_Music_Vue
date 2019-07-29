<template>
  <div class="bottomradio">
    <div class="radio">
      <audio id="music-audio" src controls="controls">Your browser does not support the audio tag.</audio>
    </div>
  </div>
</template>
<script>
export default {
  name: "BottomRadio",
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss">
.bottomradio {
  background-color: rgba(48, 50, 60, 0.9);
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  z-index: 1000;
}
</style>
