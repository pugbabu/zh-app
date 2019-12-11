<template>
	<view class="cu-bar tabbar bg-white shadow foot">
		<view class="action" @click="NavChange" data-cur="tuzhi">
			<view class='cuIcon-cu-image'>
				<image v-if="pageUrl == 'tuzhi'" src="../../static/knowledge/tuzhi-active.png"></image>
				<image v-else src="../../static/knowledge/tuzhi.png"></image>
			</view>
			<view>图纸</view>
		</view>
		<view class="action text-gray add-action" @click="NavChange" data-cur="upload">
			<button class="cu-btn cuIcon-add bg-green shadow"></button>
			上传
		</view>
		<view class="action" @click="NavChange" data-cur="shipin">
			<view class='cuIcon-cu-image'>
				<image v-if="pageUrl == 'shipin'" src="../../static/knowledge/shipin-active.png"></image>
				<image v-else src="../../static/knowledge/shipin.png"></image>
			</view>
			<view>视频</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageUrl: 'tuzhi',
			}
		},
		methods: {
		   NavChange(e) {
				this.pageUrl = e.currentTarget.dataset.cur
		   }
		}
	}
</script>

<style>
</style>
