<template name='banner'>
	<view class="uni-padding-wrap">
	    <view class="page-section swiper">
	        <view class="page-section-spacing">
	            <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item v-for="(item,index) in bannerdata" :key="index">
						<image class="swiper-item" :src="getImgUrl(item.setting.fileurl)"></image>
	                </swiper-item>
	                
	            </swiper>
	        </view>
	    </view>
	</view>
</template>

<script>
	export default {
		name: 'banner',
		props:["bannerdata"],
		data() {
			return {
				indicatorDots: false,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {
			getImgUrl(icon){
			   return "http://www.fangpaiwang.com/uploads/setting/20200416/b340e65aa8a607fd4238d52844d9de6c.jpg";
			},
		}
	}
	
</script>

<style>
	.uni-padding-wrap{
		margin-top: 25upx;
		padding: 0 30upx;
		
	}
	.swiper-item {
		border-radius: 10upx;
		height: 100%;
		width: 100%;
	}
</style>
