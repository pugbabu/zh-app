<template>
	<view class="container">
		<view class="header">
			<v-episode class="episode" :index="classic.index" />
			<view class="like-container">
				<v-like class="like" @like="onLike" :like="likeStatus" :count="likeCount" />
				<image @tap="share" class="share" src="../../static/share.png" />
			</view>
		</view>
		<v-movie :img="classic.image" :content="classic.content"></v-movie>
		    <v-navi @left="onNext" @right="onPrevious" :title="classic.title" :first="first" :latest="latest" class="navi" />

	</view>
</template>

<script>
	import VEpisode from '@/components/episode/episode.vue'
	import VLike from '@/components/like/like.vue'
	import VMovie from '@/components/movie/movie.vue'
	import VNavi from '@/components/navi/navi.vue'
	export default {
		data() {
			return {
				classic: {
					index: 1,
					title: '李安《饮食男女》',
					content: '人生不能像做菜，把所有的料准备好才下锅',
					image: 'https://img3.doubanio.com/view/movie_gallery_frame_hot_rec/normal/public/22f4b036a58a361.jpg'
				},
				likeStatus: true,
				likeCount: 7,
				latest: true,
				first: false,
			}
		},
		components: {
			VEpisode,
			VLike,
			VMovie,
			VNavi
		},
		methods: {
			onLike() {

			},
			share() {
				uni.showToast({
					title: '功能暂未开发!',
					duration:1000
				});
			},
			onNext() {
				
			},
			onPrevious() {
				
			}
		}
	}
</script>

<style scoped>
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.header {
		width: 100%;
		display: flex;
		flex-direction: row;
		height: 100rpx;
		align-items: center;
		justify-content: space-between;
		border-top: 1px solid #f5f5f5;
		border-bottom: 1px solid #f5f5f5;
	}

	.episode {
		margin-left: 20rpx;
		margin-top: 4rpx;
	}

	
	.navi {
		position: absolute;
		bottom: 40rpx;
	}

	.like-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-right: 30rpx;
	}


	.share {
		width: 40rpx;
		height: 40rpx;
	}
</style>
