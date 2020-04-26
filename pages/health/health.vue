<template>
	<view>
		<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583123321044&di=412fd86878c53dfcb208cda03c2775c7&imgtype=0&src=http%3A%2F%2Fx0.ifengimg.com%2Fres%2F2020%2FCE84B15F50B3143E2E33FE8B0FFAE3818812F6E1_size55_w900_h383.jpeg"
		 mode="widthFix" style="width: 750upx;"></image>
		<view class="mycontent">
			<view class="uni-padding-wrap uni-common-mt">
				<view class="uni-h3">
					每日健康打卡
				</view>
				<view style="width: 670upx;height: 1upx;background-color: #999999;"></view>
				<text style="color: #676767;">每天健康打卡报平安，请填写今日健康打卡。所有信息仅用于组织了解疫情，不会泄露作他用。</text>
				<view class="uni-h5">
					日期：{{date.getMonth()+1}}月{{date.getDate()}}日 星期{{"日一二三四五六".charAt(new Date().getDay())}}
				</view>
				<view class="uni-h5">发起人：Jack马</view>
				<form @submit="formSubmit" @reset="formReset">
					<view class="uni-form-item uni-column">
						<view class="uni-flex uni-row">
							<view class="uni-h4">1.目前健康状况 </view>
							<view class="title">
								<uni-badge text="单选" type="primary"></uni-badge>
							</view>
						</view>
						<radio-group name="HEALTH">
							<label class="uni-list-cell uni-list-cell-pd">
								<view>
									<radio value="0" :checked="health==0" />
								</view>
								<view>健康</view>
							</label>
							<label class="uni-list-cell uni-list-cell-pd">
								<radio value="1" :checked="health==1" />
								<view>有发烧，咳嗽等症状</view>
							</label>
							<label class="uni-list-cell uni-list-cell-pd">
								<view>
									<radio value="2" :checked="health==2" />
								</view>
								<view>其他</view>
							</label>
						</radio-group>
					</view>
					<!-- 	<view class="uni-form-item uni-column">
						<view class="uni-h4">2.目前所在城市 </view>
					
						<view class="uni-form-item">
							<view class="uni-list-cell">
								<view class="uni-list-cell uni-list-cell-db">
									<picker style="width: 670upx;" mode="multiSelector" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray" name="city">
										<view class="uni-input" style=" background-color: #efeff4;">{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}</view>
									</picker>
								</view>
							</view>
						</view>
				
					</view> -->
					<view class="uni-form-item uni-column">
						<view class="uni-h4">2.目前所在城市 </view>

						<view class="uni-list-cell">
							<label class="uni-list-cell uni-list-cell-pd" @click="location">
								<uni-icons type="location" color="green"></uni-icons> <input style="width: 600rpx;padding-left: 10rpx;" name="CITY"
								 disabled="true" :value="nowCity" />
							</label>
						</view>

					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-h4">3.自2020年1月1日起,是否在湖北停留或路过,或解除来自湖北的人员
							<uni-badge text="单选" type="primary" style="margin-left: 10upx;"></uni-badge>
						</view>
						<radio-group name="BEENTOHUBEI">
							<label class="uni-list-cell uni-list-cell-pd">
								<view>
									<radio value="false" :checked="!beenToHubei" />
								</view>
								<view>否</view>
							</label>
							<label class="uni-list-cell uni-list-cell-pd">
								<radio value="true" :checked="beenToHubei" />
								<view>是</view>
							</label>
						</radio-group>
					</view>
					<view class="uni-form-item uni-column">
						<view class="uni-h4">4.是否接触过疑似或确诊的新型肺炎患者
							<uni-badge text="单选" type="primary" style="margin-left: 10upx;"></uni-badge>
						</view>
						<radio-group name="BEENNCT">
							<label class="uni-list-cell uni-list-cell-pd">
								<view>
									<radio value="false" :checked="!beenNCT" />
								</view>
								<view>否</view>
							</label>
							<label class="uni-list-cell uni-list-cell-pd">
								<radio value="true" :checked="beenNCT" />
								<view>是</view>
							</label>
						</radio-group>
					</view>
					<view class="uni-btn-v">
						<button form-type="submit" type="primary">提交</button>
					</view>
				</form>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import uniBadge from '@/components/uni-badge/uni-badge.vue'
	import dateUtils from '../../common/util.js'
	export default {
		components: {
			uniBadge
		},
		computed: mapState(["header"]),
		data() {
			return {
				"id": "",
				"date": Date(),
				index: 0,
				nowCity: "",
				multiArray: [
					['湖南省', '湖北省'],
					['长沙市', '益阳市'],
					['芙蓉区', '天心区', '岳麓区', '开福区', '雨花区', '望城区', '浏阳市', '宁乡市', '长沙县']
				],
				multiIndex: [0, 0, 2],
				health: 0,
				beenToHubei: false,
				beenNCT: false
			}
		},
		methods: {
			...mapMutations(['filled']),
			location() {
				let data = this;
				uni.chooseLocation({
					success: function(res) {
						console.log('位置名称：' + res.name);
						console.log('详细地址：' + res.address);
						data.nowCity = res.address.toString();
						data.$forceUpdate();
						//this.nowCity = res.address.toString();

					}
				});

			},
			bindMultiPickerColumnChange: function(e) {
				console.log('修改的列为：' + e.detail.column + '，值为：' + e.detail.value)
				this.multiIndex[e.detail.column] = e.detail.value
				switch (e.detail.column) {
					case 0: //拖动第1列
						switch (this.multiIndex[0]) {
							case 0:
								this.multiArray[1] = ['长沙市', '益阳市']
								this.multiArray[2] = ['芙蓉区', '天心区', '岳麓区', '开福区', '雨花区', '望城区', '浏阳市', '宁乡市', '长沙县']
								break
							case 1:
								this.multiArray[1] = ['武汉市', '咸宁市', '黄冈市']
								this.multiArray[2] = ['江岸区', '江汉区', '硚口区', '汉阳区', '武昌区', '青山区', '洪山区', '东西湖区']
								break
						}
						this.multiIndex.splice(1, 1, 0)
						this.multiIndex.splice(2, 1, 0)
						break
					case 1: //拖动第2列
						switch (this.multiIndex[0]) { //判断第一列是什么
							case 0:
								switch (this.multiIndex[1]) {
									case 0:
										this.multiArray[2] = ['芙蓉区', '天心区', '岳麓区', '开福区', '雨花区', '望城区', '浏阳市', '宁乡市', '长沙县']
										break
									case 1:
										this.multiArray[2] = ['资阳区', '赫山区', '沅江市', '南县', '桃江县', '安化县', '大通湖管理区', '高新技术产业园区']
										break
								}
								break
							case 1:
								switch (this.multiIndex[1]) {
									case 0:
										this.multiArray[2] = ['江岸区', '江汉区', '硚口区', '汉阳区', '武昌区', '青山区', '洪山区', '东西湖区']
										break
									case 1:
										this.multiArray[2] = ['咸安区', '嘉鱼县', '通城县', '崇阳县', '通山县', '赤壁市']
										break
									case 2:
										this.multiArray[2] = ['黄州区', '麻城市', '武穴市', '团风县', '浠水县', '罗田县', '英山县', '蕲春县', '黄梅县', '红安县', '龙感湖管理区']
										break
								}
								break
						}
						this.multiIndex.splice(2, 1, 0)
						break
				}
				this.$forceUpdate()
			},
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showLoading({
					title: "加载中..."
				})
				let data = JSON.stringify(formdata)
				this.$http.post("/mem/health",data).then(res=>{
					console.log(res.data);
					if (res.data.META.SUCCESS) {
						uni.showToast({
							title: "您当日已填写",
							icon: "success",
							duration: 1500
						})
						this.filled(false);
						setTimeout(() => uni.navigateBack({}), 2000)
					} else {
						uni.showToast({
							title: res.data.META.MESSAGE,
							icon: "none"
						})
					}
					uni.hideLoading()
				}).catch(err=>uni.showToast({
						title: "请求出错:" + err.toString(),
						icon: "none"
					}))
				
			/* 	uni.request({
					url: "https://ser1.itrobot.site/maxrest/rest/mem/health",
					method: "POST",
					header: {
						"MAXAUTH": this.header
					},
					data: JSON.stringify(formdata),
					success: (res) => {
						console.log(res.data);
						if (res.data.META.SUCCESS) {
							uni.showToast({
								title: "您当日已填写",
								icon: "success",
								duration: 1500
							})
							this.filled(false);
							setTimeout(() => uni.navigateBack({}), 2000)
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
				}); */

				/* uni.showModal({
					content: '表单数据内容：' + JSON.stringify(formdata),
					showCancel: false
				}); */
			},
			formReset: function(e) {
				console.log('清空数据')
			}
		},
		onLoad(e) {
			this.date = new Date();

			console.log(e)
			this.id = e.id;
		}
	}
</script>

<style>
	.mycontent {
		margin-top: -45upx;
		padding: 0, 20upx, 0, 20upx;
		background-color: #efeff4;
	}

	.uni-list-cell {
		justify-content: flex-start;
	}
</style>
