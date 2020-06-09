<template name="featured">
	<view class="featuredView">
		<view class="featuredtTitleView">
			<view class="titleText">
				<text>精选小区</text>
			</view>
			<image class="tieleImg" src='../../../static/img/base/left@2x.png'></image>
			
		</view>
		<view class="page-section swiper">
		    <view class="page-section-spacing">
				<scroll-view class="tab-container" scroll-x="true" @scroll="scroll" scroll-left="120">
					<block v-for="(item, index) in qualityEstateData" :key="index">
						<view class="item">
							<view class="img">
							  <image :src="imgUrl(item.img)" mode=""></image>
							</view>
							<view class="titleinfoView">
								<view class="titleView">
									<text>{{item.title}}</text>
								</view>
								<view class="titleInfo">
									<view class="second_total">
										<text>房源<text style="color: #DF2D23">{{item.second_total}}</text>套</text>
									</view>
									<view class="price">
										<text style="color: #DF2D23">{{item.second_total}}元/㎡</text>
									</view>
								</view>
							</view>
						</view>
					</block>           
				</scroll-view>
		    </view>
		</view>
	</view>
</template>

<script>
	
	export default {
		name: 'featured',
		props: ['qualityEstateData'],
		data() {
			return {
				indicatorDots: false,
				autoplay: true,
				interval: 2000,
				duration: 500,
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			}
		},
		methods: {
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			imgUrl(icon) {
				return `http://fangpaiwang.com/${icon}`;
			},
		}
	}
</script>

<style>
	scroll-view {
	  width: 100%;
	  white-space: nowrap;  // 不让它换行
	}
	
	.item {
	  width: 49%;
	  padding-right: 20upx;
	  display: inline-block;
	  vertical-align: top;
	 }
	 .img {
		display: inline-block;
		width: 100%;
		height: 208upx;
	}
	.img image {
	  width: 100%;
	  height: 100%;
	  border-radius: 10upx;
	}
	.titleView {
		padding-top: 19upx;
		padding-bottom: 14upx;
		font-size: 28upx;
	}
	.titleView text {
		font-size: 28upx;
		color: #333333;
	}
	.titleinfoView {
		width: 100%;
		padding-right: 20upx;
	}
	.titleInfo {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-right: 20upx;
		font-size: 24upx;
	}
	.second_total text{
		color: #333333;
	}
	
	.price text{
		color: #333333;
		font-size: 28upx;
	}
	
	
	.featuredView {
		margin-top: 45upx;
		padding: 0 30upx;
	}
	.featuredtTitleView {
		height: 38upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 30upx;
	}
	.titleText{
		font-size: 40upx;
		color: #333333;
	},
	.tieleImgView {
		height: 38upx;
		width: 32upx;
	}
	.tieleImg{
		height: 32upx;
		width: 32upx;
	},
	.featuredtSwiper {
		height: 348upx;
	}
</style>
