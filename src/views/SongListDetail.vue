<template>
  <div class="songlistdetail">
    <div class="listsong">
      <img :src="playlist.coverImgUrl" alt>
      <div class="songcontent">
        <h2>{{ playlist.name }}</h2>
        <div class="user">
          <img :src="userInfo.avatarUrl" alt class="user-img">
        </div>
      </div>
    </div>
    <ul>
      <li v-for="(list,index) in playlist.tracks" :key="index" style="color: #fff">{{list.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "songlistdetail",
  data() {
    return {
      listdetail: [],
      playlist: [],
      userInfo: []
    };
  },
  created() {
    this.getlistdetail();
  },
  methods: {
    getlistdetail() {
      let url = window.location.search;
      let securl = url.split("=");
      let id = securl[1];
      console.log(id);
      this.$req("playlist/detail", {
        id: id
      })
        .then(result => {
          if (result.data.code === 200) {
            this.playlist = result.data.playlist;
            this.listdetail = result.data;
            let userId = result.data.playlist.userId;
            this.$req("user/detail", {
              uid: userId
            })
              .then(result => {
                if (result.data.code === 200) {
                  this.userInfo = result.data.profile;
                }
              })
              .catch(err => {
                throw err;
              });
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
.songlistdetail {
  padding: 60px 0;
  .listsong {
    display: flex;

    img {
      width: 250px;
    }
    .songcontent {
      margin-left: 50px;
      h2 {
        font-size: 25px;
        color: #fff;
        font-weight: 400;
        letter-spacing: 0.5px;
        margin-bottom: 0px;
        margin-top: 10px;
      }
      .user {
        margin-top: 20px;
      }
      .user-img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
}
</style>


