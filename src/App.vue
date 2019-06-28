<template>
  <div id="app">
    <navs/>
    <div class="item_content">
      <!-- <div id="nav" :userinfos="userinfo">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>|
        <router-link to="/login">login</router-link>
      </div> -->
      <router-view/>
    </div>
  </div>
</template>

<script>
import navs from "./views/nav";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      apiurl: "",
      todos: null,
      userinfo: [],
    };
  },
  components: {
    navs
  },
  created() {
    this.loginStatus();
  },
  methods: {
    loginStatus: function() {
    }
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
  min-width: clac(100% - 420px);
  width: calc(100% - 492px);
  margin-left: 430px;
}
</style>
