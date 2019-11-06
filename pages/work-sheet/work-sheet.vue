<template>
	<view class="work-wrapper">
		<!-- <view class="current-title">当前工单列表</view> -->
		<view class="work-list">
			<view class="work-item" v-for="(item, index) in list" @tap="toDetail">
				<view class="item-left">
					<view class="work-title">{{item.title}}</view>
					<view class="item item-time">{{item.time}}</view>
					<view class="item item-source">来源:{{item.source}}</view>
					<view class="item item-suggest">建议工具:{{item.suggest}} </view>
				</view>
				<image src="../../static/WX20191105-181507@2x.png"></image>
				
			</view>
		</view>
		
	</view>
</template>
<script>
	export default {
		data() {
			return {
				list: [
					{
						title: '钱江路电源屏报警',
						address: '钱江路',
						time: '2018.4.24 15:37:24',
						source: '系统自动推送',
						suggest: '维修工具箱'
					},
					{
						title: '客运中心DTI报警',
						address: '客运中心',
						time: '2018.4.25 12:37:39',
						source: '智能运维中心-陈磊',
						suggest: '笔记本'
					},
					{
						title: '板卡报警',
						address: '钱江路',
						time: '2018.4.26 10:37:10',
						source: '智能运维中心-石峰',
						suggest: '维修工具箱'
					},
					{
						title: '客运中心道岔检修',
						address: '客运中心',
						time: '2018.4.26 11:37:34',
						source: '智能运维中心',
						suggest: '维修工具箱'
					},
					{
						title: '计轴报警',
						address: '钱江路',
						time: '2018.4.27 19:37:22',
						source: '系统自动推送',
						suggest: '维修工具箱'
					},
					
				]
			}
		},
		methods: {
			toDetail() {
				uni.navigateTo({
					url:'../work-detail/work-detail'
				})
			}
		}
	}
</script>
<style scoped>
	.work-wrapper{
		padding: 20rpx;
	}
	.current-title{
		color: #2db7f5;
	}
	.work-list{
		padding-left: 10rpx;
	}
	.work-title{
		font-size: 16px;
		color: #000;
	}
	.work-item{
		color: #dcdee2;
		font-size: 14px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.item{
		font-size: 14px;
		margin-bottom: 20rpx;
		line-height: 20px;
	}
	.item-time{
		color: #2db7f5;
		margin-top: 10rpx;
	}
	.work-item image{
		width: 300rpx;
		height: 200rpx;
	}
</style>