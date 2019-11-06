<template>
	<view class="navi-container">
		<image @tap="onLeft" class="icon" :src="latestData ? disLeftSrc : leftSrc" />
		<text class="title">{{title}}</text>
		<image @tap="onRight" class="icon" :src="firstData ? disRightSrc : rightSrc" />
	</view>
</template>

<script>
	export default {
		props: ['title', 'first', 'latest'],
		data() {
			return {
				disLeftSrc: require('@/static/triangle.dis@left.png'),
				leftSrc: require('@/static/triangle@left.png'),
				disRightSrc: require('@/static/triangle.dis@right.png'),
				rightSrc: require('@/static/triangle@right.png'),
				firstData: null,
				latestData: null
			}
		},
		created() {
			this.firstData = this.first;
			this.latestData = this.latest;
		},
		methods: {
			onLeft() {
				if (!this.latestData) {
					this.$emit('left', {})
				}
			},

			onRight() {
				if (!this.firstData) {
					this.$emit('right', {})
				}
			}
		}
	}
</script>
<style>
	.navi-container {
		width: 600rpx;
		height: 80rpx;
		background-color: #f7f7f7;
		border-radius: 2px;
		display: inline-flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.icon {
		height: 80rpx;
		width: 80rpx;
	}

	.title {
		font-size: 28rpx;
	}
</style>
