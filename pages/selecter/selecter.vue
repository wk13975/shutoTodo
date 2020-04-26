<template>
	<view>
		<view style=" width: 750upx;margin-top:87upx; background-color: #efeff4;">
			<mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption">
				<view class="uni-list">
					<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list" :key="index">
						<view class="uni-media-list" @tap="click(item)">
							<view class="uni-media-list-body">
								<view class="uni-media-list-text-top"> {{item.DESCRIPTION}}</view>
								<view class="uni-media-list-text-bottom uni-ellipsis">位置编码: &emsp;&emsp;{{item.LOCATION}}</view>
							</view>
						</view>
					</view>
				</view>
			</mescroll-body>
		</view>
		<view class="mysearch">
			<uni-search-bar radius="100" @confirm="search" @input="input" @cancel="cancel" style="width: 750upx;" />
		</view>

	</view>
</template>

<script>
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'


	export default {
		mixins: [MescrollMixin],
		components: {
			uniSearchBar
		},
		data() {
			return {
				searchVal: '',
				page: 1,
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
				list:[]
			}
		},
		methods: {
			click(e) {			
				uni.setStorage({
					key:"local",
					data:e,
					success: () => {
						uni.navigateBack({
							delta:1
						})
					}
				})
								
				/* uni.redirectTo({
				    url:  "../defect/defect?location=" + e.LOCATION + "&descripiton ="+e.DESCRIPTION
				}); */
			},
			search(res) {
				
				this.upOption.page.num=1;
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
							"LOCATION": this.searchVal
						}
					}
				}
				
				this.$http.post("/mem/basic/local",data).then(res=>{
					console.log(res.data)
					if (res.data.META.SUCCESS) {
						if (this.page == 1) this.list = []; //如果是第一页需手动置空列表
						this.list = this.list.concat(res.data.DATA.LIST); //追加新数据
						let curPageLen = res.data.DATA.LIST.length;
						if(curPageLen==0){
							this.mescroll.endUpScroll(true);
						}
						let hasNext = res.data.DATA.ISLAST;
						if(!hasNext){
							this.upOption.noMoreSize=this.page*10;
						}else{
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
				}).catch(err=>console.log(err.toString()))
				
			},
			downCallback() {
				this.page = 1;
				this.upOption.page.num=1;
				this.request();
			},
			/*上拉加载的回调*/
			upCallback(page) {
				this.page = page.num; // 页码, 默认从1开始
				this.request()
			}
		},

		onHide() {

		},
		onLoad() {

		},
		onNavigationBarButtonTap(btn) {
			console.log(btn.index)
			this.list.reverse();
		},
	}
</script>

<style>

	.loading-more {
		align-items: center;
		justify-content: center;
		padding-top: 10px;
		padding-bottom: 10px;
		text-align: center;
	}
</style>
