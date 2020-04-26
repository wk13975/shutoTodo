<template>
	<view style="height: 100%;width: 100%;">
		<view v-if="list.length==0" style="margin: auto; line-height: 500upx;font-size: 40upx;text-align: center;">
			您当前没有待办数据
		</view>
		<!-- #ifdef APP-PLUS -->
		<list>
			<cell class="uni-list-cell" v-for="(item,index) in list" :key="item.id">
				<view class="uni-media-list" @tap="cilck(item)">
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">开始时间: {{item.STARTDATE}}</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{item.DESCRIPTION}}</view>
					</view>
				</view>
			</cell>
		</list>
		<!-- #endif -->
		<!-- #ifndef APP-PLUS -->
		<scroll-view scroll-y="true" style="width: 100%;">
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list" :key="index">
					<view class="uni-media-list" @tap="cilck(item)">
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">开始时间: {{item.STARTDATE}}</view>
							<view class="uni-media-list-text-bottom uni-ellipsis">{{item.DESCRIPTION}}</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- #endif -->


	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		computed: mapState(['todoList', 'userName', 'personid', 'header']),
		data() {
			return {
				"list": []
			}
		},
		methods: {

			...mapMutations(['setTodo']),

			cilck(item) {
				/* 	if (item.id < 5000) {
						uni.showToast({
							title: "暂未开放该应用",
							icon: "none"
						})

						return
					} */
				//uni.hideToast();
				uni.navigateTo({
					url: "../defect/defect?id=" + item.OWNERID.toString()
				})
			}
		},
		onHide() {

		},
		onShow() {
			console.log("onShow")
			if (this.personid == null || this.personid == '') {
				return
			}
			this.list = this.todoList;
		},
		onLoad() {
			console.log("进待办了")
			if (this.personid == null || this.personid == '') {
				return
			}
			this.list = this.todoList;
			//访问接口
			/* uni.showLoading({
				title:"加载中..."
			})
			uni.request({
				url: "https://unidemo.dcloud.net.cn/api/news",
				method: "GET",
				success: res =>{
					console.log(res)
				},
				complete() {
					uni.hideLoading()
				}
			}) */
		},
		onNavigationBarButtonTap(btn) {
			console.log(btn.index)
			this.list.reverse();
		},
		onPullDownRefresh() {
			if (this.personid == null || this.personid == '') {
				uni.stopPullDownRefresh();
				return
			}
			this.$http.post("/mem/workflow/getdb", {
				"PERSONID": this.personid
			}, ).then(res => {

				if (res.data.META.SUCCESS) {
					this.setTodo(res.data.DATA);
					uni.stopPullDownRefresh();
					// #ifndef MP-ALIPAY
					uni.setTabBarBadge({
						index: 1,
						text: res.data.DATA.length.toString()
					});
					// #endif
				}
			}).catch(err => {
				uni.stopPullDownRefresh();
				uni.showToast({
					title: JSON.stringify(err),
					icon: "none"
				})
			})

		}
	}
</script>

<style>

</style>
