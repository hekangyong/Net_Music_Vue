import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		// apiUrl: "http://localhost:4000/",
		daUser: {},
		userinfor: {},
		loginstatus: false,
		X_id: '',
	},
	getters: {
	},
	mutations: {
		SaveUserInfor: (state, Infor) => {
			state.userinfor = Infor
		},
		changeLoginStatus(state, status) {
			state.loginstatus = status
		},
		changeUser: (state, Infor) => {
			state.X_id = Infor
		},
		loginStatus: (state, Infor, status) => {
			state.daUser = Infor;
			state.loginstatus = status;
		}
	},
	actions: {}
})
