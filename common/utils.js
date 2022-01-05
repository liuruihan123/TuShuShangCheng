// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {

	// 登录验证
	const isLogin = () => {
		// 获取页面实例  跳转登录之前的那个页面
		const currentPage = getCurrentPages().pop();
		// 获取路径和参数
		const { route, options } = currentPage;
		const keys = Object.keys(options);
		let params = '';
		if(keys.length > 0){
			params += keys.reduce((pre, current) => {
				return `${pre}${current}=${options[current]}&`
			},'?')
		}
		// 保存路径和参数
		uni.setStorageSync('uni_pages',`${route}${params.slice(0,-1)}`)
		
		// 获取token值
		const token = vm.vuex_token;
		// 判断token值
		if (!token) {
			// 提示需要登录
			vm.$u.toast('请先登录');
			// 1.5秒以后跳转到登录界面
			setTimeout(() => {
				vm.$u.route({
					type: 'reLaunch',
					url: '/pages/auth/login'
				})
			}, 1500);
			return false
		}
		return true;
	}
	
	// 更新用户信息
	const updateUserInfo = async () => {
		// 获取用户信息
		const userInfo = await vm.$u.api.userInfo()
		// 缓冲用户信息
		vm.$u.vuex('vuex_user',userInfo);
	}
	vm.$u.utils = {
		isLogin,
		updateUserInfo
	}

}

export default {
	install
}
