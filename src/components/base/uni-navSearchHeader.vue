<template name="uni-navSearchHeader">
	<view class="header-wrap">
			 <view class="index-header">
				<view  @click="onPickCityClick" class="addressView">
					<text class="address">北京</text>
					<image class="arrowIcon" src='../../../static/img/base/arrow@2x.png'></image>
				</view>
				
				<view class="input-wrap">
					<image class="iconfangdajing" src='../../../static/img/base/searchIcon@2x.png'></image>
					<input maxlength="140"
						step="" 
						placeholder="输入小区名称" 
						autocomplete="off" 
						type="search"
						v-model="value"
						@change="inputChange"
						placeholder-class="uni-inputPlaceholder"
						class="uni-input">
				</view>
				<view class="user-wrap"
					  @click="goUserClick">
					  <image class="userIconfont" src='../../../static/img/base/userIcon@2x.png'></image>
				</view>
			 </view>
		 </view>
</template>

<script>
	export default {
		name: "uni-navSearchHeader",
		 
		data () {
			return {
				value: ''
			}
		},
		methods: {
			
			inputChange: function () {
				this.$emit('returnInputDate',this.value)
			},
			goUserClick: function () {
				this.$emit("goUserClick")
			},
			onPickCityClick: function() {
				this.$emit("goPickCityClick")
			}
		}
	}
	
</script>

<style>
	.header-wrap {
		height: 78upx;
		padding: 0 30upx;	
		padding-top: 40upx;
	},
	
	.index-header {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items:center;	    
	},
	

	.addressView{
		width: 114upx;
		display: flex;
		flex-direction: row;
		align-items:center;
	}
	.addressView .arrowIcon {
		margin-left: 10upx;
		width: 16upx;
		height: 16upx;
	},
	.address {
	    font-size: 26upx;
		color: #000;
	},
	
	.input-wrap {
		display: flex;
		flex: 1;
		flex-direction: row;
		align-items:center;	    
	    height: 78upx;
		border: 1upx solid #EBEBEB;
	    background-color: #fff;
	    border-radius: 50upx;
	},
	
	.uni-input {
		flex: 1;
		display: block;
		height: 100%;
		color: #999;
		opacity: 1;
		font-size: 24upx;
		-webkit-text-fill-color: currentcolor;
	},
	.uni-inputPlaceholder {
		color: #999999;
	}
	
	.iconfangdajing {
		width: 32upx;
		height: 32upx;
		margin-left: 27upx;
		margin-right: 15upx;
	}
	
	.user-wrap {
		display: flex;
		align-items:center;
		justify-content:flex-end;
		width: 76upx;
	},
	
	
	 .user-wrap .userIconfont {
	    width: 44upx;
	    height: 44upx;
	},
	.input-wrap text{
		position: absolute;
		left: 40upx;
		top: -8upx;
		color: #000;
		font-size: 30upx;
	}
</style>
