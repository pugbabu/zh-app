<template>
	<view class="my-container">
		<image src="../../static/my/my@bg.png" class="bg"></image>
		<view class="avatar-container avatar-position">
			<image src="https://shopnc-oss.oss-cn-hangzhou.aliyuncs.com/platform/87e1b00d-69d7-47e4-89d9-8130dd238e9f.jpeg"
			 class="avatar" />
			<text>Unittec-小众</text>
		</view>
		<view class="about-container">
			<view bind:tap="onJumpToAbout" class="about-us">
				<image src="../../static/my/about.png" />
				<text class="description">个人信息</text>
			</view>
			<view class="about-us">
				<text class="book-num">8</text>
				<text class="description">待处理</text>
			</view>
		</view>
		<view class="my-content">
			<view class="my-item">
				<view class="label">待处理</view>
				<view class="to-do-list">
					<view class="to-do-item">
						<view>ATS设备故障</view>
						<view class="status">待响应</view>
					</view>
					<view class="to-do-item">
						<view>板卡故障</view>
						<view class="status">待响应</view>
					</view>
					<view class="to-do-item">
						<view>CC故障</view>
						<view class="status" style="background: #2db7f5;">处理中</view>
					</view>
					<view class="to-do-item">
						<view>ZC故障</view>
						<view class="status" style="background: #2db7f5;">处理中</view>
					</view>
					<view class="to-do-item">
						<view>计轴故障</view>
						<view class="status" >待响应</view>
					</view>
					<view class="to-do-item">
						<view>电源屏故障</view>
						<view class="status" style="background: #2db7f5;">处理中</view>
					</view>
					<view class="to-do-item">
						<view>CBI故障</view>
						<view class="status">待响应</view>
					</view>
					<view class="to-do-item">
						<view>ZC故障</view>
						<view class="status" style="background: #2db7f5;">处理中</view>
					</view>
				
					
				</view>
			</view>
			<view class="my-item">
				<view class="label">我的订阅</view>
				<view class="tag-list">
					<view class="tag">
						ZC
						<view class="tag-number">5个报警</view>
					</view>
					<view class="tag">
						CC
						<view class="tag-number" style="color: #ff9900;">2个异常</view>
					</view>
					<view class="tag">
						ATS
						<view class="tag-number">2个报警</view>
					</view>
					<view class="tag">
						CBI
						<view class="tag-number" style="color: #ff9900;">2个异常</view>
					</view>
					<view class="tag">
						DTI
						<view class="tag-number" style="color: #ff9900;">3个异常</view>
					</view>
					<view class="tag">
						计轴
						<view class="tag-number">2个报警</view>
					</view>
				</view>
			</view>
		</view>
		

	</view>
</template>

<script>
	import VPreview from '@/components/preview/preview.vue'
	export default {
		data() {
			return {
				
			}
		},
		components: {
			VPreview
		}
	}
</script>

<style>
	.my-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.bg {
		width: 750rpx;
		height: 574rpx;
	}

	.avatar-position {
		position: absolute;
		top: 255rpx;
		left: 50%;
		transform: translateX(-50%);
	}

	.my-img {
		width: 120rpx;
		height: 120rpx;
	}

	.avatar-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.avatar {
		width: 120rpx;
		height: 120rpx;
		overflow: hidden;
		border-radius: 50%;
	}

	.about-container {
		padding: 0 100rpx;
		width: 550rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		position: absolute;
		top: 440rpx;
	}

	.about-us image {
		width: 34rpx;
		height: 34rpx;
	}

	.preview-container {
		margin-top: 30rpx;
		width: 690rpx;
		display: flex;
		flex-direction: row;
		padding: 0 30rpx;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.preview {
		margin-bottom: 30rpx;
	}

	.about-us {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.book-num {
		font-size: 36rpx;
		color: #000000;
	}

	.description {
		font-size: 24rpx;
		color: #999999;
	}

	.about-container>view:nth-child(2) {
		margin-top: -5rpx;
	}

	.my-content{
		width: 100%;
		display: flex;
		flex-direction: column;
		padding-bottom: 50px;
	}
	.my-item{
		padding: 0 30rpx;
		/* display: flex; */
		/* justify-content: flex-start; */
	}
	.label{
		color: #000;
		font-size: 17px;
		line-height: 45px;
		font-weight: 700;
		border-bottom: 1px solid #ebebeb;
		margin-bottom: 10px;
	}
	.to-do-list{
		display: flex;
		flex-wrap: wrap;
	}
	.to-do-item{
		display: flex;
		font-size: 14px;
		color: #333;
		align-items: center;
		margin: 20rpx 0;
		width:50%;
	}
	.status{
		background: #ff9900;
		/* border: 1px solid #ff9900; */
		height: 24px;
		font-size: 12px;
		line-height: 24px;
		border-radius: 3px;
		padding: 0 10px;
		color: #fff;
		margin-left: 20rpx;
	}
	.tag-list{
		display: flex;
		flex-wrap: wrap;
	}
	.tag-list .tag{
		text-align: center;
		border: 1px solid #19be6b;
		font-size: 12px;
		color: #1a1a1a;
		line-height: 20px;
		margin-right: 30rpx;
		border-radius: 4px;
		margin-bottom: 20rpx;
	}
	.tag-number{
		border-top: 1px solid #19BE6B;
		padding: 0 20rpx;
		color: red;
	}
	
</style>
