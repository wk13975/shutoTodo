<template>
	<view class="tabs">
		<form @submit="submit" style="height: 100%;">
			<input type="text" class="hideInput" :value="item.WONUM" name='WONUM' hidden />
			<input type="text" class="hideInput" :value="item.WORKORDERID" name='WORKORDERID' hidden />
			<input type="text" class="hideInput" :value="item.FAILURECODE" name='FAILURECODE' hidden />
			<view id="tab-bar" class="scroll-h uni-flex uni-row">
				<view v-for="(tab,index) in tabBars" :key="tab.id" class="uni-tab-item" :id="tab.id" :data-current="index" @click="ontabtap">
					<text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.name}}</text>
				</view>
			</view>
			<view class="line-h"></view>

			<swiper :current="tabIndex" class="swiper-box" :duration="300" @change="ontabchange">
				<swiper-item class="myswiper-item">
					<scroll-view class="scroll-v" scroll-y="true" show-scrollbar=true>
						<view class="uni-card title-line">基础信息</view>
						<view class="info-box">
							<view class="info-line">
								<view class="leftTitle">编号</view>
								<view class="rightContent">
									<text>{{item.WONUM}}</text>
								</view>
							</view>
							<view class="info-line">
								<view class="leftTitle">状态</view>
								<view class="rightContent">
									<text>{{item.UXSYNONYMDOMAIN_DESCRIPTION}}</text>
								</view>
							</view>
							<view class="info-line">
								<view class="leftTitle">位置</view>
								<view class="rightContent">
									<input type="text" class="hideInput" :value="item.LOCATION" name='LOCATION' hidden />
									<!-- <input type="text" :value="item.LOCATION_DESCRIPTION" @input="onKeyInput" /> -->
									<my-selecter api="../selecter/selecter" name="LOCATION" :value="item.LOCATION_DESCRIPTION"></my-selecter>
								</view>
							</view>
							<view class="info-line">
								<view class="leftTitle">设备</view>
								<view class="rightContent">
									<input type="text" class="hideInput" :value="item.ASSETNUM" name='ASSETNUM' hidden />
									<!-- <input type="text" :value="item.ASSET_DESCRIPTION" @input="onKeyInput" /> -->
									<my-selecter :api='"../selecter/selectAsset?location="+item.LOCATION' :value="item.ASSET_DESCRIPTION"></my-selecter>
								</view>
							</view>
							<view class="info-line">
								<view class="leftTitle">缺陷描述</view>
								<view class="rightContent">
									<!-- <input type="text" :value="item.DESCRIPTION" @input="onKeyInput" name="DESCRIPTION" /> -->
									<view class="uni-textarea"><textarea @blur="bindTextAreaBlur" :value="item.DESCRIPTION" name='DESCRIPTION' />
										</view>
								</view>
							</view>
							<view class="info-line">
								<view class="leftTitle">缺陷类别</view>
								<view class="rightContent">
									<input type="text" class="hideInput"  :value="item.SRTYPE" name='SRTYPE' hidden />
									<picker @change="bindSRTYPE" :range="SRTYPE" range-key="VALUE">
										<view class="pickerview">{{item.SRTYPE}}</view>
									</picker>
								</view>
							</view>
							<view class="info-line">
								<view class="leftTitle">报缺专业</view>
								<view class="rightContent">
									<input type="text" :value="item.BQZY" name='BQZY' class="hideInput"  hidden />
									<picker @change="bindBQZY" :range="BQZY" range-key="VALUE">
										<view class="pickerview">{{item.BQZY}}</view>
									</picker>
								</view>
							</view>
							<view class="info-line">
								<view class="leftTitle">消缺专业</view>
								<view class="rightContent">
									<input type="text" :value="item.SR_PROFESSION" name='SR_PROFESSION' class="hideInput"  hidden />
									<picker @change="bindPROFESSION" :range="SR_PROFESSION" range-key="VALUE">
										<view class="pickerview">{{item.SR_PROFESSION}}</view>
									</picker>
								</view>
							</view>
