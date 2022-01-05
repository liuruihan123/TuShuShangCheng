<template>
	<navigator class="goods-item" :url="'/pages/goods/detail?goodsId='+good.id">
		<u-image class="u-skeleton-fillet" width="100%" height="300rpx" :src="good.cover_url"></u-image>
		<view class="name u-line-1 u-skeleton-rect">{{good.title ? good.title : '商品名称'}}</view>
		<view class="u-flex u-row-between">
			<view class="price u-skeleton-rect">￥ {{good.price}}</view>
			<view class="sales u-skeleton-rect">销量: {{good.sales}}</view>
		</view>
	</navigator>
</template>

<script>
	export default {
		name: "goods-card",
		props:{
			good: {
				type: Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods-item {
		padding: 20rpx;
		margin-bottom: 20rpx;
		box-shadow: 0 12rpx 20rpx rgba(0, 0, 0, .1);

		// 标题
		.name {
			font-size: 32rpx;
			font-weight: bold;
			margin-top: 20rpx;
			margin-bottom: 20rpx;
			width: 100%;
		}

		// 价格
		.price {
			width: 40%;
			color: red;
		}

		// 销量
		.sales {
			width: 40%;
			color: #888;
		}
	}
</style>
