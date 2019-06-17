<template>
  <div id="app">
    <navs/>
    <div class="item_content">
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>|
        <router-link to="/login">login</router-link>
      </div>
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
      todos: null
    };
  },
  components: {
    navs
  },
  created() {
    this.loginStatus();
  },
  computed: {
    ...mapGetters(["getApiUrl"])
  },
  methods: {
    loginStatus: function() {
      this.$req("login/status")
        .then(result => {
          if (result.data.code === 200) {
            this.$store.commit("loginStatus", result, true);
          }
        })
        .catch(err => {
          throw err;
        });
    }
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
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
html,body {
  margin: 0px;
  height: 100%;
}
.item_content {
  float: left;
  width: clac(100% - 320px);
}
</style>
