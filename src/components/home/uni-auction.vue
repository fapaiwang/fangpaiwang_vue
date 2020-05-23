<template name='auction'>
	<view class="auctionView">
		<view class="auctionContent">
			<view class="auctionitem">
				<view class="leftItemContent">
					
				</view>
			</view>
			<view style="width: 20upx;" />
			<view class="auctionitem">
				<view class="rightItemContent">
					<view class="rightItemContentItem">2</view>
					<view style="height: 20upx;" />
					<view class="rightItemContentItem">3</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'auction',
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.auctionView{
		padding: 0 30upx;
		padding-top: 50upx;
	},
	.auctionContent {
		width: 100%;
		display: flex;		
		flex-direction: row;
		align-items:center;
	},
	.auctionitem {
		height: 260upx;
		flex: 1;
	},
	.leftItemContent {
		height: 260upx;
		border-radius: 10upx;
		background-color: #4CD964;
	},
	.rightItemContent {
		height: 260upx;
		display: flex;
		flex-direction: column;
	},
	.rightItemContentItem {
		flex: 1;
		border-radius: 10upx;
		background-color: #4CD964;
	}
	
</style>
