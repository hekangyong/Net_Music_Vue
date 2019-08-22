<template>
  <div class="homepage">
    <div class="title">
      <img v-lazy="userInfo.avatarUrl" :alt="userInfo.avatarUrl" class="userImg">
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "homepage",
  computed: {
    ...mapGetters({
      userInfo: "gethomepage"
    })
  }
};
</script>
<style lang="scss" scope>
.homepage {
  padding: 100px 30px 100px;
  .userImg{
    width: 250px;
    height: 250px;
  }
}
</style>