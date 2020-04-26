<template>
	<view class="content">
		<view class="uni-padding-wrap uni-common-mt">
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-row">
					<text class="title">单号：</text>
					<view class="text">{{id}} </view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">switch</view>
					<view>
						<switch name="switch" />
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">radio</view>
					<radio-group name="radio">
						<label>
							<radio value="radio1" /><text>选项一</text>
						</label>
						<label>
							<radio value="radio2" /><text>选项二</text>
						</label>
					</radio-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">checkbox</view>
					<checkbox-group name="checkbox">
						<label>
							<checkbox value="checkbox1" /><text>选项一</text>
						</label>
						<label>
							<checkbox value="checkbox2" /><text>选项二</text>
						</label>
					</checkbox-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">slider</view>
					<slider value="50" name="slider" show-value></slider>
				</view>
				<view class="uni-form-item uni-row">
					<text class="title">请输入：</text>
					<input class="uni-input border" name="input" placeholder="这是一个输入框" />
				</view>

				<view  class="uni-flex uni-row" id="buttons">
					<view class="button">
						<button form-type="submit" type="primary" >保存</button>
					</view>
					<view class="button" @click="workflow">
						<button type="default" @click="workflow" >提交</button></view>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				"id": ""
			}
		},
		methods: {
			workflow(){
				uni.showActionSheet({
				    itemList: ['通过', '重新分配', '驳回'],
				    success: function (res) {
				        console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
				    },
				    fail: function (res) {
				        console.log(res.errMsg);
				    }
				});
			},
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
					content: '表单数据内容：' + JSON.stringify(formdata),
					showCancel: false
				});
			},
			formReset: function(e) {
				console.log('清空数据')
			}
		},
		onLoad(e) {
			console.log(e)
			this.id = e.id;
		}
	}
</script>

<style>
	#buttons {
		width: 660upx;
		height: 84upx;
		line-height: 84upx;
		
		margin-top: 10upx;
		flex-direction: row;
	}
	button {
		height: 84upx;
		font-size: 32upx;
	}
	
	.button {
		padding-left: 20upx;
		padding-right: 20upx;
		-webkit-flex: 1;flex: 1;
		height: 84upx;
	}

</style>
