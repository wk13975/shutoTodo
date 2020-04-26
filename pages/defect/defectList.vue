<template>
	<view>
		<view style=" width: 750upx;margin-top:87upx; background-color: #efeff4;">
			<mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption">
				<!-- <view> @init="mescrollInit" @down="downCallback" @up="upCallback"为固定值,不可删改(与mescroll-mixins保持一致) </view> -->
				<!-- 			<view> 字节跳动小程序 ref="mescrollRef" 必须配置 </view>
				<view> 此处支持写入原生组件 </view> -->
				<view class="u-list" hover-class="uni-list-cell-hover" v-for="(item,index) in list" :key="index">
					<view class="uni-media-list" @tap="click(item)">
						<view>
							<view class="text-top uni-ellipsis">{{item.DESCRIPTION}}</view>
							<!-- <view class="uni-media-list-text">开始时间: {{item.STARTDATE}}</view> -->
							<view class="uni-flex uni-row">
								<view class="uni-flex uni-column" style="-webkit-flex: 1;flex: 1;-webkit-justify-content: space-around;justify-content: space-around;">
									<view class="uni-flex uni-row" style="width: 600upx;">
										<view class="text  uni-ellipsis" style="-webkit-flex: 1;flex: 1;">单号: {{item.WONUM}}</view>
										<view class="text uni-ellipsis" style="-webkit-flex: 1;flex: 1;">部门: {{item.DEPARTMENT_DESCRIPTION}}</view>
									</view>
									<view class="uni-flex uni-row" style="width: 600upx;">
										<view class="text  uni-ellipsis" style="-webkit-flex: 1;flex: 1;">状态: {{item.STATUS}}</view>
										<view class="text uni-ellipsis" style="-webkit-flex: 1;flex: 1;">缺陷类别: {{item.SRTYPE}}</view>
									</view>
									<!-- <view class="text uni-ellipsis">
									任务时间: {{item.STARTDATE}}
								</view> -->
								</view>
								<uni-icons type="forward" size="30" style="color: #84888d;"></uni-icons>
							</view>
						</view>
					</view>
				</view>
			</mescroll-body>
			<!-- <scroll-view scroll-y="true" @scrolltolower="loadMore">
				<view class="u-list" hover-class="uni-list-cell-hover" v-for="(item,index) in list" :key="index">
					<view class="uni-media-list" @tap="click(item)">
						<view>
							<view class="text-top uni-ellipsis">{{item.DESCRIPTION}}</view>
				
							<view class="uni-flex uni-row">
								<view class="uni-flex uni-column" style="-webkit-flex: 1;flex: 1;-webkit-justify-content: space-around;justify-content: space-around;">
									<view class="uni-flex uni-row" style="width: 600upx;">
										<view class="text  uni-ellipsis" style="-webkit-flex: 1;flex: 1;">单号: {{item.WONUM}}</view>
										<view class="text uni-ellipsis" style="-webkit-flex: 1;flex: 1;">部门: {{item.DEPARTMENT_DESCRIPTION}}</view>
									</view>
									<view class="uni-flex uni-row" style="width: 600upx;">
										<view class="text  uni-ellipsis" style="-webkit-flex: 1;flex: 1;">状态: {{item.STATUS}}</view>
										<view class="text uni-ellipsis" style="-webkit-flex: 1;flex: 1;">缺陷类别: {{item.SRTYPE}}</view>
									</view>
								
								</view>
								<uni-icons type="forward" size="30" style="color: #84888d;"></uni-icons>
							</view>
						</view>
					</view>
				</view>
				<view class="loading-more" v-if="tab.isLoading || list.length > 9">
					<text class="loading-more-text">加载更多...</text>
				</view>
			</scroll-view> -->
		</view>
		<view class="mysearch">
			<uni-search-bar radius="100" @confirm="search" @input="input" @cancel="cancel" style="width: 750upx;" />
		</view>

	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	export default {
		mixins: [MescrollMixin],
		data() {
			return {
				searchVal: '',
				isLoading: false,
				downOption: {
					use: true, // 是否启用下拉刷新; 默认true
					auto: true, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
					native: false // 启用系统自带的下拉组件,默认false;仅mescroll-body生效,mescroll-uni无效
					/* (native: true, 则需在pages.json中配置 "enablePullDownRefresh": true) */
				},
				// 上拉加载的常用配置
				upOption: {
					use: true, // 是否启用上拉加载; 默认true
					auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
					page: {
						num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
						size: 10 // 每页数据的数量,默认10
					},
					noMoreSize: 100, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
					empty: {
						tip: '暂无相关数据'
					}
				},
				list: [{
						"STARTDATE": "2019-12-31 11:01",
						"DESCRIPTION": "办公楼大厅左侧过道灯不亮，请及时处理",
						"DEPARTMENT_DESCRIPTION": "热电分公司",
						"STATUS": "缺陷待接收",
						"WORKORDERID": 12804,
						"WONUM": '5117',
						"SRNUM": "2020-02-RDC-0003",
						"SRTYPE": "三类缺陷"
					},
					{
						"STARTDATE": "2020-01-14 11:01",
						"DESCRIPTION": "财务室打印机无法开机",
						"DEPARTMENT_DESCRIPTION": "热电分公司",
						"STATUS": "缺陷待接收",
						"WORKORDERID": 12804,
						"WONUM": '5115',
						"SRNUM": "2020-02-RDC-0003",
						"SRTYPE": "三类缺陷"
					},
					{
						"STARTDATE": "2020-01-15 11:01",
						"DESCRIPTION": "出货仓C3码头2号闸门无法关闭",
						"DEPARTMENT_DESCRIPTION": "热电分公司",
						"STATUS": "缺陷待接收",
						"WORKORDERID": 12804,
						"WONUM": '5111',
						"SRNUM": "2020-02-RDC-0003",
						"SRTYPE": "三类缺陷"
					}
				]
			}
		},
		computed: mapState(['forcedLogin', 'hasLogin', 'userName', 'personid']),
		components: {
			uniSearchBar,
			uniIcon
		},
		onLoad() {
			return;
			if (this.hasLogin) {

				uni.showLoading({
					title: "加载中..."
				})
				this.$http.post("/mem/sr/getlist", {
					"PERSONID": this.personid,
					"PAGE": 1,
					"PAGECOUNT": 10
				}).then(res => {
					console.log(res.data);
					if (res.data.META.SUCCESS) {
						console.log("加载成功")
						this.list = res.data.DATA.LIST
					} else {
						console.log("遇到错误")
						this.mescroll.endErr()
						this.mescroll.endUpScroll(true)
						uni.hideLoading()
						uni.showToast({
							title: res.data.META.MESSAGE,
							icon: "none"
						})

					}
				}).catch(err => {
					console.log("遇到错误" + err.toString())
					this.mescroll.endErr()
					this.mescroll.endUpScroll(true)
				})
				/* uni.request({
					url: "https://ser1.itrobot.site/maxrest/rest/mem/sr/getlist",
					method: "POST",
					header: {
						"MAXAUTH": this.header
					},
					data: {
						"PERSONID": this.personid,
						"PAGE": 1,
						"PAGECOUNT": 10
					},
					success: (res) => {
						console.log(res.data);
						if (res.data.META.SUCCESS) {
							console.log("加载成功")
							this.list = res.data.DATA.LIST
						} else {
							console.log("遇到错误")
							this.mescroll.endErr()
							this.mescroll.endUpScroll(true)
							uni.showToast({
								title: res.data.META.MESSAGE,
								icon: "none"
							})
						
						}

					},
					fail:() =>{
						console.log("遇到错误")
						this.mescroll.endErr()
						this.mescroll.endUpScroll(true)
					},
					complete() {
						uni.hideLoading()
					}
				}); */

			}
		},
		methods: {
			click(e) {
				uni.navigateTo({
					url: 'defect?id=' + e.WORKORDERID.toString()
				})
			},
			search(res) {

				this.upOption.page.num = 1;
				this.page = 1;
				this.request();
			},
			loadMore: function(e) {
				this.page++
				console.log(this.page)
				this.request();
			},
			input(res) {
				this.searchVal = res.value
			},
			cancel(res) {
				uni.showModal({
					content: '点击取消，输入值为：' + res.value,
					showCancel: false
				})
			},
			request() {
				let data;
				if (this.searchVal == "" || this.searchVal == null) {
					data = {
						"PERSONID": this.personid,
						"PAGE": this.page,
						"PAGECOUNT": 10
					}
				} else {
					data = {
						"PERSONID": this.personid,
						"PAGE": this.page,
						"PAGECOUNT": 10,
						"ISFUZZY": true,
						"PARAMS": {
							"DESCRIPTION": this.searchVal,
							"DEPARTMENT.DESCRIPTION": this.searchVal,
							"WONUM": this.searchVal
						}
					}
				}
				this.$http.post("/mem/sr/getlist", data).then(res => {
					console.log(res.data);
					if (res.data.META.SUCCESS) {
						if (this.page == 1) this.list = []; //如果是第一页需手动置空列表
						this.list = this.list.concat(res.data.DATA.LIST); //追加新数据
						let curPageLen = res.data.DATA.LIST.length;
						if (curPageLen == 0) {
							this.mescroll.endUpScroll(true);
						}
						let hasNext = res.data.DATA.ISLAST;
						if (!hasNext) {
							this.upOption.noMoreSize = this.page * 10;
						} else {
							this.mescroll.endUpScroll(true);
						}
						//if (this.page == 1) {
						this.mescroll.endSuccess()

						//this.mescroll.endSuccess(curPageLen, hasNext);
						uni.hideLoading()
					} else {
						this.mescroll.endErr()
						this.mescroll.endUpScroll(true)
						uni.showToast({
							title: res.data.META.MESSAGE,
							icon: "none"
						})
					}

				}).catch(err => {
					console.log("遇到错误" + err.toString())
					this.mescroll.endErr()
					this.mescroll.endUpScroll(true)
					uni.hideLoading()
				})


/* 
				uni.request({
					url: "https://ser1.itrobot.site/maxrest/rest/mem/sr/getlist",
					method: "POST",
					header: {
						"MAXAUTH": this.header
					},
					data: data,
					success: (res) => {
						console.log(res.data);
						if (res.data.META.SUCCESS) {
							if (this.page == 1) this.list = []; //如果是第一页需手动置空列表
							this.list = this.list.concat(res.data.DATA.LIST); //追加新数据
							let curPageLen = res.data.DATA.LIST.length;
							if (curPageLen == 0) {
								this.mescroll.endUpScroll(true);
							}
							let hasNext = res.data.DATA.ISLAST;
							if (!hasNext) {
								this.upOption.noMoreSize = this.page * 10;
							} else {
								this.mescroll.endUpScroll(true);
							}
							//if (this.page == 1) {
							this.mescroll.endSuccess()

							//this.mescroll.endSuccess(curPageLen, hasNext);

						} else {
							this.mescroll.endErr()
							this.mescroll.endUpScroll(true)
							uni.showToast({
								title: res.data.META.MESSAGE,
								icon: "none"
							})
						}

					},
					fail: () => {
						//  请求失败,隐藏加载状态
						this.mescroll.endErr()
					},
					complete() {
						uni.hideLoading()
					}
				}); */
			},
			downCallback() {
				this.page = 1;
				this.upOption.page.num = 1;
				this.request();
			},
			/*上拉加载的回调*/
			upCallback(page) {
				this.page = page.num; // 页码, 默认从1开始
				this.request()
				/* 
				uni.request({
					url: 'xxxx?pageNum=' + pageNum + '&pageSize=' + pageSize,
					success: (data) => {
						// 接口返回的当前页数据列表 (数组)
						let curPageData = data.xxx;
						// 接口返回的当前页数据长度 (如列表有26个数据,当前页返回8个,则curPageLen=8)
						let curPageLen = curPageData.length;
						// 接口返回的总页数 (如列表有26个数据,每页10条,共3页; 则totalPage=3)
						let totalPage = data.xxx;
						// 接口返回的总数据量(如列表有26个数据,每页10条,共3页; 则totalSize=26)
						let totalSize = data.xxx;
						// 接口返回的是否有下一页 (true/false)
						let hasNext = data.xxx;

						//设置列表数据
						if (this.mescroll.num == 1) this.dataList = []; //如果是第一页需手动置空列表
						this.dataList = this.dataList.concat(curPageData); //追加新数据

						this.mescroll.endSuccess(curPageLen, hasNext); 

						//方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.
						//如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据
						//如果传了hasNext,则翻到第二页即可显示无更多数据.
						//this.mescroll.endSuccess(curPageLen);

						// 如果数据较复杂,可等到渲染完成之后再隐藏下拉加载状态: 如
						this.$nextTick(() => {
							this.mescroll.endSuccess(curPageLen)
						})

						//curPageLen必传的原因:

						// 提示: 您无需额外维护页码和判断显示空布局,mescroll已自动处理好.
						// 当您发现结果和预期不一样时, 建议再认真检查以上参数是否传正确
					},
					fail: () => {
						//  请求失败,隐藏加载状态
						this.mescroll.endErr()
					}
				}) */
			}
		}
	}
</script>

<style>

	.text-top {
		color: #007AFF;
		font-size: 30;
		font-weight: 600;
		width: 680upx;
		padding: 10upx 20upx 10upx 20upx;
		margin-left: -20upx;
		position: relative;
		background-color: #fdfdfd;
		border-bottom: 1px #f5f5f5 solid
	}

	.uni-flex {
		width: 690upx;
	}

	.uni-media-list {
		padding: 10upx 30upx 10upx;
		margin-bottom: 10upx;
		background-color: #FFFFFF;
	}

	.loading-more {
		align-items: center;
		justify-content: center;
		padding-top: 10px;
		padding-bottom: 10px;
		text-align: center;
	}

	.loading-more-text {
		font-size: 28upx;
		color: #999;
	}
</style>
