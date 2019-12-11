<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import "common/main.css";
	@import "common/icon.css";
	/*每个页面公共css */
	uni-page-head .uni-page-head{
		/* background: #0084ff !important; */
		/* color: #fff !important; */
	}
	input{
		caret-color: #5886fc;
	}
</style>
