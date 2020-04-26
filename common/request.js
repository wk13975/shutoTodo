import store from '../store/index.js'

const url = "https://ser1.itrobot.site/maxrest/rest/";

var requestUtil = {
	doGet(api) {
		let hasLogin = store.getters.getHasLogin();
		let header = store.getters.getHearder();
		if (hasLogin) {
			uni.request({
				url: url + api,
				method: "GET",
				header: {
					"MAXAUTH": header
				},
				success: (res) => {
					console.log("doget")
					console.log(res.data);
					if (res.data.META.SUCCESS) {
						return res.data.DATA
					} else {
						uni.showToast({
							title: res.data.META.MESSAGE,
							icon: "none"
						})
					}
				},
				complete() {
					uni.hideLoading()
				}
			});
		}
	},
	doPost(api, data, success) {
		let hasLogin = store.getters.getHasLogin();
		let header = store.getters.getHearder();
		if (hasLogin)
			uni.request({
				url: url + api,
				method: "POST",
				header: {
					"MAXAUTH": header
				},
				data: data,
				success: (res) => {
					console.log("dopost")
					console.log(res.data);
					if (res.data.META.SUCCESS) {

					} else {

					}

				},
				fail: () => {

				},
				complete() {

				}
			});
	}



}
export default requestUtil
