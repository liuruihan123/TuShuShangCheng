// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {
	 vm.$u.api = {};
	
	// 首页
	vm.$u.api.index = (params = {}) => vm.$u.get('api/index', params);
	
	// 认证相关的
	vm.$u.api.authLogin = (params = {}) => vm.$u.post('api/auth/login', params);// 登录
	vm.$u.api.authRegister = (params = {}) => vm.$u.post('/api/auth/register', params);// 注册
	vm.$u.api.authLogout = () => vm.$u.post('/api/auth/logout');// 退出登录
	vm.$u.api.authOssToken = () => vm.$u.get('/api/auth/oss/token');// 获取OSS Token
	
	// 用户相关的
	vm.$u.api.userInfo = () => vm.$u.get('api/user'); // 用户详情/api/user
	vm.$u.api.userInfoUpdate = (params = {}) => vm.$u.put('/api/user', params);// 更新用户信息
	vm.$u.api.userUpdateAvatar = (params = {}) => vm.$u.patch('/api/user/avatar', params);// 更新用户信息
	
	// 商品相关
	vm.$u.api.goodsDetail = goodsId => vm.$u.get(`/api/goods/${goodsId}`,);// 商品详情
	vm.$u.api.goodsList = (params = {}) => vm.$u.get(`/api/goods`,params);// 商品列表
	
	// 收藏相关
	vm.$u.api.collectsCollectionAndCancel = goodsId => vm.$u.post(`/api/collects/goods/${goodsId}`);// 收藏取消
	vm.$u.api.collects = (params = {}) => vm.$u.get(`/api/collects`,params);// 我的收藏

	// 购物车相关
	vm.$u.api.cartsAdd = (params = {}) => vm.$u.post(`/api/carts`,params);// 添加购物车
	vm.$u.api.cartsList = (params = {}) => vm.$u.get(`/api/carts?include=goods`,params);// 购物车列表
	vm.$u.api.cartsNum = (cartId,params = {}) => vm.$u.put(`/api/carts/${cartId}`,params);// 购物车数量变化
	vm.$u.api.cartsDel = cartId => vm.$u.delete(`/api/carts/${cartId}`);// 移出购物车
	vm.$u.api.cartsChecked = (params = {}) => vm.$u.patch(`/api/carts/checked`,params);// 购物车改变选中
	
	// 地址相关
	vm.$u.api.addressList = () => vm.$u.get(`/api/address`);// 地址列表
	vm.$u.api.addressAdd = params => vm.$u.post(`/api/address`,params);// 新增地址
	vm.$u.api.addressDetail = id => vm.$u.get(`/api/address/${id}`);// 地址详情
	vm.$u.api.addressEdit = (id,params) => vm.$u.put(`/api/address/${id}`,params);// 地址详情
	vm.$u.api.addressDefault = id => vm.$u.patch(`/api/address/${id}/default`);// 设置默认地址
	vm.$u.api.addressDel = id => vm.$u.delete(`/api/address/${id}`);// 删除地址
	
}

export default {
	install
}