<!-- 
							<view class="info-line">
								<view class="leftTitle">责任部门</view>
								<view class="rightContent"> -->
									<!-- <picker @change="bindDeptChange" :range="selectTypeLists" range-key="name">
										<view class="pickerview">{{item.DEPARTMENT_DESCRIPTION}}</view>
									</picker> -->
									<!-- <select v-model="editSelectTypeLists" :label-in-value="true" class="selectType" @change="selectTypeChange" ref="addRequestState">
									<option v-for="(item,index) in selectTypeLists" :key="index" :value="item.value">{{item.name}}</option>
								</select> -->
						<!-- 		</view>
							</view> -->
							<view class="info-line">
								<view class="leftTitle">是否加急</view>
								<view class="rightContent">
									<switch :checked="item.fast" style="margin-top: 10upx;" />
								</view>
							</view>
							<view class="uni-card" style="background-color: #fffae8;">
								<view class="uni-card-content " style="height: 80rpx;	display: flex;flex-direction: row;justify-content: space-around;">
									<view style="line-height: 80rpx;">提出人: {{item.CREATEPERSON_DISPLAYNAME}}
										<uni-icons type="phone" @click="call" color="green" size="20"></uni-icons>
									</view>
									<view style="line-height: 80rpx;">
										{{item.DEPARTMENT_DESCRIPTION}}
									</view>
								</view>
							</view>
						</view>
						<view class="uni-card title-line">缺陷图片</view>
							<view class="info-box" style="">
								<my-images :imgs="imgs" upUrl="/imgs/" :formId="id" :canUp="item.UXSYNONYMDOMAIN_DESCRIPTION!='已关闭'" tablename="workorder" @update="updateImgs"></my-images>
							</view>

					<!-- 	<view class="uni-card title-line">问题图片</view>
						<view class="info-box">
							<my-images ></my-images>
						</view> -->

						<view class="uni-card title-line">缺陷取消</view>
						<view class="info-box">
							<view class="info-line">
								<view class="leftTitle">取消原因</view>
								<view class="rightContent">
									<view class="uni-textarea">
										<textarea @blur="bindTextAreaBlur" :value="item.SR_CANCELREASON" name='SR_CANCELREASON' />
									</view>
							</view>
						</view>
						<view class="info-line">
							<view class="leftTitle">申请人</view>
							<view class="rightContent">
								<text>{{item.SR_CANCELSQPERSON_DISPLAYNAME}} {{item.GQ_SQSJ}} </text>
							</view>
						</view>
					</view>
					<view class="uni-flex uni-row" id="buttons">
						<view class="button">
							<button type="primary" form-type="submit">保存</button>
						</view>
						<view class="button" >
							<button type="default" @click="test" form-type="submit">提交</button></view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item class="myswiper-item">
				<scroll-view class="scroll-v" scroll-y="true" show-scrollbar=true>
					<view class="uni-card title-line">消缺情况</view>
					<view class="info-box">
						<view class="info-line">
							<view class="leftTitle">消缺班组</view>
							<view class="rightContent">
								<input type="text" :value="item.SR_TEAM" @input="onKeyInput" name='SR_TEAM' class="hideInput"   hidden/>
								<my-selecter api="../selecter/selectTeam" :value="item.SR_TEAM_DESCRIPTION"></my-selecter>
							</view>
						</view>
						<view class="info-line">
							<view class="leftTitle">消缺人</view>
							<view class="rightContent">
								<input type="text" :value="item.SR_XQPERSON_DISPLAYNAME" @input="onKeyInput"/>
							</view>
						</view>
						<view class="info-line">
							<view class="leftTitle">消缺情况</view>
							<view class="rightContent">
								<view class="uni-textarea">
									<textarea name='SR_FINISHREPORT' @blur="bindTextAreaBlur" auto-height :value="item.SR_FINISHREPORT" /></view>
							</view>
						</view>
						<view class="info-line">
							<view class="leftTitle">工作总结</view>
							<view class="rightContent">
								<view class="uni-textarea">
									<textarea name='SR_SUMMARY' @blur="bindTextAreaBlur" auto-height :value="item.SR_SUMMARY" />
								</view>
							</view>
						</view>
					</view>
					
					<view class="uni-card title-line">缺陷接收</view>
					<view class="info-box">
						<view class="info-line">
							<view class="leftTitle">预期开始时间</view>
							<view class="rightContent">
								<!-- <view class="pickerview" @tap="toggleTab('limit')">{{item.PLANSTARTDATE}}</view> -->
								<input type="text" :value="item.PLANSTARTDATE" name='PLANSTARTDATE'  disabled @click="toggleTab('limit')"/>
							<!-- 	
								<picker mode="date"   @change="bindDateChange"  name='PLANSTARTDATE'>
									<view class="pickerview">{{item.PLANSTARTDATE}}</view>
								</picker> -->
							</view>
						</view>
						<view class="info-line">
							<view class="leftTitle">预期结束时间</view>
							<view class="rightContent">
								<input type="text" :value="item.PLANENDDATE" name='PLANENDDATE'  disabled @click="toggleTab('limit2')"/>
								<!-- <picker mode="date"   @change="bindDateChange" name='PLANENDDATE'>
									<view class="pickerview">{{item.PLANENDDATE}}</view>
								</picker> -->
							</view>
						</view>
						<view class="uni-card" style="background-color: #fffae8;">
							<view class="uni-card-content " style="height: 80rpx;	display: flex;flex-direction: row;justify-content: space-around;">
								<view style="line-height: 80rpx;">缺陷接收人: {{item.SR_RECEIVEPERSON_DISPLAYNAME}}</view>	
								<view style="line-height: 80rpx;">	{{item.SR_RECEIVEDATE}}</view>
							</view>
						</view>
					</view>
					
					<view class="uni-card title-line">缺陷验收</view>
					<view class="info-box">
						<view class="info-line">
							<view class="leftTitle">申请验收人</view>
							<view class="rightContent">
								<text>{{item.SR_CHECKSQPERSON_DISPLAYNAME}} {{item.SR_CHECKSQDATE}} </text>
							</view>
						</view>
						<view class="info-line">
							<view class="leftTitle">验收人</view>
							<view class="rightContent">
								<text>{{item.SR_CHECKPERSON_DISPLAYNAME}} {{item.SR_CHECKDATE}} </text>
							</view>
						</view>
					</view>
					
					<view class="uni-card title-line">延期信息</view>
					<view class="info-box">
						<view class="info-line">
							<view class="leftTitle">申请延期至</view>
							<view class="rightContent">
								<picker name='SR_DELAYDATE' mode="date"   @change="bindDateChange">
									<view class="pickerview">{{item.SR_DELAYDATE}}</view>
								</picker>
							</view>
						</view>
						<view class="info-line">
							<view class="leftTitle">延期原因</view>
							<view class="rightContent">
								<view class="uni-textarea">
									<textarea @blur="bindTextAreaBlur" name='SR_DELAYMEMO' :value="item.SR_DELAYMEMO"/>
								</view>
							</view>
						</view>
						<view class="info-line">
							<view class="leftTitle">延期申请人</view>
							<view class="rightContent">
								<text>{{item.SR_DELAYSQPERSON_DISPLAYNAME}} {{item.SR_DELAYSQDATE}} </text>
							</view>
						</view>
						<view class="info-line">
							<view class="leftTitle">审批人</view>
							<view class="rightContent">
								<text>{{item.SR_DELAYSPPERSON_DISPLAYNAME}} {{item.SR_DELAYSPDATE}} </text>
							</view>
						</view>
					</view>
					
					<view class="uni-card title-line">挂起信息</view>
					<view class="info-box">
						<view class="info-line">
							<view class="leftTitle">挂起说明</view>
							<view class="rightContent">
								<view class="uni-textarea">
									<textarea name='GQ_SM' @blur="bindTextAreaBlur" :value="item.GQ_SM"/>
								</view>
							</view>
						</view>
						<view class="info-line">
							<view class="leftTitle">申请人</view>
							<view class="rightContent">
								<text>{{item.GQ_SQR_DISPLAYNAME}} {{item.GQ_SQSJ}} </text>
							</view>
						</view>
					</view>

						<!-- <view class="rightContent">
							<picker @change="bindRankChange" :value="item.rank"  :range="ranking" range-key="name">
								<view class="pickerview">{{ranking[item.rank].name}}</view>
							</picker>
						</view> -->
							
					<view class="uni-flex uni-row" id="buttons">
						<view class="button">
							<button type="primary" form-type="submit">保存</button>
						</view>
						<view class="button" @click="workflow">
							<button type="default" @click="test" form-type="submit">提交</button></view>
					</view>
				</scroll-view>
			</swiper-item>

			<swiper-item class="myswiper-item">
				
				<scroll-view class="scroll-v" v-if="wf.length !=0||wfa.length!=0" scroll-y="true" show-scrollbar=true >
					<view class="" v-if="item.UXSYNONYMDOMAIN_DESCRIPTION != '已关闭' &&item.UXSYNONYMDOMAIN_DESCRIPTION != '已取消'">
						<view class="uni-flex uni-row">
							<view class="workRadius">
								<!-- <view  style="background-color: #007AFF;height: 20upx;width: 20upx; border-radius: calc(50%);"/>		 -->
							</view>
							<view style="margin-left: 16rpx; line-height: 36upx;color: #007AFF;width:600rpx;height: 40rpx;" class="uni-h4">
								当前处理人
							</view>
						</view>
						<view class="uni-flex uni-row">
								<view  style="width: 36upx;">
									<view>
										<view  class="workSolid" style="height: 218upx;" />
									</view>
								</view>
								<scroll-view v-if='item.WFASSIGNMENT.length!=0' scroll-y="true" show-scrollbar=true class="uni-column" 
								style="margin: 0 0 8rpx 20rpx; height: 210upx;background-color: #f4f4f4;
								 width: 600rpx;" >
									<view class="uni-list-cell " style="width:550rpx;" v-for="(item,index) in item.WFASSIGNMENT" :key="index">
										<view class="uni-list-cell-left" style="width: 85%;">
											 {{item.ASSIGNEE_DISPLAYNAME}} 
										</view>
										<view class="uni-list-cell-right" style="width: 50upx;">
											<uni-icons size="22" type="phone" v-if="item.ASSIGNEE_PRIMARYPHONE==''" ></uni-icons>
											<uni-icons size="22" type="phone" v-else color="green" ></uni-icons>
										</view>
									</view>
								</scroll-view>
								<view v-else style="margin-left: 20upx;">
									系统暂无任务分配
								</view>
						</view>
					</view>
					
					<view class="uni-flex uni-column"  v-for="(item1,index) in wf" :key="index" v-if="item1.TRANSTYPE!='WFACTION'">	
						<view class="uni-flex uni-row">
							<view class="workRadius" style="">
								<view style="background-color: #007AFF;height: 20upx;width: 20upx; border-radius: calc(50%);"/>		
							</view>
							<view style="margin-left: 20upx; height: 40upx;">
								<view class="uni-flex uni-row" style="width: 600upx; justify-content: space-between;" v-if="index>0 && wf[index-1].TRANSTYPE=='WFACTION'">
									 {{item1.NODE_TITLE}}  <text style="color: #007AFF;">选择</text>  <text style="color: #ff9808;"> {{wf[index-1].DESCRIPTION}}</text> 	
								</view>
								<view v-else>
									{{item1.NODE_TITLE}}  
								</view>
							</view>
						</view>
						<view class="uni-flex uni-row">
							<view  style="width: 36upx;">
									<view  class="workNoSolid" />
							</view>
							<view class="uni-column" style="margin-left: 40upx; color: #797979;min-height: 170upx; width: 600rpx; "  >
								<view >
									<view class="uni-ellipsis">{{item1.DESCRIPTION}}</view>
									<view>处理人: {{item1.PERSONID_PERSON_DISPLAYNAME}}</view>
									<view>处理时间: {{item1.TRANSDATE}}</view>
								</view>
							
								</view>	
							</view>
					</view>
					<view class="uni-flex uni-row">
						<view class="workRadius" style="">
							<view style="background-color: #007AFF;height: 20upx;width: 20upx; border-radius: calc(50%);"/>		
						</view>
						<view style="margin-left: 20upx; height: 40upx;">
							新建
						</view>
					</view>
					<view style="height: 181upx;"></view>
					</scroll-view>
					<view v-else style="text-align: center;height: 750rpx; line-height: 750rpx;">
						暂无流程数据
					</view>
			</swiper-item>
		</swiper>
	</form>
		<w-picker
			mode="limit" 
			dayStep="60"
			startHour="8"
			endHour="20"
			minuteStep="5"
			afterStep="30"
			@confirm="bindDateChange"
			ref="limit" 
			themeColor="#f00">
			</w-picker>
		<w-picker
			mode="limit" 
			dayStep="60"
			startHour="8"
			endHour="20"
			minuteStep="5"
			afterStep="30"
			@confirm="bindEndDate"
			ref="limit2" 
			themeColor="#f00">
			</w-picker>
	</view>
