import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		// apiUrl: "http://localhost:4000/",
		loginstatus: false,
		X_id: '',
		songslsitDetailId: null,
	},
	getters: {
		loginStatus(state) {
			return state.loginstatus;
		},
		songsid(state){
			return state.songslsitDetailId;
		}
	},
	mutations: {
		loginStatusInfo: (state, status) => {
			state.loginstatus = status;
		},
		changesongsId: (state, id) => {
			state.songslsitDetailId = id;
		}
	},
	actions: {}
})
