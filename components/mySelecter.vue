<template>
	<view @click="show" @tap="show">
		<input type="text"  :name='name' :value="value"  disabled />

	</view>
</template>

<script>
	export default {
		name:'my-selecter',
		props:{
			api:{
				type: String,
				default:""
			},
			name:{
				type:String,
				default:""
			},
			value:{
				type:String,
				default:""
			}
		},
		
		data() {
			return {
				hide:false,
				DESCRIPTION:"",
				ID:""
			};
		},
		methods:{
			show(){
				console.log(this.api)
				uni.navigateTo({
				    url: this.api
				});
				//this.$http.post().then()
			},
		}
	}
</script>

<style>

.dialog{
	background: #1a59b7;
	color:#ffffff;
	overflow: hidden;
	z-index: 9999;
	position: fixed;
	padding:5px;
	text-align:center;
	width: 700rpx;
	height: 80%;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	left: 25rpx;
	top:10rpx;
}
input{
	height: 70upx;
	line-height: 80upx;
	padding-left: 10upx;
	padding-right: 10upx;
	border-radius: 10upx;
	border: 1upx solid #d3d3d3;
	background-color: #FFFFFF;
}
</style>
