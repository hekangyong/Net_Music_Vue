<template>
  <div class="headerTab">
    <div class="left-icon">
      <div class="icon">
        <i class="el-icon-caret-left icon_style" @click="backRouter('back')"></i>
        <i class="el-icon-caret-right icon_style" @click="backRouter('next')"></i>
      </div>
      <div class="input">
        <el-input v-model="input" placeholder="请输入内容" @keyup.enter.native="search"></el-input>
      </div>
    </div>
    <div class="right-user" v-if="loginStatus != false">
      <div class="img">
        <img v-lazy="userinfo.avatarUrl" :alt="userinfo.avatarUrl" class="userImg" @click="info" />
      </div>
      <div class="info-box">
        <div class="info">
          <i class="el-icon-user info-icon"></i>
          <a
            class="info_link"
            :data-id="userinfo.userId"
            @click="gomyself($event.currentTarget)"
          >个人主页</a>
        </div>
        <div class="info">
          <i class="el-icon-delete info-icon"></i>
          <a class="info_link">退出登录</a>
        </div>
      </div>
    </div>
    <div class="right-user" v-else-if="loginStatus == false">
      <router-link tag="a" :to="{path: '/login'}" class="login">请登录</router-link>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "headertab",
  data() {
    return {
      input: "",
      open: false
    };
  },
  created() {},
  computed: {
    ...mapGetters({
      userinfo: "getuserinfo",
      loginStatus: "loginStatus"
    }),
  },
  methods: {
    ...mapMutations({
      UserId: 'mutationUserId'
    }),
    ...mapActions({
      myhomePage: 'homePageData'
    }),
    backRouter(status) {
      status == "back" ? window.history.go(-1) : window.history.go(+1);
    },
    search() {
      if (event.keyCode == 13) {
        alert("哈哈哈被我逮着了吧");
      }
    },
    info() {
      var infoBox = document.querySelector(".info-box");
      if (this.open == false) {
        infoBox.setAttribute("style", "display: block !important");
        this.open = true;
      } else {
        infoBox.setAttribute("style", "display: none !important");
        this.open = false;
      }
    },
    gomyself(val){
      var id = val.getAttribute("data-id")
      this.UserId(id);
      this.myhomePage();
      document.querySelector(".info-box").setAttribute("style", "display: none !important");
      this.$router.push({ path: "/myhomepage"});
    },
  }
};
</script>
<style lang="scss" scoped>
.headerTab {
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left-icon {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .icon {
      margin-right: 24px;
      .icon_style {
        font-size: 16px;
        font-weight: 400;
        border: 1px solid #fff;
        padding: 2px;
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
          color: #e9234e;
          border-color: #e9234e;
        }
      }
      .el-icon-caret-right {
        margin-left: 10px;
      }
    }
  }
  .right-user {
    position: relative;
    .login{
      color: #fff;
      text-decoration: none;
      font-size: 16px;
      letter-spacing: .5px;
    }
    .img {
      display: flex;
      align-items: center;
      .userImg {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        border: 1px solid #0c102d;
      }
    }
    .info-box {
      display: none;
      position: fixed;
      right: 40px;
      top: 72px;
    }
    .info {
      background-color: #fff;
      max-width: 170px !important;
      width: 170px;
      right: 34px;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0.5px;
      overflow: hidden;
      display: flex;
      align-items: center;
      padding: 10px 20px;
      transition: all 0.3s;
      border-bottom: 1px solid #eee;
      &:hover {
        background-color: #e8e7e7;
      }
      .info-icon {
        color: #191919;
        margin-right: 9px;
        font-size: 18px;
        font-weight: 500;
      }
      .info_link {
        cursor: pointer;
        color: #191919;
        text-decoration: none;
        display: block;
      }
    }
  }
}
</style>
