<template>
  <div id="app">
    <navs />
    <div class="item_content">
      <headertab id="head">asd</headertab>
      <router-view />
    </div>
    <div class="footer">
      <bottomRadio class="bottom" />
    </div>
  </div>
</template>

<script>
import navs from "./views/nav";
import bottomRadio from "./views/BottomRadio";
import headertab from "./views/HeaderTab";

export default {
  data() {
    return {
      apiurl: "",
      todos: null,
      userinfo: []
    };
  },
  components: {
    navs,
    bottomRadio,
    headertab
  },
  created() {
    this.loginStatus();
  },
  methods: {
    loginStatus: function() {}
  }
};
</script>


<style>
#app {
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.container {
  max-width: 1200px;
  margin: auto;
}
html,
body {
  margin: 0px;
  height: 100%;
  background-color: #0c102d;
  font-family: "daxline" !important;
  color: #fff;
}
.item_content {
  float: left;
  min-width: calc(100% - 342px);
  margin-left: 340px;
  position: relative;
}
.bottom {
  position: fixed;
  bottom: 0;
}
#head {
  min-width: calc(100% - 398px);
  z-index: 1000;
  position: fixed;
  top: 0;
  margin-left: -18px;
  padding: 14px 37px;
  background-color: rgba(24, 35, 111, .25);
}
/* .bottom:hover {
  bottom: 0px;
} */
</style>
