<template>
  <div class="bottomradio">
    <div class="radio">
      <div class="audio">
        <audio
          id="music-audio"
          autoplay="autoplay"
          src
          controls="controls"
        >Your browser does not support the audio tag.</audio>
      </div>
      <div class="icon-list">
        <i class="el-icon-tickets" @click="listshow"></i>
        <div class="songlist">
          <div class="close">
            <i class="el-icon-close icon-right" @click="closeTab"></i>
          </div>
          <ul class="song_ul" v-if="songlist != false">
            <li v-for="(list, index) in songlist" :key="index">
              <p>
                {{list.title}} -
                <span class="songer">{{list.songer}}</span>
              </p>
            </li>
          </ul>
          <div class="listnull" v-else>
            <p>没有播放歌单</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { open } from "fs";
export default {
  name: "BottomRadio",
  data() {
    return {
      opens: false
    };
  },
  computed: {
    ...mapGetters({
      songlist: "getSongList"
    })
  },
  created() {},
  methods: {
    listshow() {
      if (this.opens == false) {
        this.opens = true;
        document
          .querySelector(".songlist")
          .setAttribute("style", "display: block");
      } else {
        this.opens = false;
        document
          .querySelector(".songlist")
          .setAttribute("style", "display: none");
      }
    },
    closeTab() {
      this.opens = false;
      document
        .querySelector(".songlist")
        .setAttribute("style", "display: none");
    }
  }
};
</script>
<style lang="scss">
.bottomradio {
  background-color: rgba(48, 50, 60, 0.9);
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  z-index: 1000;
  position: relative;
  .audio {
    float: left;
  }
  .icon-list {
    text-align: right;
    color: #fff;
    padding-top: 15px;
    padding-right: 26px;
    i {
      font-size: 20px;
      font-weight: 400;
      vertical-align: middle;
      cursor: pointer;
    }
  }
  .songlist {
    position: fixed;
    display: none;
    bottom: 85px;
    right: 0px;
    background-color: #fff;
    min-width: 600px;
    text-align: left;
    .close {
      color: #000;
      padding: 10px 15px;
      border-bottom: 1px solid #eee;
      overflow: hidden;
      .icon-right {
        float: right;
      }
    }
    .listnull {
      color: #000;
      text-align: center;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0.5px;
    }
    .song_ul {
      height: 400px;
      padding: 13px !important;
      overflow-y: auto;
      margin-bottom: 0px;
      padding-left: 0px;
      margin-top: 0;
      li {
        list-style: none;
        cursor: pointer;
        color: #000;
        .songer {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.5px;
          color: #f31717;
          width: 300px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