</template>

<script>
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	import myImages from '../../components/m-images.vue'
	import wPicker from "@/components/w-picker/w-picker.vue";
	import mySelecter from '../../components/mySelecter.vue'
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	export default {
		mixins: [MescrollMixin],
		components:{
			uniCollapse,
			uniCollapseItem,
			myImages,
			wPicker,
			mySelecter
		},
		data() {
			return {
				item: {},
				wf:[],
				wfa:[],
				BQZY:[],
				SRTYPE:[],
				SR_PROFESSION:[],
				id: "0",
				imgs:[],
				cacheTab: [],
				tabIndex: 0,
				tabBars: [{
					name: '缺陷信息',
					id: 'guanzhu'
				}, {
					name: '缺陷处理',
					id: 'tuijian'
				},  {
					name: '审批流程',
					id: 'tiyu'
				}],
				boottomStyle:"bottomStyle",
				scrollInto: "",
				showTips: false,
				navigateFlag: false,
				pulling: false,
				nowing:true,
				send:false,
				refreshIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg=="
			}
		},
		created() {
			//this.editSelectTypeLists = this.selectTypeLists[0].value; /* 默认选中 */
		},
		onHide() {
			console.log("Hide")
			
		},
		onShow() {
			console.log("onShow")
			let defect =this.item;
			//设备选择
			uni.getStorage({
				key:"asset",
				success: function (res) {
				        console.log(res.data);
						if(res.data!=""&&res.data!=null){
						let data =res.data
						defect.ASSETNUM = data.ASSETNUM
						defect.ASSETNUM_DESCRIPTION = data.DESCRIPTION
						
						}
						uni.removeStorage({
						    key: 'asset',
						    success: function (res) {
						        console.log('success');
						    }
						});
				    }
			})
			//班组选择
			uni.getStorage({
				key:"team",
				success: function (res) {
				        console.log(res.data);
						if(res.data!=""&&res.data!=null){
						let data =res.data
						defect.SR_TEAM = data.TEAMNUM
						defect.SR_TEAM_DESCRIPTION = data.DESCRIPTION
						
						}
						uni.removeStorage({
						    key: 'team',
						    success: function (res) {
						        console.log('success');
						    }
						});
				    }
			})
			//位置选择
			uni.getStorage({
				key:"local",
				success: function (res) {
				        console.log(res.data);
						if(res.data!=""&&res.data!=null){
							console.log("11111111111"+res.data.LOCATION);
						let data =res.data
						defect.LOCATION = data.LOCATION
						defect.LOCATION_DESCRIPTION = data.DESCRIPTION
						
						}
						uni.removeStorage({
						    key: 'local',
						    success: function (res) {
						        console.log('success');
						    }
						});
				    }
			})
			//this.$forceUpdate()
		},
		onLoad(e) {
			let load=0
			uni.showLoading({
				title: "加载中",
				mask: true
			});
			this.id = e.id;
			this.$http.post("/mem/sr/getdetail",{"ID":e.id}).then(res=>{
				load++
				if(load==2)
					uni.hideLoading();
				//console.log(res.data)
				uni.getStorage({
					key:"domain",
					success:(res)=> {
						// console.log(res.data);
						let arr = res.data;
						this.BQZY = arr.filter(item => item.DOMAINID=='BQZY');
						this.SR_PROFESSION = arr.filter(item => item.DOMAINID=='SR_PROFESSION')
						this.SRTYPE = arr.filter(item => item.DOMAINID=='SRTYPE')
						this.SRTYPE = this.SRTYPE.sort()
					}
				})
				this.item = res.data.DATA;
				this.wfa=this.item.WFASSIGNMENT
				 this.item.WFTRANSACTION.reverse();
				 this.wf = this.item.WFTRANSACTION;
				//uni.hideLoading();
			}).catch(err=>{
				console.log(err.toString())
				//uni.hideLoading();
				uni.showToast({
					title:err.toString(),
					icon:"none"
					})
				});
			uni.showLoading({
				title: "图片加载中",
				mask: true
			});
			this.$http.get("/imgs/workorder/"+this.id).then(res=>{
				load++
				if(load==2)
					uni.hideLoading();
				if(res.data.META.SUCCESS){
					this.imgs=res.data.DATA;
					console.log(this.imgs.length)
					this.$forceUpdate();
				}
			}).catch(err=>{
				uni.hideLoading();
				console.log("错误: "+JSON.stringify(err))
				});
			this.item.rank = 4;
			this.item.fast = false;
	/* 		setTimeout(
				() => {
					uni.hideLoading();
				},
				100
			); */
		},
		methods: {
			changeWork(v){
				this.nowing=v;
				if(this.nowing){
					this.boottomStyle="bottomStyle"
				}else {
					this.boottomStyle="topStyle"
				}
			},
			toggleTab(str){
				this.$refs[str].show();
			},
			change(){},
			bindSRTYPE:function(e){
							this.item.SRTYPE = this.SRTYPE[e.target.value].VALUE
			},
			bindPROFESSION: function(e) {
			            this.item.SR_PROFESSION =this.SR_PROFESSION[e.target.value].VALUE
			        },
			bindBQZY: function(e) {
						this.item.BQZY =this.BQZY[e.target.value].VALUE
					},
			bindDateChange:function(e){
				console.log(e)
				this.item.PLANSTARTDATE=e.result;
			},	
				bindEndDate:function(e){
					console.log(e)
					this.item.PLANENDDATE=e.result;
				},	
			bindLocalChange:function(e){
				this.item.local = this.locationsList[e.target.value].name
			},
			bindRankChange:function(e){
				this.item.rank=e.target.value
			},
			
			onKeyInput:function(event){
				console.log( event.target.value);

			},
			call(){console.log('打电话')},
			ontabtap(e) {
				let index = e.target.dataset.current || e.currentTarget.dataset.current;
				this.switchTab(index);
			},
			switchTab(index) {
				if (this.tabIndex === index) {
					return;
				}

				this.tabIndex = index;
				// this.scrollInto = this.tabBars[index].id;
			},
			ontabchange(e) {
				//console.log(e);
				let index = e.target.current || e.detail.current;
				this.switchTab(index);
			},
			selectTypeChange() {
				let index = this.$refs.addRequestState.value
				console.log("index：" + index)
				if (index == this.selectTypeLists[0].value) {
					this.wxDepositShow = true;
				} else {
					this.wxDepositShow = false;
				}
			},
			test(){
				this.send=true;
			},
			submit(e) {
				uni.showLoading({
					title:"保存中",
					mask:true
				})
				//console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				this.$http.post("/mem/sr/update",e.detail.value).then(res=>{
					console.log(res.data)
					
					if(res.data.META.SUCCESS){
						uni.showToast({
							title:"保存成功",
							icon:"success"
						})
						if(this.send) this.workflow()
					}else
					uni.showToast({
						title:res.data.META.MESSAGE,
						icon:"none"
					})
											
																
/* 					that.item = res.data.DATA;
					 that.item.WFTRANSACTION.reverse();
					 	that.wfa=that.item.WFASSIGNMENT
					 that.wf = that.item.WFTRANSACTION; */
					 //setTimeout(()=>uni.hideLoading(),800);
				}).catch(err=>{
					uni.hideLoading();
					uni.showToast({
						title:err.toString(),
						icon:"none"
					})
				})
				//setTimeout(()=>{if(this.send)  console.log("test:  test")},100);
				//console.log('form发生了submit事件，携带数据为：' + JSON.stringify(this.item))
				
			},
			bindTextAreaBlur: function (e) {
				//console.log(e.detail.value)
			},
			workflow(){
				let clrs = this.item.WFASSIGNMENT;
				
				let id = this.$store.getters.getPersonid
				let http =this.$http;
				let that =this;
				if(clrs.some(clr=>
					clr.ASSIGNCODE == id
				)){
					http.post("/mem/workflow/getact",{PERSONID:id,OWNERID:this.item.WORKORDERID}).then(res=>{
						console.log(res.data);
						if(res.data.META.SUCCESS){
						let data = res.data.DATA
						let msg = data.MSG;
						if(msg=="发送工作流成功"){
							uni.showToast({
								title:msg
							})
							
						}else{
							let actions = [];
							let options = data.OPTIONS;
							actions =options.map((option)=>{return option.INSTRUCTION});
							uni.showActionSheet({
							    itemList: actions,
								//选择操作后发送工作流
							    success: function (res) {
							        console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
									let option = options[res.tapIndex];
									option.PERSONID = id;
									http.post("/mem/workflow/sendwf",option).then(res=>{
										let meta= res.data.META;
										if(meta.SUCCESS){
											uni.showLoading({
												title:"流程发送成功",
												success:()=> {
													http.post("/mem/sr/getdetail",{"ID":that.id}).then(res=>{
														console.log(res.data)
												
														that.item = res.data.DATA;
														 that.item.WFTRANSACTION.reverse();
														 	that.wfa=that.item.WFASSIGNMENT
														 that.wf = that.item.WFTRANSACTION;
														 setTimeout(()=>uni.hideLoading(),800);
													}).catch(err=>{
														uni.hideLoading();
														uni.showToast({
															title:err.toString,
															icon:"none"
														})
													})
												}
											})
											
										}else{
											uni.showToast({
												title:meta.MESSAGE,
												icon:'none'
											});
										}
										console.log(res.data)
									}).catch(err=>console.log(err.toString()))
									
									
							    },
							    fail: function (res) {
							        console.log(res.errMsg);
							    }
							}); 
						}
						}
					})
				
				}else {
					uni.showToast({
						title:"当前没有分配给你的任务",
						icon:'none'
					})
				}
				
				
			},
			updateImgs(images){
				console.log("子组件更新父组件使用")
				this.imgs = images;
			}

		}
	}
