<template>
	<view class="my-container">
		<image src="../../static/my/my@bg.png" class="bg"></image>
		<view class="avatar-container avatar-position">
			<image src="https://shopnc-oss.oss-cn-hangzhou.aliyuncs.com/platform/87e1b00d-69d7-47e4-89d9-8130dd238e9f.jpeg"
			 class="avatar" />
			<text>大雷</text>
		</view>
		<view class="about-container">
			<view bind:tap="onJumpToAbout" class="about-us">
				<image src="../../static/my/about.png" />
				<text class="description">关于我</text>
			</view>
			<view class="about-us">
				<text class="book-num">10</text>
				<text class="description">喜欢的书</text>
			</view>
		</view>

		<view class="like-container">
			<image class="headline" src="../../static/my/like.png" />
			<view class="preview-container">
				<template v-for="(item, index) in classics">
					<v-preview class="preview" :classic="item" :key="index" />
				</template>
			</view>
		</view>

	</view>
</template>

<script>
	import VPreview from '@/components/preview/preview.vue'
	export default {
		data() {
			return {
				classics: [{
						fav_nums: 10,
						text: '电影',
						image: 'https://img1.doubanio.com/view/movie_gallery_frame_hot_rec/normal/public/b92602ba20293eb.jpg',
						content: 'Dave 失戀喪志，終日躲在姐姐家中避世，湊外甥以療情傷'
					},
					{
						fav_nums: 10,
						text: '电影',
						image: 'https://img1.doubanio.com/view/movie_gallery_frame_hot_rec/normal/public/b92602ba20293eb.jpg',
						content: 'Dave 失戀喪志，終日躲在姐姐家中避世，湊外甥以療情傷'
					},
					{
						fav_nums: 10,
						text: '电影',
						image: 'https://img1.doubanio.com/view/movie_gallery_frame_hot_rec/normal/public/b92602ba20293eb.jpg',
						content: 'Dave 失戀喪志，終日躲在姐姐家中避世，湊外甥以療情傷'
					},
					{
						fav_nums: 10,
						text: '电影',
						image: 'https://img1.doubanio.com/view/movie_gallery_frame_hot_rec/normal/public/b92602ba20293eb.jpg',
						content: 'Dave 失戀喪志，終日躲在姐姐家中避世，湊外甥以療情傷'
					},
				]
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

	.like-container {
		/* margin-top:30rpx; */
		margin-top: -13rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #f5f5f5;
	}

	.headline {
		margin-top: 30rpx;
		width: 97rpx;
		height: 42rpx;
	}

	.study {
		width: 88rpx;
		height: 88rpx;
		position: absolute;
		top: 40rpx;
		right: 45rpx;
	}
</style>
