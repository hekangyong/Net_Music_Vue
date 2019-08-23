<template>
  <div class="homepage">
    <div class="title">
      <div class="userimg">
        <img v-lazy="userInfo.avatarUrl" :alt="userInfo.avatarUrl" class="userImg" />
      </div>
      <div class="usertext">
        <h3>{{userinfo}}</h3>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "homepage",
  created() {
    this.homePageData;
  },
  computed: {
    ...mapActions(["homePageData"]),
    ...mapGetters({
      userInfo: "gethomepage"
    })
  },
  methods: {}
};
</script>
<style lang="scss" scope>
.homepage {
  padding: 100px 30px 100px;
  .userImg {
    width: 250px;
    height: 250px;
  }
}
</style>