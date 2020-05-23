<template>
	<view class="quickConView">
		<view class="quickConContent">
			<view v-for="(item,index) in quickConData" :key="index" class="quickConItem">
				<image class="quickConItemIcon" src='../../../static/img/home/all-house@2x.png'></image>
				<text class="quickConItemText">{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:[
			'quickConData'
		],
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.quickConView {
		padding: 0 30upx;
		padding-top: 50upx;
	},
	.quickConView .quickConContent {
		width: 100%;
		display: flex;		
		flex-flow: row wrap;
		align-items:center;	    
	},
	.quickConView .quickConContent .quickConItem {
		display: flex;
		width: 25%;
		height: 144upx;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.quickConView .quickConContent .quickConItem .quickConItemIcon {
		width: 68upx;
		height: 68upx;
	},
	.quickConItemText {
		margin-top: 18upx;
		color: #333;
		font-size: 26upx;
	}
</style>
