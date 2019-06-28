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
          <li class="net-link active">
            <i class="net-link-icon el-icon-bangzhu"></i> Discover music
          </li>
          <li class="net-link">
            <i class="net-link-icon el-icon-discover"></i> Private FM
          </li>
          <li class="net-link">
            <i class="net-link-icon el-icon-notebook-2"></i> Ranking List
          </li>
          <li class="net-link">
            <i class="net-link-icon el-icon-discount"></i> Songs List
          </li>
        </ul>
      </div>
      <div class="yourself-songsList">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "navs",
  data() {
    return {
      userInfo: [],
      songsList: [],
      creatSongsList: [],
      collectionSongsList: [],
      loginStatus: false
    };
  },

  props: ["userinfos"],

  created() {
    this.getsongsList();
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
      let listid = val.getAttribute('data-SongListId');
      this.$router.push({ path: 'songlistdetail', query: { id: listid } });
      window.location.reload()
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
  height: calc(100% - 90px);
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
}
</style>

