<template>
  <div class="nav">
    <div class="header_nav">
      <div class="logoMusic">
        <router-link to="/" class="logo_title">Browse Music</router-link>
      </div>
    </div>
    <div class="nav-all">
      <div class="recommend">
        <ul class="net-ul-brand">
          <!-- <li class="net-link active">
            <i class="net-link-icon el-icon-bangzhu"></i> Discover music
          </li>-->
          <router-link tag="li" class="net-link" :to="{path: '/dailysonglist'}" replace>
            <i class="net-link-icon el-icon-bangzhu"></i> Daily Song Lists
          </router-link>
          <li class="net-link">
            <i class="net-link-icon el-icon-discover"></i> Hot Song Lists
          </li>
          <li class="net-link">
            <i class="net-link-icon el-icon-notebook-2"></i> Ranking List
          </li>
          <li class="net-link">
            <i class="net-link-icon el-icon-discount"></i> Songs List
          </li>
        </ul>
      </div>
      <div class="yourself-songsList" v-if="loginstatuss == true">
        <h3 class="songsList-title">Created song list</h3>
        <ul class="net-ul-brand">
          <li
            class="net-link"
            v-for="(list, listKey) in creatSongsList"
            :key="listKey"
            v-bind:data-SongListId="list.id"
            @click="pushsongslist($event.currentTarget)"
          >
            <i class="net-link-icon el-icon-bangzhu"></i>
            {{ list.name }}
          </li>
        </ul>
        <h3 class="songsList-title">Collection song list</h3>
        <ul class="net-ul-brand">
          <li
            class="net-link"
            v-for="(list,listsKey) in collectionSongsList"
            :key="listsKey"
            v-bind:data-SongListId="list.id"
            @click="pushsongslist($event.currentTarget)"
          >
            <i class="net-link-icon el-icon-bangzhu"></i>
            {{ list.name }}
          </li>
        </ul>
      </div>
      <div class="yourself-songsList" v-else-if="loginstatuss == false">
        <h1 class="noLogin">您当前没有登录</h1>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "navs",
  data() {
    return {
      userInfo: [],
      songsList: [],
      creatSongsList: [],
      collectionSongsList: [],
    };
  },

  created() {
    this.getsongsList();
  },

  computed:{
    ...mapGetters({
      loginstatuss: 'loginStatus'
    })
  },

  methods: {
    getsongsList() {
      let loginStatus = localStorage.getItem("Status");
      if (loginStatus == "true") {
        this.loginStatus = true;
        let uid = sessionStorage.getItem("userInfo");
        let jsonuid = JSON.parse(uid);
        this.userInfo = jsonuid;
        this.$req("user/playlist", { uid: this.userInfo.profile.userId })
          .then(result => {
            if (result.data.code === 200) {
              this.songsList = result.data;
              this.songfl();
            }
          })
          .catch(err => {
            throw err;
          });
      }
    },
    songfl() {
      for (let i = 0; i < this.songsList.playlist.length; i++) {
        if (
          this.songsList.playlist[i].userId === this.userInfo.profile.userId
        ) {
          this.creatSongsList.push(this.songsList.playlist[i]);
        } else {
          this.collectionSongsList.push(this.songsList.playlist[i]);
        }
      }
    },
    pushsongslist(val) {
      let listid = val.getAttribute("data-SongListId");
      let vals = document.querySelectorAll(".net-link");
      let map = new Map();
      map = vals;
      for(let value of map.values()){
        if(value.getAttribute('data-songlistid') === listid){
          value.className = 'net-link router-link-exact-active router-link-active';
        }else{
          value.className = 'net-link'
        }
      }
      this.resetSetItem("songID", listid);
      this.$store.commit("changesongsId", listid);
      this.$router.push({ path: "/songlistdetail", query: { id: listid } });
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  float: left;
  width: 320px;
  height: 100%;
  background-color: #0e1130;
  border-right: 2px solid #191c3b;
  position: fixed;
}
.logoMusic {
  padding: 36px 18px 0 34px;
}
.logo_title {
  font-size: 23px;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-family: "quantum";
}
.net-ul-brand {
  padding-left: 0px;
  margin-top: 0px;
  li {
    list-style: none;
    color: #ffff;
  }
  .router-link-active {
    color: #fb0036;
    border-right: 2px solid rgba(251, 0, 54, 0.8) !important;
  }
  .active {
    color: #fb0036;
    border-right: 2px solid rgba(251, 0, 54, 0.8) !important;
  }

  .net-link {
    .net-link-icon {
      margin-right: 10px;
      font-size: 21px;
      vertical-align: middle;
    }
    padding: 16px 36px 16px 33px;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 24px;
    border-right: 2px solid transparent;
    transition: all 0.3s;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:hover {
      color: #e9234e;
      border-right: 2px solid rgba(251, 0, 54, 0.8);
    }
  }
}
.nav-all {
  margin-top: 20px;
  position: relative;
  height: calc(100% - 153px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: #eee;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #aaa;
  }
}
.nav-tab-title {
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #fff;
  margin: 0px;
  padding: 10px 18px;
}
.yourself-songsList {
  margin-top: 20px;
  .songsList-title {
    padding: 0 30px;
    color: #fff;
    margin: 0px;
    font-size: 17px;
    letter-spacing: 0.5px;
    line-height: 48px;
  }
  .noLogin{
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: .5px;
    margin-left: 30px;
  }
}
</style>

