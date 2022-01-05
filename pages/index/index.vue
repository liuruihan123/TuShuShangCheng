<template>
	<view>
		<!-- 轮播图 -->
		<view class="wrap">
			<u-swiper :list="swiperList" height="320" name="img_url"></u-swiper>
		</view>

		<!-- 导航栏 -->
		<view class="nav u-text-center u-m-t-20">
			<u-tabs :list="navList" :current="currentIndex" bar-width="100" item-width="160" @change="navChange">
			</u-tabs>
		</view>

		<!-- 内容区域 -->
		<view class="content u-skeleton">
			<u-row gutter="16">
				<u-col span="6" v-for="(item,index) in goodsList" :key="index">
					<goods-card :good="item"></goods-card>
				</u-col>
			</u-row>
		</view>
		
		<!-- 骨架屏 -->
		<u-skeleton :loading="loading" :animation="true" bgColor="#FFF"></u-skeleton>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [], // 轮播图列表
				navList: [{
					name: '默认'
				}, {
					name: '销量'
				}, {
					name: '推荐'
				}, {
					name: '最新'
				}], // 导航栏数据
				currentIndex: 0, // 当前选中导航栏下标
				goodsList: [{},{},{},{}],// 商品列表
				page: 1,// 当前页
				loading: false,// 骨架屏的显示与隐藏
			}
		},
		onLoad() {
			this.getIndexData();
		},
		onReachBottom() {
			// 重新拉去数据
			this.page += 1;
			this.getIndexData()
		},
		methods: {
			// 获取首页数据、
			async getIndexData(){
				this.loading = true; // 显示骨架屏
				let params = {
					page: this.page
				}
				
				// 导航栏判断
				if(this.currentIndex === 1) params.sales = 1;
				if(this.currentIndex === 2) params.recommend = 1;
				if(this.currentIndex === 3) params.new = 1;
				
				const res = await this.$u.api.index(params);
				this.loading = false; // 隐藏骨架屏
				this.swiperList = res.slides; // 轮播图数据赋值
				this.goodsList = this.goodsList.pop().title ? [...this.goodsList,...res.goods.data] : res.goods.data; // 商品列表赋值
			},
			// 导航栏切换
			navChange(index) {
				this.currentIndex = index;
				// 清空数据列表
				this.goodsList = [{},{},{},{}];
				// 重置页数
				this.page = 1;
				// 请求数据
				this.getIndexData();
			},
		}
	}
</script>

<style lang="scss" scoped>

</style>
