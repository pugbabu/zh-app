<template>
	<view class="wrapper">
		<view class="index-container">
			<text class="plain">No.</text>
			<text class="index">{{ind}}</text>
			<view class="line"></view>
		</view>
		<view class="date-container">
			<text class="month">{{month}}</text>
			<text class="year">{{year}}</text>
		</view>
	</view>

</template>

<script>
	export default {
		props: ['index'],
		data() {
			return {
				months: [
					'一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月',
					'十二月'
				],
				year: 0,
				month: '',
			}
		},
		computed: {
			ind() {
				return this.index < 10 ? '0' + this.index : this.index
			}
		},
		created() {
			this.init()
		},
		methods: {
			init() {
				let date = new Date()
				let year = date.getFullYear()
				let month = date.getMonth()
				console.log(month);
				this.year = year
				this.month = this.months[month]
			}
		}
	}
</script>

<style scoped>
	.wrapper {
		width: 60px;
		height: 60rpx;
		display: inline-flex;
		flex-direction: row;
	}

	.index-container {
		display: flex;
		flex-direction: row;
		align-items: baseline;
	}

	.plain {
		font-size: 32rpx;
	}


	.index {
		font-size: 60rpx;
		line-height: 60rpx;
		font-weight: 800;
		margin-right: 14rpx;
	}

	.line {
		height: 44rpx;
		margin-right: 14rpx;
		border-left: 1px solid black;
	}


	.date-container {
		display: flex;
		flex-direction: column;
		margin-top: 6rpx;
	}

	.month {
		font-size: 24rpx;
		line-height: 24rpx;
	}

	.year {
		font-size: 20rpx;
	}
</style>