</script>

<style>
	/* #ifndef APP-PLUS */
	page {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* #endif */

	/* 我写的 开始 */
	.title-line {
		height: 90upx;
		line-height: 90upx;
		padding: 0 20upx 0 20upx;
		margin: 5upx 10upx 5upx 10upx;
		font-size: 36upx;
		font-weight: 500;
		/* background-color: #ffd69b; */
		color: #383838;
	}

	.info-box {
		padding: 10upx 20upx 10upx 20upx;
	}

	.info-line {
		min-height: 80upx;
		min-line-height: 80upx;
		display: flex;
		flex-direction: row;
		/* background-color: #09BB07; */
		padding-left: 10upx;
		margin-top: 5upx;
		margin-bottom: 5upx;
	}

	.leftTitle {
		line-height: 80upx;
		min-width: 140upx;
		margin-right: 20upx;
		color: #434343;
	}

	.rightContent {
		-webkit-flex: 1;
		flex: 1;
		border-bottom: 1upx #F4F5F6 solid;
		/* background-color: #ffffff; */
		padding: 5upx 20upx 5upx 0;
	}

	.rightContent>text {
		line-height: 80upx;
	}

	picker, .rightContent>input {
		height: 70upx;
		line-height: 80upx;
		padding-left: 10upx;
		padding-right: 10upx;
		border-radius: 10upx;
		border: 1upx solid #d3d3d3;
		background-color: #FFFFFF;
	}
	
	.pickerview {
		height: 70upx;
		line-height: 70upx;
	}

	.rightContent>.uni-textarea {
		min-height: 120upx;
		border-radius: 10upx;
		border: 1upx solid #d3d3d3;
		background-color: #ffffff;
	}
	textarea{
		min-height: 120upx;
		padding-left: 10upx;
		padding-right: 10upx;
		border-radius: 10upx;
	}

	select {height: 70upx;/* font-size: 30upx; */margin: 5upx 50upx 5upx 0;border-radius: 10upx;}

	.uni-media-list {
		padding: 10upx 30upx 10upx;
		margin-bottom: 10upx;
		background-color: #FFFFFF;
	}
	.uni-media-list-body>view{
		line-height: 45upx;
		font-size: 30upx;
	}
	
	.workInfo {
		height: 80%;
		margin-top: 94upx;
		flex: 1;
		display: block;
	}

	/* 我写的 结束 */
	.tabs {
		flex: 1;
		flex-direction: column;
		overflow: hidden;

		/* #ifdef MP-ALIPAY || MP-BAIDU */
		height: 100vh;
		/* #endif */
	}

	.scroll-h {
		width: 750upx;
		height: 80upx;

		flex-direction: row;

		/* #ifndef APP-PLUS */
		white-space: nowrap;
		/* #endif */
		/* flex-wrap: nowrap; */
		/* border-color: #cccccc;
		border-bottom-style: solid;
		border-bottom-width: 1px; */
	}

	.line-h {
		height: 1upx;
		background-color: #cccccc;
	}

	.uni-tab-item {
		/* #ifndef APP-PLUS */
		display: inline-block;
		/* #endif */
		flex-wrap: nowrap;
		text-align: center;
		-webkit-flex: 1;
		flex: 1;
	}

	.uni-tab-item-title {
		color: #555;
		font-size: 30upx;
		height: 80upx;
		line-height: 80upx;
		flex-wrap: nowrap;
		/* #ifndef APP-PLUS */
		white-space: nowrap;
		/* #endif */
	}

	.uni-tab-item-title-active {
		color: #007AFF;
	}

	.swiper-box {
		flex: 1;
		background-color: #f1f1f1;
		height: 100%;
		/* #ifdef MP-ALIPAY || MP-BAIDU */
		height: 100vh;
		/* #endif */
	}

	.myswiper-item {
		flex: 1;
		flex-direction: row;
		/* #ifdef MP-ALIPAY || MP-BAIDU */
		height: 100vh;
		/* #endif */
	}

	.scroll-v {
		flex: 1;
		/* #ifndef MP-ALIPAY */
		flex-direction: column;
		/* #endif */
		width: 750upx;
		height: 100%;
		/* #ifdef MP-ALIPAY || MP-BAIDU */
		height: 100vh;
		/* #endif */
	}

	.update-tips {
		position: absolute;
		left: 0;
		top: 41px;
		right: 0;
		padding-top: 5px;
		padding-bottom: 5px;
		background-color: #FDDD9B;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.update-tips-text {
		font-size: 14px;
		color: #ffffff;
	}

	.refresh {
		width: 750upx;
		height: 64px;
		justify-content: center;
	}

	.refresh-view {
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;
	}

	.refresh-icon {
		width: 30px;
		height: 30px;
		transition-duration: .5s;
		transition-property: transform;
		transform: rotate(0deg);
		transform-origin: 15px 15px;
	}

	.refresh-icon-active {
		transform: rotate(180deg);
	}

	.loading-icon {
		width: 20px;
		height: 20px;
		margin-right: 5px;
		color: #999999;
	}

	.loading-text {
		margin-left: 2px;
		font-size: 16px;
		color: #999999;
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

	#buttons {
		width: 660upx;
		height: 84upx;
		line-height: 84upx;
		margin-top: 10upx;
		margin-bottom: 100upx;
		margin-left: 40upx;
		flex-direction: row;
	}

	button {
		height: 84upx;
		font-size: 32upx;
	}

	.button {
		padding-left: 20upx;
		padding-right: 20upx;
		-webkit-flex: 1;
		flex: 1;
		height: 84upx;
	}

	.box {
		height: 300upx;
	}
	
	.titlebar{
		background-color: #ff9800;
		width: 710upx;
		position: fixed;

	}
	
	.workRadius{
		height: 36upx;width: 36upx; border: 3upx solid #007AFF; border-radius: calc(50%);  display:flex;justify-content:center;
		align-items: center; margin: 5upx 0 5upx 0;
	}
	.workSolid{
		background-color: #007AFF;min-height: 170upx; width: 4upx;margin-left: 19upx;
	}
	.workNoSolid{
		background-color: #969696;min-height: 170upx; width: 4upx;margin-left: 19upx;
	}
	
	.hideInput{
		display: none;
	}
	
</style>
