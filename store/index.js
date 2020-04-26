import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: false,
		hasLogin: false,
		userName: "",
		personid: "",
		todoList: [],
		fill: true,
	},
	mutations: {
		login(state, userName) {
			state.userName = userName || '新用户';
			state.hasLogin = true;
		},
		setPerson(state, personid) {
			state.personid = personid;
		},
		setTodo(state, todoList) {
			console.log("待办更新")
			state.todoList = todoList;
		},
		filled(state, filled) {
			state.fill = filled;
		},
		logout(state) {
			state.personid = "";
			state.userName = "";
			state.hasLogin = false;
			state.todoList = [];
			///mem/applogin/loginout
			/* uni.request({
				url:"https://ser1.itrobot.site/maxrest/rest/mem/applogin/loginout",
				method:"POST",
				success: (res) => {
					console.log(res.data);
					state.personid = "";
					state.userName = "";
				}
			}) */
			/* this.$http.post("/mem/applogin/loginout",{"PERSONID":state.personid}).then(res=>{
				console.log(res.data)
				state.personid = "";
				state.userName = "";
				
			}).catch(err=>{
				uni.hideLoading();
				uni.showToast({
					title:err,
					icon:"none"
				})
			}); */
			// #ifndef MP-ALIPAY||MP-DINGTALK
			uni.setTabBarBadge({
				index: 1,
				text: "0"
			});
			// #endif

		}
	},
	getters: {
		getHearder: (state) => () => {
			return state.header
		},
		getHasLogin: (state) => () => {
			return state.hasLogin
		},
		getPersonid: function(state) {
			return state.personid
		}

	}
})

export default store
