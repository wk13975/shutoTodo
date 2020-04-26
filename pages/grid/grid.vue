<template>
	<view>
		<zy-grid :grid-list=gridList :show-tip="true" :col="4"></zy-grid>
	</view>
</template>

<script>
	import zyGrid from '../../components/zy-grid/zy-grid.vue'
	export default {
		components:{
			zyGrid
		},
		data () {
			return {
				gridList: [	//格子数据列表
					{
						name: '测试图标',
						imgUrl: '../../static/zy-grid/grid-11.svg',
						tips: ''
					},
					{
						name: '测试图标',
						imgUrl: '../../static/zy-grid/grid-12.svg',
						tips: ''
					}
				]
			}
		}
	}
</script>

<style>
</style>
