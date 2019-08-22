<template>
  <div class="login">
    <div class="container">
      <h1 class="login_h1">登录</h1>
      <div class="login_form">
        <el-form ref="form" label-width="80px">
          <el-form-item label="手机号码">
            <el-input v-model="phone"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      phone: "",
      password: ""
    };
  },
  created() {},
  methods: {
    onSubmit() {
      this.$req("login/cellphone", {
        phone: this.phone,
        password: this.password
      })
        .then(result => {
          if (result.data.code === 200) {
            localStorage.setItem("Status", true);
            this.$store.commit("loginStatus", result.data.profile, true);
            this.$store.commit("loginStatusInfo", true)
            this.$router.push({ path: 'home' });
            window.location.reload;
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
.container {
  max-width: 1200px;
  margin: auto;
}
.login_form {
  max-width: 500px;
  margin: auto;
}
</style>
