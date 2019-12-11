<template>
	<view class="success-wrapper">
		<view class="success-icon">
			<image src="../../static/shift/success.png"></image>
		</view>
		<view class="success-title">任务领取成功</view>
		<view class="success-tip">将自动为您跳转至上级页面</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		created() {
			setTimeout(() => {
				uni.navigateBack({
					animationDuration:300,
					animationType:'pop-out'
				})
			}, 1500)
		}
	}
</script>

<style>
	.success-wrapper{
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-top: 200rpx;
	}
	.success-icon{
		display: flex;
		justify-content: center;
	}
	.success-icon image{
		width: 100rpx;
		height: 100rpx;
	}
	.success-title{
		font-size: 16px;
		color: #5886fc;
		line-height: 20px;
		margin-top: 40rpx;
		text-align: center;
	}
	.success-tip{
		font-size: 14px;
		color: #666;
		text-align: center;
		margin-top: 20rpx;
	}
</style>
