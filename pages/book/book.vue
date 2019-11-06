<template>
	<view v-if="!searching" class="book-container">
		<view class="header">
			<view class="box" @tap="onSearching">
				<image src="../../static/search.png" />
				<text>搜索书籍</text>
			</view>
		</view>
		<view class="sub-container">
			<image class="head-img" src="../../static/quality.png" />
			<view class="books-container">
				<template v-for="(item, index) in books">
					<v-book :book="item" :key="index"></v-book>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	import VBook from '@/components/book/book.vue'
	export default {
		data() {
			return {
				books: [
					{
						title: '忘，刑警',
						author: '陈浩基',
						fav_nums: 100,
						image: 'https://img3.doubanio.com/view/subject/m/public/s33467424.jpg'
					},
					{
						title: '半泽直树1',
						author: '池井户润',
						fav_nums: 130,
						image: 'https://img3.doubanio.com/view/subject/m/public/s33487932.jpg'
					},
					{
						title: '张岪与木心',
						author: '陈丹青',
						fav_nums: 300,
						image: 'https://img1.doubanio.com/view/subject/m/public/s33462098.jpg'
					},
					{
						title: '三月十五',
						author: '[美]桑顿·怀尔德',
						fav_nums: 1000,
						image: 'https://img9.doubanio.com/view/subject/m/public/s33472456.jpg'
					},
					{
						title: '日本書紀',
						author: '[日]舍人亲王',
						fav_nums: 100,
						image: 'https://img3.doubanio.com/view/subject/m/public/s33496954.jpg'
					},
					{
						title: '恐妻家',
						author: '[日] 伊坂幸太郎',
						fav_nums: 100,
						image: 'https://img3.doubanio.com/view/subject/m/public/s33485390.jpg'
					},
					
				],
				searching: false,
				more: ''
			}
		},
		components: {
			VBook
		},
		methods: {
			onSearching() {
				uni.showToast({
					title: '暂不能搜索，抱歉',
					duration:1000
				});
			}
		}
	}
</script>

<style>
	.book-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.sub-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #f5f5f5;
		margin-top: 100rpx;
		width: 100%;
		padding-bottom: 20px;
	}

	.box {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border-radius: 50px;
		background-color: #f5f5f5;
		height: 68rpx;
		width: 700rpx;
		color: #999999;
	}

	.header {
		position: fixed;
		background-color: #ffffff;
		height: 100rpx;
		width: 100%;
		border-top: 1px solid #f5f5f5;
		border-bottom: 1px solid #f5f5f5;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		box-shadow: 0 0 3px 0 #e3e3e3;
		z-index: 99;
	}

	.head-img {
		width: 106rpx;
		height: 34rpx;
		margin-top: 40rpx;
	}

	.box image {
		margin-right: 10px;
		width: 14px;
		height: 14px;
		margin-bottom: -2px;
	}

	.books-container {
		margin-top: 10rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 90rpx;
	}

	.books-container v-book {
		margin-bottom: 10rpx;
	}
</style>
