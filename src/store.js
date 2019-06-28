import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		// apiUrl: "http://localhost:4000/",
		loginstatus: false,
		X_id: '',
	},
	getters: {
		loginStatus(state){
			return state.loginstatus;
		},
	},
	mutations: {
		loginStatusInfo: (state, status) => {
			state.loginstatus = status;
		},
	},
	actions: {}
})
