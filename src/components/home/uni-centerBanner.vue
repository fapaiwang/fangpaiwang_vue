<template name='centerBanner'>
	<view class="uni-padding-wrap">
	    <view class="page-section swiper">
	        <view class="page-section-spacing">
	            <swiper class="swiper" :circular="true" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item v-for="(item,index) in centerBannerdata" :key="index">
						<image class="swiper-item" :src="getImgUrl(item.setting.fileurl)"></image>
	                </swiper-item>
	                
	            </swiper>
	        </view>
	    </view>
	</view>
</template>

<script>
	export default {
		name: 'centerBanner',
		props:["centerBannerdata"],
		data() {
			return {
				indicatorDots: false,
				autoplay: true,
				interval: 2000,
				duration: 500,
			}
		},
		methods: {
			getImgUrl(icon){
			   return `http://fangpaiwang.com/${icon}`;
			},
		}
	}
	
</script>

<style>
	.uni-padding-wrap{
		margin-top: 45upx;
		padding: 0 30upx;
		
	}
	.swiper-item {
		border-radius: 10upx;
		height: 100%;
		width: 100%;
	}
	.swiper {
		height: 172upx;
	}
</style>
