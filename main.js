import Vue from 'vue'
import App from './App'
import store from './store'
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
import Request from "utils/luch-request/request.js"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)

Vue.config.productionTip = false

Vue.prototype.$store = store
const http = new Request()
http.setConfig(
	(config) => { /* config 为默认全局配置*/
		config.baseUrl = 'https://ser1.itrobot.site/maxrest/rest' /* 根域名 */
		return config
	}
);
Vue.prototype.$http = http
App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
