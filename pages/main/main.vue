<template>
	<view style="height: 100%;">
		<scroll-view scroll-y="true">
			<view class="mycontent">
				<view class="swiper">
					<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
					 :duration="duration">
				
						<swiper-item>
							<image class="myimage" src="https://wx4.sinaimg.cn/mw690/7fe7fe67gy1gduh4t4z42j20ol0ajkay.jpg" mode="scaleToFill"></image>
						</swiper-item>
						<swiper-item>
							<image class="myimage" src="https://wx3.sinaimg.cn/mw690/7fe7fe67gy1gduh4t5shhj20oc0ahn9w.jpg" mode="scaleToFill"></image>
						</swiper-item>
						<swiper-item>
							<image class="myimage" src="https://wx4.sinaimg.cn/mw690/7fe7fe67gy1gduh4t9h0sj20wm0br1kx.jpg" mode="scaleToFill"></image>
						</swiper-item>

					</swiper>
				</view>
				<view class="box">
					<cmd-notice-bar scrollable :text="notice"></cmd-notice-bar>
				</view>

				<!-- <view class="box" >
				<uni-card :is-shadow="true" title="📢 您好" :extra="userName" :is-full="true">
					<view class="ul">
						<view>这是一个待办功能的演示app</view>
						<view>在 “待办” 中，下拉可刷新页面，点击对应条目可以跳转 “表单示例页面”</view>
					</view>
				</uni-card>
			</view> -->
			</view>
			<view class="example-body">
				<view class="example-title">应用管理</view>
				<uni-grid :column="3" :show-border="false" :square="false" @change="change">
					<!-- <uni-grid-item marker="dot" :hor="40" :ver="-45">
					<image class="image" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582696467659&di=879b6350cf4a3e929f02286ac1df4c32&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F33%2F43%2F5811229cdfc3f_610.jpg"
					 mode="aspectFill" /> <text class="text">缺陷</text>
				</uni-grid-item> -->
					<uni-grid-item marker="dot" :hor="40" :ver="-45">
						<view class="icon">
							🆖
						</view>
						<text class="text">缺陷</text>
					</uni-grid-item>
					<uni-grid-item>
						<view class="icon">
							📈
						</view>
						<text class="text">设备盘点</text>
					</uni-grid-item>
					<uni-grid-item>
						<view class="icon">
							🛃
						</view>
						<text class="text">设备巡检</text>
					</uni-grid-item>
					<uni-grid-item>
						<view class="icon">
							⏳
						</view>
						<text class="text">设备点检</text>
					</uni-grid-item>
					<uni-grid-item v-if="fill" marker="dot" :hor="40" :ver="-45">
						<view class="icon">
							💚
						</view>
						<text class="text">员工健康</text>
					</uni-grid-item>
					<uni-grid-item v-else>
						<view class="icon">
							💚
						</view>
						<text class="text">员工健康</text>
					</uni-grid-item>
				</uni-grid>

			</view>
			<view class="chart-body">
				<view class="example-title">产能数据</view>
				<view class="qiun-charts">
					<!--#ifdef MP-ALIPAY||MP-DINGTALK -->
					<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio"
					 :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
					<!--#endif-->
					<!--#ifndef MP-ALIPAY||MP-DINGTALK -->
					<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA" @touchmove="moveLineA"
					 @touchend="touchEndLineA"></canvas>
					<!--#endif-->
				</view>

			</view>

			<view class="chart-body">
				<view class="example-title">复工情况</view>
				<view class="qiun-charts">
					<!--#ifdef MP-ALIPAY||MP-DINGTALK -->
					<canvas canvas-id="canvasRing" id="canvasRing" class="charts" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"
					 @touchstart="touchRing"></canvas>
					<!--#endif-->
					<!--#ifndef MP-ALIPAY||MP-DINGTALK -->
					<canvas canvas-id="canvasRing" id="canvasRing" class="charts" @touchstart="touchRing"></canvas>
					<!--#endif-->
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import uCharts from '@/components/u-charts/u-charts.js';
	import requestUtil from "common/request.js";
	import {
		isJSON
	} from '@/common/checker.js';
	var _self;

	var canvaRing = null;
	var canvaLineA = null;
	var lastMoveTime = null; //最后执行移动的时间戳

	import uniGrid from '@/components/uni-grid/uni-grid.vue'
	import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue'
	import uniNoticeBar from "@/components/uni-notice-bar/uni-notice-bar.vue";
	import cmdNoticeBar from "@/components/cmd-notice-bar/cmd-notice-bar.vue"
	import zyGrid from "@/components/zy-grid/zy-grid.vue"


	var isload = false;


	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 4000,
				duration: 1500,
				notice: "",
				gridList: [{
						name: "缺陷",
						icon: "🆖"
					},
					{
						name: "员工健康",
						icon: "💚",
					}
				],
				//charts
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				textarea: '',
				Interactive: '', //交互显示的数据
				chartData: {
					categories: ['2019-8', '2019-9', '2019-10', '2019-11', '2019-12', '2020-1', '2020-2'],
					series: [{
						name: '去年同期产能',
						data: [182, 180, 172, 179, 182, 181, 175],
						color: '#7d7d7d'
					}, {
						name: '额定产能',
						data: [180, 180, 180, 180, 180, 180, 175]
					}, {
						name: '实际产出',
						data: [185, 185, 165, 190, 200, 190, 180]
					}]
				},
				ringData: {
					"series": [{
						"name": "远程办公",
						"data": 19
					}, {
						"name": "正常复工",
						"data": 61
					}, {
						"name": "隔离",
						"data": 3
					}, {
						"name": "确诊",
						"data": 1
					}]
				}
			}
		},
		components: {
			uniGrid,
			uniGridItem,
			uniNoticeBar,
			cmdNoticeBar,
			zyGrid
		},
		computed: mapState(['forcedLogin', 'hasLogin', 'userName', 'personid', "fill"]),
		methods: {
			...mapMutations(['setTodo', 'filled']),
			imageError(e) {
				console.log(JSON.stringify(e.detail));
			},
			imageLoad(e) {
				console.log(JSON.stringify(e.detail));
			},
			change(e) {
				let index = e.detail.index;
				switch (index) {
					case 0:
						uni.navigateTo({
							url: "../defect/defectList"
						});
						break;
					case 4:
						if (this.fill) {
							uni.navigateTo({
								url: "../health/health"
							});
						} else {
							uni.showToast({
								title: "您当日已填写",
								icon: "success"
							})
						}
						break;
					default:
						uni.showToast({
							title: "功能暂未开放",
							icon: "none"
						})
						break;
				}

			},
			getServerData() {
				let LineA = {
					categories: [],
					series: []
				};
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				LineA.categories = this.chartData.categories;
				LineA.series = this.chartData.series;

				//第二根线为虚线的设置
				LineA.series[1].lineType = 'dash';
				LineA.series[1].dashLength = 10;


				//柱状图
				let Ring = {
					series: []
				};
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				Ring.series = this.ringData.series;
				//自定义文案示例，需设置format字段
				for (let i = 0; i < Ring.series.length; i++) {
					Ring.series[i].format = () => {
						return Ring.series[i].name + Ring.series[i].data
					};
				}
				_self.showRing("canvasRing", Ring);
				_self.showLineA("canvasLineA", LineA);
			},
			showRing(canvasId, chartData) {
				canvaRing = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'ring',
					fontSize: 11,
					padding: [5, 5, 5, 5],
					legend: {
						show: true,
						position: 'right',
						float: 'center',
						itemGap: 10,
						padding: 5,
						lineHeight: 26,
						margin: 5,
						//backgroundColor:'rgba(41,198,90,0.2)',
						//borderColor :'rgba(41,198,90,0.5)',
						borderWidth: 1
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					disablePieStroke: true,
					dataLabel: true,
					subtitle: {
						name: (80 / 84 * 100).toFixed(1) + '%',
						color: '#000',
						fontSize: 22 * _self.pixelRatio,
					},
					title: {
						name: '复工率',
						color: '#4f4f4f',
						fontSize: 16 * _self.pixelRatio,
					},
					extra: {
						pie: {
							offsetAngle: 0,
							ringWidth: 40 * _self.pixelRatio,
							labelWidth: 15
						}
					},
				});
			},
			touchRing(e) {
				canvaRing.touchLegend(e, {
					animation: false
				});
				canvaRing.showToolTip(e, {
					format: function(item) {
						return item.name + ':' + item.data
					}
				});
			},
			showLineA(canvasId, chartData) {
				canvaLineA = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					colors: ['#facc14', '#f04864', '#8543e0', '#90ed7d'],
					fontSize: 11,
					padding: [15, 15, 0, 15],
					legend: {
						show: true,
						padding: 5,
						lineHeight: 11,
						margin: 0,
					},
					dataLabel: false,
					dataPointShape: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					xAxis: {
						type: 'grid',
						gridColor: '#CCCCCC',
						gridType: 'dash',
						dashLength: 8,
						//disableGrid:true
					},
					yAxis: {
						gridType: 'dash',
						gridColor: '#CCCCCC',
						dashLength: 8,
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						line: {
							type: 'straight'
						}
					}
				});

			},
			touchLineA(e) {
				lastMoveTime = Date.now();
			},
			moveLineA(e) {
				let currMoveTime = Date.now();
				let duration = currMoveTime - lastMoveTime;
				if (duration < Math.floor(1000 / 60)) return; //每秒60帧
				lastMoveTime = currMoveTime;

				let currIndex = canvaLineA.getCurrentDataIndex(e);
				if (currIndex > -1 && currIndex < canvaLineA.opts.categories.length) {
					let riqi = canvaLineA.opts.categories[currIndex];
					let leibie = canvaLineA.opts.series[0].name;
					let shuju = canvaLineA.opts.series[0].data[currIndex];
					this.Interactive = leibie + ':' + riqi + '-' + shuju + '元';
				}
				canvaLineA.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			touchEndLineA(e) {
				let currIndex = canvaLineA.getCurrentDataIndex(e);
				if (currIndex > -1 && currIndex < canvaLineA.opts.categories.length) {
					let riqi = canvaLineA.opts.categories[currIndex];
					let leibie = canvaLineA.opts.series[0].name;
					let shuju = canvaLineA.opts.series[0].data[currIndex];
					this.Interactive = leibie + ':' + riqi + '-' + shuju + '元';
				}
				canvaLineA.touchLegend(e);
				canvaLineA.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			changeData() {
				if (isJSON(_self.textarea)) {
					let newdata = JSON.parse(_self.textarea);
					canvaLineA.updateData({
						series: newdata.series,
						categories: newdata.categories
					});
				} else {
					uni.showToast({
						title: '数据格式错误',
						image: '../../../static/images/alert-warning.png'
					})
				}
			}
		},
		onShow() {
			// #ifdef MP-ALIPAY||MP-DINGTALK

			if (this.hasLogin) {
				this.notice = '📢 您好！' + this.userName + ' 这是一个待办功能的演示app， 在 “待办” 中，部分平台下拉可刷新页面，点击对应条目可以跳转 “表单示例页面”';
				if (isload) return
				//请求待办
				uni.showLoading({
					title: "加载中..."
				})
				let data = {
					PERSONID: this.personid
				}

				this.$http.post("/mem/workflow/getdb", data).then(res => {
					if (res.data.META.SUCCESS) {
						this.setTodo(res.data.DATA);
						isload = true;
					} else {
						uni.showToast({
							title: res.data.META.MESSAGE,
							icon: "none"
						})
					}
					uni.hideLoading()
				}).catch(err => {
					console.log(JSON.stringify(err));
					uni.showToast({
						title: "请求出错:" + JSON.stringify(err),
						icon: "none"
					})
				})

				this.$http.get('/health').then(res => {
					if (res.data.META.SUCCESS) {
						this.filled(res.data.DATA)
					} else {
						uni.showToast({
							title: res.data.META.MESSAGE,
							icon: "none"
						})
					}
				}).catch(err => {
					console.log(JSON.stringify(err))
					uni.showToast({
						title: "请求出错:" + JSON.stringify(err),
						icon: "none"
					})
				})

			} 
			// #endif
			if(!this.hasLogin) {
				uni.showModal({
					title: '未登录',
					content: '体验待办数据，需要登录后才能继续',
					/**
					 * 如果需要强制登录，不显示取消按钮
					 */
					showCancel: !this.forcedLogin,
					success: (res) => {
						if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../login/login'
								});
							} else {
								uni.navigateTo({
									url: '../login/login'
								});
							}
						}
					}
				});
			}
		},
		onLoad() {
			console.log("onLoad")
			/*
			 // #ifdef MP-ALIPAY||MP-DINGTALK
			uni.getStorage({
				key: "state",
				success: (res) => {
					console.log(JSON.stringify(res))
				}
			})
			// #endif 
			*/

			console.log("personid:" + this.personid);

			_self = this;

			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function(res) {
					if (res.pixelRatio > 1) {
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio = 1;
					}
				}
			});
			//#endif
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(330);
			this.getServerData();

			//#ifndef MP-ALIPAY
			if (!this.hasLogin) {
				uni.showModal({
					title: '未登录',
					content: '体验待办数据，需要登录后才能继续',
					/**
					 * 如果需要强制登录，不显示取消按钮
					 */
					showCancel: !this.forcedLogin,
					success: (res) => {
						if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../login/login'
								});
							} else {
								uni.navigateTo({
									url: '../login/login'
								});
							}
						}
					}
				});
			} else {
				this.notice = '📢 您好！' + this.userName + ' 这是一个待办功能的演示app， 在 “待办” 中，下拉可刷新页面，点击对应条目可以跳转 “表单示例页面”';
				//请求待办
				uni.showLoading({
					title: "加载中..."
				})

				this.$http.post("/mem/workflow/getdb", {
					"PERSONID": this.personid
				}).then(res => {
					if (res.data.META.SUCCESS) {
						this.setTodo(res.data.DATA);
						// #ifndef MP-ALIPAY
						uni.setTabBarBadge({
							index: 1,
							text: res.data.DATA.length.toString()
						});
						// #endif
					} else {
						uni.showToast({
							title: res.data.META.MESSAGE,
							icon: "none"
						})
					}
					uni.hideLoading()
				}).catch(err => {
					uni.showToast({
						title: "请求出错:" + JSON.stringify(err),
						icon: "none"
					})
				})

				this.$http.get('/health').then(res => {
					if (res.data.META.SUCCESS) {
						this.filled(res.data.DATA)
					} else {
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
			}
			//#endif
		}
	}
</script>

<style>
	.mycontent {
		height: 322upx;
		padding: 0;
		background-color: #efeff4;
	}

	.title {
		color: #8f8f94;
		margin-top: 15px;
	}

	text {
		margin-top: 25px;
	}

	.myimage {
		width: 750upx;
		height: 260upx;
		display: block;
	}

	.swiper {
		width: 100%;
		height: 260upx;
	}

	.box {
		width: 750upx;
	}

	.example-body {
		/* padding: 10upx; */
		background: #fff;
		width: 100%;
		/* margin-top: 10upx; */
		/* margin-right: 10upx; */
		/* margin-left: -20upx; */
		min-height: 210upx;
		/* height: 419upx; */
	}

	.chart-body {
		background: #fff;
		/* 	margin-top: 10upx;

		margin-left: -20upx; */
		/* height: 435upx; */
	}

	.image {
		width: 50upx;
		height: 50upx;
	}

	.icon {
		width: 62upx;
		height: 52upx;
		font-size: 50upx;
		padding-bottom: 20upx;
		margin: auto;
	}

	.text {
		font-size: 26upx;
		padding-top: 5upx;
		margin: auto;
	}

	.example-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32upx;
		color: #464e52;
		padding: 20upx 30upx 20upx 50upx;
		margin-top: 6upx;

		position: relative;
		background-color: #fdfdfd;
		border-bottom: 1px #f5f5f5 solid
	}

	.example-title__after {
		position: relative;
		color: #031e3c
	}

	.example-title:after {
		content: '';
		position: absolute;
		left: 30upx;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 6upx;
		height: 32upx;
		background-color: #ccc
	}

	.example .example-title {
		margin: 40upx 0
	}

	.qiun-charts {
		width: 750upx;
		height: 330upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height: 330upx;
		background-color: #FFFFFF;
	}
</style>
