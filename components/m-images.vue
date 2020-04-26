<template>
	<view style="width: 100%; justify-content:start; display: flex;  min-height: 250upx;  flex-wrap:wrap;">
		<view style="width: 320upx;height: 200upx; background-color: #999;margin: 2upx 10upx 2upx 10upx; text-align: center;"
		 @click="uploadImg">
			<uni-icons type="camera" style="width: 320upx;height: 200upx;" size="60" color="white"></uni-icons>
		</view>
		<view v-for="(img,index) in  imgs" :key="index">
			<image v-if="img.BASE64!=null&&img.BASE64!=''" style="width: 320upx;height: 200upx; background-color: #FFFFFF;margin: 2upx 10upx 2upx 10upx;"
			 :src="replaceBase64(img.BASE64)" mode="aspectFit" @click="showImg(index)" @longpress="delImg(img.DOCINFOID)"></image>
			<image v-else style="width: 320upx;height: 200upx; background-color: #FFFFFF;margin: 2upx 10upx 2upx 10upx;" :src="img.BASE64||img.URL"
			 mode="aspectFit" @click="showImg(index)" @longpress="delImg(img.DOCINFOID)"></image>
		</view>
	</view>
</template>

<script>
	var that;
	var isBase64=false;
	export default {
		name: 'my-images',
		props: {
			imgs: {
				type: Array,
				default: () => [{
					"URL": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2948076586,1525129381&fm=26&gp=0.jpg",
					"DOCLINKSID": 3907,
					"DOCINFOID": 4007,
					"NAME": "12.jpg",
					"BASE64": null,
					"DOCTYPE": "Attachments",
					"OWNERTABLE": "workorder",
					"OWNERID": 14802,
					"OPERATOR": "MAXADMIN"
				}]
			},
			upUrl: {
				type: String,
				default: ""
			},
			formId: {
				type: String,
				default: ""
			},
			max: {
				type: Number,
				default: 9
			},
			tablename: {
				type: String,
				default: ""
			},
			canUp: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				nowImgs: this.imgs,
				urls: [],
				ownertable: this.tablename,
				ownerid: this.formId
			};
		},
		watch: {
			imgs: {
				handler(newObj, oldObj) {
					console.log('更新照片列表')
					this.nowImgs = newObj;
					this.urls = this.nowImgs.map(function(item, index, newObj) {
						let base64 = item.BASE64
						if (base64 != null && base64 != undefined) {
							isBase64 = true;
							return item.BASE64.replace(/[\r\n]/g, "")
						}
						return item.URL;
					})
				},
				immediate: true,
				deep: true,
			},
			formId: {
				handler(newId, oldId) {
					console.log("new" + newId + "========old" + oldId)
					this.ownerid = newId
				}
			}

		},
		methods: {
			delImg(e) {
				that = this;
				console.log("长按删除照片:" + e);
				let http = this.$http
				let url = this.upUrl + e;
				if (this.canUp)
					uni.showModal({
						content: "确认删除照片?",
						title: "照片删除",
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
								uni.showLoading({
									title: "删除中,请稍后..."
								})
								http.delete(url).then(res => {

									//this.updata(this.nowImgs.filter(img => img.DOCINFOID != e));
									that.updataImgs()
								}).catch(err => {
									console.log(JSON.stringify(err))
									uni.showToast({
										title: "后台删除失败,请稍后再试",
										icon: "none"
									})
									that.updataImgs()
								});

							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					})
			},
			showImg(current) {
				console.log("预览")
				that = this
				if (isBase64) {
					// #ifdef APP-PLUS
					uni.showToast({
						icon:"none",
						title:"安卓端base64图片暂不支持预览"
					})
					// #endif
				}
				// #ifndef APP-PLUS
				uni.previewImage({
					current: current,
					urls: this.urls,
					longPressActions: {
						// #ifdef APP-PLUS
						itemList: ['保存图片', '删除'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
							if (data.tapIndex == 1) {
								let id = that.imgs[data.index].DOCINFOID;
								that.delImg(id);
							} else if (data.tapIndex == 0) {
								if (that.imgs[data.index].BASE64 != "")
									saveHeadImgFile(that.imgs[data.index].NAME, that.imgs[data.index].BASE64, () => {
										uni.showToast({
											title: "保存成功",
											icon: "success"
										})
									})
							}
							console.log(id)
						},
						fail: function(err) {
							console.log(err.errMsg);
						},
						// #endif
						// #ifndef APP-PLUS
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
						// #endif

					}
				});
				// #endif
			},
			uploadImg() {
				that = this;
				console.log(this.nowImgs)
				let http = this.$http;
				let imgs = this.nowImgs
				let url = "/mem" + this.upUrl + this.ownertable + "/" + this.ownerid + "?doctype=Attachments"
				if (this.canUp)
					uni.chooseImage({
						count: this.max - imgs.length,
						success: function(res) {
							console.log(JSON.stringify(res.tempFilePaths));
							let i = 0;
							while (i < res.tempFilePaths.length) {

								let src = res.tempFilePaths[i];
								if (src.indexOf("wxfile") < 0)
									src = src.substr(src.indexOf("http"))
								console.log("地址:" + src)
								/* imgs.push({
									URL: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586408173757&di=c52f62f0a2901539ecb7cc700d062afe&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0195f55972f18ca8012193a342310a.gif"
								}); */
								uni.showLoading({
									title: "上传中,请稍后..."
								})
								http.upload(url, {
									filePath: src,
									name: 'image'
								}).then(res => {
									if (res.data.META.SUCCESS) {
										console.log("应该上传成功了")
										console.log(JSON.stringify(res.data))
										let img = res.data.DATA
										imgs.push(img)
										this.update(imgs);
									} else {
										uni.showToast({
											title: "上传失败" + res.data.META.MESSAGE,
											icon: "none"
										})
									}
									that.updataImgs()
								}).catch(err => {
									console.log("出错了")
									console.log(JSON.stringify(err))
									if (err == "")
										uni.showToast({
											title: "上传成功",
											icon: "none"
										})
									that.updataImgs()
								})
								//imgs.push(src.substr(src.indexOf("http")));
								i++;
							}
							//console.log(imgs);
							//this.$emit("updata",imgs)
							//e.push(res.tempFilePaths);
						}
					})
			},
			saveHeadImgFile(name, base64, cback) {
				// /将BASE 64保存为文件/
				var bitmap = new plus.nativeObj.Bitmap("test");
				// 从本地加载Bitmap图片
				bitmap.loadBase64Data(base64, function() {
					// console.log('加载图片成功');
					bitmap.save("_doc/" + name, {
						overwrite: true,
						quality: 100
					}, function(i) {
						cback();
						console.log('保存图片成功：' + JSON.stringify(i));
					}, function(e) {
						console.log('保存图片失败：' + JSON.stringify(e));
					});
				}, function(e) {
					console.log('加载图片失败：' + JSON.stringify(e));
				});
			},
			replaceBase64(base64) {
				if (base64 != null && base64 != undefined)
					return base64.replace(/[\r\n]/g, "");
			},
			update(imgs) {
				this.$emit("update", imgs);
			},
			updataImgs() {
				that = this
				console.log("getImgs")
				this.$http.get("/imgs/workorder/" + this.ownerid).then(res => {
					if (res.data.META.SUCCESS) {
						that.$emit("update", res.data.DATA);
						uni.hideLoading();
					}
				}).catch(err => {
					console.log("错误: " + JSON.stringify(err))
				});
			}

		}
	}
</script>

<style>

</style>
