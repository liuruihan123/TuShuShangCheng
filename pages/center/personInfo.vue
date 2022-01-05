<template>
	<view class="wrap u-p-20">
		<view class="content">
			<input class="u-border-bottom u-p-20" v-model="name" placeholder="请输入昵称" />
			<u-button type="primary" @click="submit">提交</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '', // 昵称
			}
		},
		onLoad(options){
			this.name = options.name
		},
		methods: {
			// 登录提交
			async submit() {
				if (!this.name) return this.$u.toast('昵称不能为空');
				// 更新用户信息
				await this.$u.api.userInfoUpdate({name:this.name})
				this.$u.toast('更新用户信息成功')
				
				this.$u.utils.updateUserInfo()
				// 跳转到个人中心
				this.$u.route({
					type:'switchTab',
					url: 'pages/center/index'
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	.u-border-bottom {
		margin-bottom: 40rpx !important;
	}

</style>
