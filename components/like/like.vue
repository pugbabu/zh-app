<template>
	<view @tap="onLike" class="like-container">
		<image :src="src" />
		<text>{{countData}}</text>
	</view>
</template>

<script>
	export default {
		props: ['like', 'count', 'readOnly'],
		data() {
			return {
				yesSrc: require('@/static/like.png'),
				noSrc: require('@/static/like@dis.png'),
				likeData: null,
				countData: null
			}
		},
		computed: {
			src() {
				return this.likeData ? this.yesSrc : this.noSrc
			}
		},
		created() {
			this.likeData = this.like
			this.countData = this.count
		},
		methods: {
			onLike() {
				// 自定义事件
				if (this.readOnly) {
					return
				}
				this.likeData = !this.likeData
				this.countData = this.likeData ? this.countData-- : this.countData++
				// 激活
				this.$emit('like', {
					behavior: this.likeData ? 'like' : 'cancel'
				})
			}
		}
	}
</script>

<style>
	/* components/like/index.wxss */

	.like-container {
		display: inline-flex;
		flex-direction: row;
		padding: 10rpx;
		/* width: 90rpx; */
	}

	.like-container image {
		width: 32rpx;
		height: 28rpx;

	}

	.like-container text {
		/* 苹方  思源 */
		/* font-family: "PingFangSC-Thin"; */
		font-size: 24rpx;
		line-height: 24rpx;
		color: #bbbbbb;
		position: relative;
		bottom: 10rpx;
		left: 6rpx;
	}
</style>
