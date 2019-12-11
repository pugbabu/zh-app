<template>
	<view class="trouble-manage">
		<view class="manage-head">
			<view class="manage-head-title">故障管理</view>
			<view class="action-text">待上传</view>
		</view>
		<view class="manage-swiper">
			<!-- <swiper-dot style="height: 100%;" :dotsStyles="dotsStyles" :info="troubles" :current="current"  :mode="mode"> -->
				<swiper style="height: 100%;" class="swiper-box" @change="change">
					<swiper-item class="manage-item" style="background: #5886fc;" v-for="(item ,index) in troubles" :key="index">
						<!-- <view class="swiper-item"> -->
							<view class="trouble-item-title">{{item.title}}</view>
							<view class="trouble-item">
								<view class="trouble-item-left">
									<image src="../../static/guzhang/chezhan.png"></image>
									<text>所属车站</text>
								</view>
								<view class="trouble-item-right">
									<text>{{item.station}}</text>
								</view>
							</view>
							<view class="trouble-item">
								<view class="trouble-item-left">
									<image src="../../static/guzhang/zhuanye.png"></image>
									<text>所属专业</text>
								</view>
								<view class="trouble-item-right">
									<text>{{item.major}}</text>
								</view>
							</view>
							<view class="trouble-item">
								<view class="trouble-item-left">
									<image src="../../static/guzhang/bianma.png"></image>
									<text>设备编码</text>
								</view>
								<view class="trouble-item-right">
									<text>{{item.deviceCode}}</text>
								</view>
							</view>
							<view class="trouble-item">
								<view class="trouble-item-left">
									<image src="../../static/guzhang/jibie.png"></image>
									<text>缺陷级别</text>
								</view>
								<view class="trouble-item-right">
									<text>{{item.level}}</text>
								</view>
							</view>
							<view class="trouble-item">
								<view class="trouble-item-left">
									<image src="../../static/guzhang/neirong.png"></image>
									<text>故障内容</text>
								</view>
								<view class="trouble-item-right" style="position: relative;top: 40px;text-align: left;padding-left: 10px;">
									<text>{{item.content}}</text>
								</view>
							</view>
							<view class="trouble-item-btns">
								<view style="border-top: 1px solid #FFFDEF;padding-top: 20px;">
									<view class="trouble-btn" style="margin-right: 10px;" @tap="closeTrouble">直接关闭</view>
									<view class="trouble-btn" style="background: #fff;color: #5886fc;">转缺陷</view>
								</view>
								
							</view>
						<!-- </view> -->
					</swiper-item>
				</swiper>
			<!-- </swiper-dot> -->
		</view>
		<uni-popup ref="popup" type="bottom">
			<view class="popup-content">
				<view class="popup-title">是否直接关闭此故障</view>
				<view class="popup-confirm" @tap="$refs.popup.close()">确定</view>
				<view class="popup-cancel" @tap="$refs.popup.close()">取消</view>
			</view>
			
		</uni-popup>

	</view>
</template>

<script>
	import SwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot"
	import uniPopup from '@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue'
	export default {
		data() {
			return {
				dotsStyles: {
					backgroundColor: '#eee',
					selectedBackgroundColor: '#feb831',
					border:'none',
					selectedBorder: 'none'
					
				},
				troubles: [
					{
						title: '电扶梯不运行故障',
						station: '1号线近江站',
						major: '信号专业',
						deviceCode: 'TK2034-F',
						level: '二级',
						content: 'C出口扶梯停止不动，故障原因不明，需要维修人员查看',
						subContent: [
							
						]
					},
					{
						title: '电扶梯不运行故障',
						station: '1号线近江站',
						major: '信号专业',
						deviceCode: 'TK2034-F',
						level: '二级',
						content: 'C出口扶梯停止不动，故障原因不明，需要维修人员查看',
						subContent: [
							
						]
					}
				],
				info: [{
					content: '内容 A'
				}, {
					content: '内容 B'
				}, {
					content: '内容 C'
				}],
				current: 0,
				mode: 'round',
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: false,
				interval: 2000,
				duration: 500,
				// nextMargin: '20px'
			}
		},
		components: {
			SwiperDot,
			uniPopup
		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			},
			closeTrouble() {
				this.$refs.popup.open()
			}
		}
	}
</script>

<style>
	page {
		background: #F7F8FA;
	}

	.trouble-manage {
		padding: 0 30rpx;
	}

	.manage-head {
		display: flex;
		justify-content: space-between;
		font-family: GBK Regular;
		align-items: center;

	}

	.action-text {
		font-size: 14px;
		color: #5886fc;
	}

	.manage-head-title {
		font-size: 22px;
		color: #000000;
		opacity: 0.8;
		font-weight: 500;
		line-height: 40px;
	}

	.manage-swiper {
		margin-top: 20px;
		height: 500px;
	}

	.manage-item {
		background: #5886fc;
		border-radius: 6px;
		color: #FFF;
		font-family: GBK Regular;
		font-size: 14px;
		box-sizing: border-box;
		padding: 20rpx;
		position: relative;
	}
	.trouble-item-title{
		font-size: 24px;
		font-family: GBK Regular;
		font-weight: bold;
		line-height: 34px;
		margin-bottom: 30rpx;
		opacity: .8;
	}
	.trouble-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;
		font-family: GBK Regular;
		color: rgba(255,255,255,.8);
		margin-bottom: 30rpx;
	}
	.trouble-item-left{
		display: flex;
		align-items: center;
	}
	.trouble-item-right{
		flex: 1;
		text-align: right;
	}
	.trouble-item-left image{
		width: 16px;
		height: 16px;
		margin-right: 20rpx;
		
	}
	.trouble-item-btns{
		/* border-top: 1px solid #FFFDEF; */
		text-align: right;
		position: absolute;
		bottom: 40px;
		left: 0;
		right: 0;
		padding: 0 20rpx;
		box-sizing: border-box;
	}
	.trouble-btn{
		padding: 10rpx 30rpx;
		font-size: 14px;
		font-family: GBK Regular;
		line-height: 20px;
		/* margin: 0 30rpx; */
		display: inline-block;
		border: 1px solid #FFFDEF;
		border-radius: 20px;
	}
	.popup-content{
		background: #fff;
	}
	.popup-title{
		line-height: 40px;
		font-size: 14px;
		text-align: center;
		color: #333;
	}
	.popup-confirm{
		border-top: 1px solid #999;
		line-height: 40px;
		font-size: 14px;
		text-align: center;
		color: #FEB831;
	}
	.popup-cancel{
		border-top: 1px solid #999;
		line-height: 40px;
		font-size: 14px;
		text-align: center;
		color: #333;
	}
	
</style>
