<template>
	<view class="login-wrapper">
		<view class="login-head">
			<image class="logo" src="../../static/zh_logo.png"></image>
			<view>众合智相伴，运维无难事</view>
		</view>
		<form class="login-form">
		                
			<view class="form-item">
				<!-- <view class="title">用户名：</view> -->
				<input v-if="!errorFlag" @blur="handleBlur" v-model="username" class="form-item-input" type="text" placeholderClass="input-placeholder" maxlength="20" placeholder="请输入用户名" name="username" />
				<input v-else @blur="handleBlur" v-model="username" class="form-item-input" type="text" placeholderClass="error-placeholder" maxlength="20" placeholder="请输入用户名" name="username" />
			</view>
			<view class="form-item">
				<!-- <view class="title">密码：</view> -->
				<input v-if="!pwdErrorFlag" @blur="handlePwdBlur"  v-model="password" type="password" class="form-item-input" name="password" placeholder-class="input-placeholder" placeholder="请输入密码" />
				<input v-else="pwdErrorFlag" @blur="handlePwdBlur"  v-model="password" type="password" class="form-item-input" name="password" placeholder-class="error-placeholder" placeholder="请输入密码" />
			</view>
			<view class="form-item">
				<text class="tip">登录即同意《众合科技协议》《隐私保护指引》</text>
			</view>
			<view class="form-item">
				<button @tap="login" class="login-button">登录</button>
				<!-- <button @tap="register" class="login-button" type="default">注册</button> -->
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				errorFlag: false,
				pwdErrorFlag: false
			}
		},
		methods: {
			login() {
				if (!this.username) {
					uni.showToast({
					    title: '用户名不能为空',
					    duration: 1000
					});
					return
				}
				if (!this.password) {
					uni.showToast({
					    title: '密码不能为空',
					    duration: 1000,
						icon: 'none'
					});
					return
				}
				uni.switchTab({
					url: '/pages/work-sheet/work-sheet'
				})
			},
			register() {
				
			},
			handleBlur() {
				console.log((this.username))
				if (!this.username) {
					this.errorFlag = true
				}
			},
			handlePwdBlur() {
				if (!this.password) {
					this.pwdErrorFlag = true
				}
			}
		}
	}
</script>

<style lang="less">
.login-wrapper{
	// background: #5aa2e8;
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	// padding-top: 100rpx;
}
.login-head{
	background: #0084ff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	color: #fff;
	font-size: 16px;
	height: 150px;
	align-items: center;
}
.login-wrapper .logo{
	width: 280rpx;
	height: 56rpx;
	margin-bottom: 20px;
	
}
.login-form{
	width: 100%;
	padding: 16px;
	box-sizing: border-box;
	// margin-top: 100rpx;
}
.form-item{
	display: flex;
	margin-bottom: 30rpx;
	// padding: 16px;
	
}
.form-item .title{
	text-align: right;
	width: 180rpx;
	color: #17233d;
}
.form-item-input{
	background: #fff;
	width: 100%;
	// border-radius: 5rpx;
	height: 48px;
	padding-left: 10rpx;
	border-bottom: 1rpx solid #ebebeb;
	// padding-bottom: 20rpx;
	color: #1a1a1a;
	line-height: 24px;
	font-size: 14px;
	font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
}
.input-placeholder{
	color: #8590a6;
}
.error-placeholder{
	color: red;
}
.login-btn{
	display: flex;
	justify-content: center;
	margin-top: 30rpx;
}
.login-button{
	width: 100%;
	margin: 0 10rpx;
	color: #fff;
	background: #0084ff;
	height: 40px;
	border-radius: 3px;
	font-size: 16px;
	font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
}
.tip{
	line-height: 1.5;
	margin: 0 auto;
	margin-top: 20px;
	text-align: center;
	color: #8590a6;
	font-size: 12px;
}

</style>
