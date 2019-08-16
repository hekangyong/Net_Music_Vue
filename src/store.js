import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		loginstatus: false,
		songslsitDetailId: null,
		startSongsList: [],
		startStatus: false,
		userInfo: []
	},
	getters: {
		loginStatus(state) {
			return state.loginstatus;
		},
		songsid(state){
			return state.songslsitDetailId;
		},
		getSongList(state){
			return state.startSongsList;
		},
		getuserinfo(state){
			return state.userInfo;
		}
	},
	mutations: {
		loginStatusInfo: (state, status) => {
			state.loginstatus = status;
		},
		changesongsId: (state, id) => {
			state.songslsitDetailId = id;
		},
		startSong: (state, data) => {
			state.startSongsList = data;
			state.startStatus = true;
		},
		mutaUserInfo: (state, data) => {
			state.userInfo = data;
		}
	},
	actions: {
		actStartSong: (data) => {
			data.commit(startSong);
		},
		searchAction: (data) => {
			
		}
	}
})
