import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		loginstatus: false,
		songslsitDetailId: null,
		userHomeId: null,
		startSongsList: [],
		startStatus: false,
		userInfo: [],
		homedata: []
	},
	getters: {
		loginStatus(state) {
			return state.loginstatus;
		},
		songsid(state){
			return state.songslsitDetailId;
		},
		getSongList(state){
			if(state.startSongsList == null){
				return false;
			}else{
				return state.startSongsList;
			}
		},
		getuserinfo(state){
			return state.userInfo;
		},
		gethomepage(state){
			return state.homedata;;
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
		},
		myself: (state, data) => {
			state.homedata = data;
		},
		mutationUserId: (state, id) => {
			state.userHomeId = id;
		}
	},
	actions: {
		searchAction: (data) => {

		},
		homePageData: (context) => {
			let id = localStorage.getItem('USERHOMEPAGEID')
			axios.get("http://localhost:3000/user/detail?uid=" + id)
			.then(res => {
				context.commit('myself', res.data.profile)
			})
			.catch(err => {
				throw err
			})
		}
	}
})
