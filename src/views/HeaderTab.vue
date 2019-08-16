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
    <div class="right-user">
      <div class="img">
        <img :src="userinfo.avatarUrl" :alt="userinfo.avatarUrl" class="userImg" />
      </div>
      <div class="info-box">
        <div class="info">
          <i class="el-icon-user info-icon"></i>
          <router-link tag="a" :to="{path: '/myhomepage'}" class="info_link">个人主页</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "headertab",
  data() {
    return {
      input: ""
    };
  },
  created() {},
  computed: {
    ...mapGetters({
      userinfo: "getuserinfo"
    })
  },
  methods: {
    backRouter(status) {
      status == "back" ? window.history.go(-1) : window.history.go(+1);
    },
    search() {
      if (event.keyCode == 13) {
        alert("哈哈哈被我逮着了吧");
      }
    }
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
    .info {
      position: fixed;
      top: 67px;
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
      .info-icon {
        color: #191919;
      }
      .info_link {
        color: #191919;
        text-decoration: none;
        display: block;
      }
    }
  }
}
</style>
