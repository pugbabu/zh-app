<template>
	<view class="classic-container">
    <image class="classic-img" :src="img"  />
    <image class="tag" src="../../static/movie@tag.png" />
    <text class="content" >{{content}}</text>
</view>
</template>

<script>
	export default {
		props:['img', 'content'],
		data() {
			return {
				
			}
		}
	}
</script>

<style>
	@import url("../../common/classic.css");
</style>
