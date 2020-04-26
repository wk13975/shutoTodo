<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">账号：</text>

				<m-input class="m-input" type="text" clearable v-model="account" placeholder="请输入账号"></m-input>

				<!--#ifndef MP-ALIPAY||MP-DINGTALK -->
				<!-- <m-input class="m-input" type="text" clearable focus v-model="account" placeholder="请输入账号"></m-input> -->
				<!--#endif-->
			</view>
			<view class="input-row">
				<text class="title">密码：</text>
				<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="bindLogin">{{btTitle}}</button>
		</view>
		<!-- <view class="action-row">
			<navigator url="../reg/reg">注册账号</navigator>
			<text>|</text>
			<navigator url="../pwd/pwd">忘记密码</navigator>
		</view> -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="oauth-row" v-if="hasProvider" v-bind:style="{top: positionTop + 'px'}">
			<view class="oauth-image" v-for="provider in providerList" :key="provider.value">
				<image :src="provider.image" @tap="oauth(provider.value)"></image>

				<!-- <button v-if="!isDevtools" open-type="getUserInfo" @getuserinfo="getUserInfo"></button> -->

			</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import service from '../../service.js';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import mInput from '../../components/m-input.vue'

	import '../../common/base64.js';
	// #ifdef MP-WEIXIN||MP-ALIPAY||MP-DINGTALK
	var Base64 = require('../../common/base64.js');
	// #endif

	var http;
	export default {
		components: {
			mInput
		},
		data() {
			return {
				providerList: [],
				hasProvider: false,
				account: '',
				password: '',
				positionTop: 0,
				isDevtools: false,
				btTitle: "登录",
				code: ""
			}
		},
		computed: mapState(['forcedLogin']),
		methods: {
			...mapMutations(['login']),
			...mapMutations(['setPerson']),
			initProvider() {
				const filters = ['weixin', 'qq', 'sinaweibo'];
				uni.getProvider({
					service: 'oauth',
					success: (res) => {
						if (res.provider && res.provider.length) {
							for (let i = 0; i < res.provider.length; i++) {
								if (~filters.indexOf(res.provider[i])) {
									this.providerList.push({
										value: res.provider[i],
										image: '../../static/img/' + res.provider[i] + '.png'
									});
								}
							}
							this.hasProvider = true;
						}
					},
					fail: (err) => {
						console.error('获取服务供应商失败：' + JSON.stringify(err));
					}
				});
			},
			initPosition() {
				/**
				 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				 * 反向使用 top 进行定位，可以避免此问题。
				 */
				this.positionTop = uni.getSystemInfoSync().windowHeight - 120;
			},
			bindLogin() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				if (this.account.length < 5) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 5 个字符'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				/**
				 * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
				 */
				const data = {
					account: this.account,
					password: this.password
				};
				let heard = data.account + ":" + data.password;
				let basic = "";
				try {
					basic = Base64.encode(heard);
				} catch (e) {
					//TODO handle the exception
					console.log(JSON.stringify(e))
				}
				// #ifdef MP-WEIXIN||MP-ALIPAY||MP-DINGTALK
				basic = Base64.Base64.encode(heard);
				// #endif

				let header = {}
				if (this.code == "") {
					header = {
						"MAXAUTH": basic
					}
					this.postLogin(header);
				} else {
					// #ifndef MP-WEIXIN
					header = {
						"MAXAUTH": basic
					}
					this.postLogin(header);
					// #endif
					// #ifdef MP-WEIXIN
					uni.login({
						provider: 'weixin',
						success: (res) => {
							this.code = res.code;
							header = {
								"MAXAUTH": basic,
								"code": this.code
							}
							this.postLogin(header);
						}
					})
					// #endif
				}
			},
			postLogin(header) {
				console.log("登录中----")
				http.post('/mem/applogin/login', {
					PERSONID: this.account
				}, {
					header: header,
					// #ifndef MP-ALIPAY || APP-PLUS
					responseType: 'text',
					// #endif
					// #ifdef MP-ALIPAY
					timeout: 30000, // 仅支付宝小程序支持
					// #endif
				}).then(res => {

					console.log("返回值:=========" + JSON.stringify(res.data));

					if (res.data.META.SUCCESS) {
						let userName = res.data.DATA[0].DISPLAYNAME;

						http.setConfig(
							(config) => {
								config.header = {
									"MAXAUTH": header.MAXAUTH,
									"Content-Type": "application/json"
								}
								return config
							}
						);
						// #ifdef MP-ALIPAY
						
						http.get("/domain").then(ref => {
							uni.setStorage({
								key: "domain",
								data: ref.data.DATA.LIST,
								success: () => {
									console.log("钉钉   域缓存成功")
									this.toMain(userName, this.account.toUpperCase());
								}
							})
						}).catch(err => {
							console.log("域加载错误")
							console.log(JSON.stringify(err))
						});

						/* uni.request({
							url: "https://ser1.itrobot.site/maxrest/rest/domain",
							method: "GET",
							success: (res) => {
								console.log(res.data)
								uni.setStorage({
									key: "domain",
									data: res.data.DATA.LIST,
									success: () => {
										console.log("域缓存成功")
										this.toMain(userName, this.account.toUpperCase());
									}
								})
							},
							fail: (err) => {
								console.log(JSON.stringify(err))
							}
						}); */
						// #endif
						// #ifndef MP-ALIPAY
						http.get("/domain").then(ref => {
							uni.setStorage({
								key: "domain",
								data: ref.data.DATA.LIST,
								success: () => {
									console.log("域缓存成功")
									this.toMain(userName, this.account.toUpperCase());
								}
							})
						}).catch(err => {
							console.log("域加载错误")
							console.log(JSON.stringify(err))
						});
						// #endif

					} else {
						console.log("请求失败了：")
						uni.showToast({
							title: res.data.META.MESSAGE,
							icon: "none"
						})
					}
				}).catch(err => {
					uni.showToast({
						title: "请求出错:" + JSON.stringify(err),
						icon: "none"
					})
				})

			},
			oauth(value) {

				// #ifdef MP-WEIXIN
				console.log("微信订阅消息")
				uni.requestSubscribeMessage({
					tmplIds: ['SQHkPnWm9a6_mfZU4n2h2UGkhbnGzwupRGkFCVFv3tA'],
					success(res) {
						console.log(res.data);

					},
					fail(err) {
						console.log(JSON.stringify(err))
					}
				});
				// #endif

				uni.login({
					provider: value,
					success: (res) => {
						console.log(res);
						this.code = res.code;
						uni.showLoading({
							title: "登录中...",
							mask: true
						})
						this.$http.get('/wxlogin', {
							header: {
								"code": this.code
							},
						}).then(res => {
							console.log(res.data);
							if (res.data.META.SUCCESS) {
								let userName = res.data.DATA[0].DISPLAYNAME;
								let personid = res.data.DATA[0].PERSONID;
								this.$http.setConfig(
									(config) => {
										config.header = {
											"MAXAUTH": res.data.DATA[0].PASSWORD,
											"Content-Type": "application/json"
										}
										return config
									}
								);
								//域
								this.$http.get("/domain").then(ref => {
									uni.setStorage({
										key: "domain",
										data: ref.data.DATA.LIST,
										success: () => {
											console.log("域缓存成功")
											uni.hideLoading();
											this.toMain(userName, personid);
										}
									})
								});

							} else {
								uni.showToast({
									title: res.data.META.MESSAGE,
									icon: "none"
								})
							}
						}).catch(err => {
							console.log(JSON.stringify(err))
							this.btTitle = "绑定";
							uni.showToast({
								title: "暂未绑定系统用户请填写用户名密码后提交",
								icon: "none"
							})
						})

						/* uni.getUserInfo({
							provider: value,
							success: (infoRes) => {
					
								this.toMain(infoRes.userInfo.nickName);
							},
							fail() {
								uni.showToast({
									icon: 'none',
									title: '登陆失败'
								});
							}
						}); */
					},
					fail: (err) => {
						console.error('授权登录失败：' + JSON.stringify(err));
					}
				});
			},
			getUserInfo({
				detail
			}) {
				console.log(detail);
				if (detail.userInfo) {

					this.toMain(detail.userInfo.nickName);
				} else {
					uni.showToast({
						icon: 'none',
						title: '登陆失败'
					});
				}
			},
			toMain(userName, personid) {
				this.login(userName, personid);
				this.setPerson(personid);
				/**
				 * 强制登录时使用reLaunch方式跳转过来
				 * 返回首页也使用reLaunch方式
				 */
				// #ifdef MP-ALIPAY||MP-DINGTALK
				uni.setStorage({
					key: "state",
					data: {
						username: userName,
						personid: personid
					},
					success: () => {
						console.log("存成功了")
						uni.switchTab({
							url: '../main/main',
						})
					}
				})
				// #endif
				// #ifndef MP-ALIPAY||MP-DINGTALK
				uni.reLaunch({
					url: '../main/main',
				});
				// #endif


			}
		},
		onReady() {
			this.initPosition();
			this.initProvider();
			// #ifdef MP-WEIXIN
			this.isDevtools = uni.getSystemInfoSync().platform === 'devtools';
			// #endif
		},
		onLoad() {
			http = this.$http;
		}
	}
</script>

<style>
	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.action-row navigator {
		color: #007aff;
		padding: 0 10px;
	}

	.oauth-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.oauth-image {
		position: relative;
		width: 50px;
		height: 50px;
		border: 1px solid #dddddd;
		border-radius: 50px;
		margin: 0 20px;
		background-color: #ffffff;
	}

	.oauth-image image {
		width: 30px;
		height: 30px;
		margin: 10px;
	}

	.oauth-image button {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}
</style>
