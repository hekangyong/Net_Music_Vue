<template>
  <div class="songlistdetail">
    <div class="listsong">
      <img v-lazy="playlist.coverImgUrl" alt />
      <div class="songcontent">
        <h2>{{ playlist.name }}</h2>
        <div class="user">
          <img v-lazy="userInfo.avatarUrl" alt class="user-img" />
          <p class="username-span">{{userInfo.nickname}}</p>
        </div>
        <p
          class="description_p"
        >简介：{{ (playlist.description == "" || playlist.description == null)? "这人很懒什么都没有留下...": playlist.description }}</p>
        <a class="start_all">播放全部</a>
      </div>
    </div>
    <ul class="songsitem">
      <li
        v-for="(list,index) in playlist.tracks"
        :key="index"
        v-bind:data-SongListId="list.id"
        class="songlistLink"
        style="color: #fff"
        @click="getAudioUrl($event.currentTarget)"
      >
        <div class="songsDiv">
          <div class="songnames">{{list.name}}</div>
          <div class="center">
            <span class="songname" v-for="(naalb, index) in list.ar" :key="index">{{naalb.name}}</span>
          </div>
          <div class="right-tab">
            <div class="album">
              <span class="albumName">{{list.al.name}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div v-show="loading" class="loadingShow">
      <loading></loading>
    </div>
  </div>
</template>
<script>
import loading from "../components/loading";
export default {
  name: "songlistdetail",
  data() {
    return {
      listdetail: [],
      playlist: [],
      userInfo: [],
      listId: null,
      loading: true,
    };
  },
  created() {
    window.addEventListener("setItem", () => {
      this.newVal = sessionStorage.getItem("songID");
      this.loading = true;
      this.getlistdetail();
    });
    this.getlistdetail();
  },
  methods: {
    getlistdetail() {
      let id = sessionStorage.getItem("songID");
      console.log(id);
      this.playlist = [];
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
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getAudioUrl(val) {
      let songsId = val.getAttribute("data-songlistid");
      let musicUrl;
      let audio = document.querySelector("#music-audio");
      this.$req("song/url", { id: songsId })
        .then(result => {
          if (result.data.code === 200) {
            // this.songsList = result.data;
            musicUrl = result.data.data[0].url;
            audio.setAttribute("src", musicUrl);
          }
        })
        .catch(err => {
          throw err;
        });
    }
  },
  components: {
    loading
  }
};
</script>
<style lang="scss" scoped>
.description_p {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: #bcbcbc;
  line-height: 28px;
}
.user {
  display: flex;
  align-items: center;
  .username-span {
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    vertical-align: top;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 20px;
  }
}
.float-left {
  float: left;
}
.songlistdetail {
  padding: 60px 30px;
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
  .songsitem {
    margin-top: 40px;
    padding-left: 0px;
    .songlistLink {
      list-style: none;
      padding-top: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #a3a1a1;
      cursor: pointer;
      .songsDiv {
        display: flex;
        justify-content: space-between;
        .songnames {
          width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .album {
          margin-left: 60px;
          float: right;
          .albumName {
            display: block;
            width: 150px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .songname {
          letter-spacing: 0.5px;
          &:first-child:before {
            content: " ";
          }
          &:before {
            content: "/";
          }
        }
      }
      div {
        &:hover {
          color: #fb0036;
        }
      }
    }
  }
}
.loadingShow {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
}
.start_all{
  font-size: 15px;
  font-weight: 400;
  letter-spacing: .5px;
  color: #fff;
  background-color: #e9234e;
  padding: 8px 40px;
  border-radius: 50px;
  transition: all 0.3s;
  border: 1px solid #e9234e;
  cursor: pointer;
  &:hover{
    border: 1px solid #e9234e;
    background-color: transparent;
    color: #e9234e
  }
}
</style>


