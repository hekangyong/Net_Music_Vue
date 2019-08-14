<template>
  <div class="dailysonglist">
    <div class="songlistbox">
      <div
        class="songlist-card"
        v-for="(songlist, index) in songlist.recommend"
        :key="index"
        @click="dailysong($event.currentTarget)"
        v-bind:data-SongListId="songlist.id"
      >
        <div class="card-img">
          <img v-lazy="songlist.picUrl" class="songlist-img" alt />
        </div>
        <div class="card-content">
          <p class="card-content-p">{{ songlist.name }}</p>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "dailysonglist",
  data() {
    return {
      songlist: {}
    };
  },
  created() {
    let loginstatus = localStorage.getItem("Status");
    if (loginstatus == "true") {
      this.$req("recommend/resource").then(result => {
        if (result.data.code == 200) {
          this.songlist = result.data;
        }
      });
    } else {
      return;
    }
  },
  methods: {
    dailysong(val) {
      let songid = val.getAttribute("data-SongListId");
      this.resetSetItem("songID", songid);
      this.$store.commit("changesongsId", songid);
      this.$router.push({
        path: `/dailysonglist/listdetaild?id=${songid}`
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.songlistbox {
  overflow: hidden;
  position: relative;
}
.songlistdetail {
  position: absolute;
  top: 0px;
  background-color: #0c102d;
  width: 94.5%;;
}
.songlist-card {
  float: left;
  width: 230px;
  margin-left: 50px;
  margin-top: 30px;
  .card-img {
    height: 230px;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }
  .songlist-img {
    height: 230px;
  }
  .card-content-p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0px;
    margin-bottom: 0px;
    color: #fff;
    font-size: 20px;
    font-family: "HYZIKUTANG";
    line-height: 25px;
    margin-top: 5px;
  }
}
</style>
