<template>
  <div class="home">
    <index/>
    <el-button type="primary" @click="logout">logout</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import index from "@/components/index.vue";

export default {
  name: "home",
  data() {
    return {
      apiurl: "",
      todos: null
    };
  },

  components: {
    index
  },
  methods: {
    logout: function() {
      this.$req("logout")
        .then(result => {
          if (result.data.code === 200) {
            localStorage.setItem("Status", false);
            this.$store.commit("SaveUserInfor", {});
            this.$store.commit("loginStatus", {}, false);
            this.$router.push("/login");
          }
        })
        .catch(err => {
          throw err;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
