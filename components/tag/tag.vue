<template>
	<view class="tag-container tag-class ">
		<slot name="before"></slot>
		<text>{{text}}</text>
		<slot name="after"></slot>
	</view>

</template>

<script>
	export default {
		props: ['text']
	}
</script>

<style>
	.tag-container {
		padding: 4rpx 12rpx;
		background-color: #f5f5f5;
		color: #666666;
		border-radius: 2px;
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
	}
</style>
