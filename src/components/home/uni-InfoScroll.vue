<template name='infoScroll'>
	<view class="infoScrollView">
		<view class="infoScrolContent">
			<view class="infoIcon">
				<image class="infoIconimg" src='../../../static/img/home/infoIcon@2x.png'></image>
			</view>
			<view class="infoContent">
				<swiper class="swiper" :circular="true" :indicator-dots="indicatorDots" :vertical = "true" :autoplay="autoplay" :interval="interval" :duration="duration">
					<!-- <block > -->
						<swiper-item v-for="(item, index) in todayAddData" :key="index" class="infoItemView">
							<text class="infoItemTitle">今日新增:</text>
							<text>{{item.title}}</text>
						</swiper-item>
					<!-- </block> -->
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'infoScroll',
		props: ['todayAddData'],
		data() {
			return {
				indicatorDots: false,
				autoplay: true,
				interval: 2000,
				duration: 500,
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.infoScrollView{
		padding: 0 30upx;
		padding-top: 40upx;
	}
	.infoScrolContent {
		width: 100%;
		display: flex;		
		flex-direction: row;
		align-items:center;
		height: 44upx;
	},
	.infoIcon {
		width: 44upx;
		height: 44upx;
		margin-right: 10upx;
	},
	.infoIconimg {
		width: 100%;
		height: 100%;
	},
	.infoContent {
		flex: 1;
		height: 44upx;
	}
	.swiper {
		height: 44upx;
	},
	.infoItemView {
		display: flex;
		font-size: 28upx;
		color: #000000;
		align-items: center;
		justify-content: flex-start;
	},
	.infoItemTitle {
		margin-right: 10upx;
	}

</style>
