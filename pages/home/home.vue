<template>
	<view class="home-wrapper">
		<view class="home-head">
			<view class="home-head-content">
				<view style="font-size: 18px;">地铁综合智能运维平台</view>
				<image class="head-bg" src="../../static/home/ditie.png"></image>
				<view class="message" @tap="toPage('message')">
					<image src="../../static/home/message.png"></image>
					<view class="message-num">7</view>
				</view>
			</view>
			
		</view>
		<view class="home-content">
			<view class="home-item">
				<image src="../../static/home/my-jianxiu.png" @tap="toPage('report')"></image>
				<view class="title">综合监测</view>
			</view>
			<view class="home-item" @tap="toPage('shift-repair')">
				<image src="../../static/home/gb-jianxiu.png"></image>
				<view class="title">工班检修任务</view>
			</view>
			<view class="home-item" @tap="toPage('electronic')">
				<image src="../../static/home/dianzi.png"></image>
				<view class="title">电子报班</view>
			</view>
			<view class="home-item" @tap="toPage('new-trouble')">
				<image src="../../static/home/gz-dengji.png" ></image>
				<view class="title">故障登记</view>
			</view>
			<view class="home-item" @tap="toPage('trouble-manage')">
				<image src="../../static/home/gz-guanli.png"></image>
				<view class="title">故障管理</view>
			</view>
			
			<view class="home-item" @tap="toPage('knowledge')">
				<image src="../../static/home/shiping.png"></image>
				<view class="title">知识库</view>
			</view>
			
			<view class="more-wrapper">
				<view class="more-item" @tap="showTip">
					<image src="../../static/home/sousuo.png"></image>
					<view>搜索</view>
				</view>
				<view class="more-item" @tap="showTip">
					<image src="../../static/home/tianjia.png"></image>
					<view>添加</view>
				</view>
				<view class="more-item" @tap="showTip">
					<image src="../../static/home/more.png"></image>
					<view>更多</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			toPage(page) {
				let url = `../${page}/${page}`
				uni.navigateTo({
					url,
					animationType: 'pop-in',
					animationDuration: 300
				})
			},
			showTip() {
				uni.showToast({
					title: '正在开发中～',
					icon: 'none'
				})
			}
		}
		
	}
</script>

<style>
	page{
		height: 100%;
		width: 100%;
	}
	.home-wrapper{
		font-family: GBK Regular;
		position: relative;
		overflow-x: hidden;
		height: 100%;
		width: 100%;
	}
	.home-head{
		background: #5886fc;
		width: 100%;
		color: #fff;
		font-size: 16px;
		height: 250px;
		align-items: center;
		border-radius: 0 0 15% 15%;
		padding-top: 50rpx;
		overflow: hidden;
	}
	.head-bg{
		width: 400rpx;
		height: 220rpx;
		position: absolute;
		right: -100rpx;
		top: -10rpx;
	}
	.home-head-content{
		width: 660rpx;
		margin: 0 auto;
		position: relative;
	}
	.home-head-content .message{
		position: absolute;
		right: 0;
		top: -20rpx;
	}
	.home-head-content .message image{
		width: 48rpx;
		height: 48rpx;
	}
	 .message-num{
		position: absolute;
		right: -14rpx;
		top: -10rpx;
		width: 34rpx;
		height: 34rpx;
		line-height: 34rpx;
		border-radius: 50%;
		background: red;
		color: #fff;
		text-align: center;
	}
	.home-content{
		width: 660rpx;
		height: 800rpx;
		box-sizing: border-box;
		position: absolute;z-index: 99;
		top: 100px;
		left: 50%;
		transform: translateX(-50%);
		background: #fff;
		box-shadow: 0 0 20rpx #999;
		border-radius: 10px;
		padding-top: 80rpx;
		/* padding: 60rpx 15rpx; */
		overflow: hidden;
		/* display: flex;
		flex-wrap: wrap;
		flex-direction: row; */
	}
	.home-item{
		float: left;
		width: 220rpx;
		text-align: center;
		margin-bottom: 120rpx;
	}
	.home-item image{
		width: 64rpx;
		height: 64rpx;
	}
	.home-item .title{
		color: #333;
		font-size: 14px;
		line-height: 20px;
		margin-top: 20rpx;
		font-family: GBK Regular;
	}
	.more-wrapper{
		width: 600rpx;
		height: 80rpx;
		position: absolute;
		bottom: 60rpx;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 40rpx;
		display: flex;
		box-shadow: 0 0 6rpx #999;
		padding: 5rpx 0;
		
	}
	.more-item{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 14px;
		font-family: GBK Regular;
	}
	.more-item image{
		width: 40rpx;
		height: 40rpx;
	}
</style>
