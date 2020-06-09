<template>
	<scroll-view class="wuc-tab" :class="tabClass" :style="tabStyle" scroll-with-animation scroll-x :scroll-left="scrollLeft">
	  <div class='wuc-tab-view' v-if="!textFlex">
	    <div class="wuc-tab-item" :class="[index === tabCur ? selectClass + ' cur':'']" v-for="(item,index) in tabList" :key="index" :id="index" @tap="tabSelect(index,$event)">
	      <span>{{item.name}}</span>
		  <div class='link' :class="index === tabCur ? selectlinkClass:''" ></div>
		  
	    </div>
	  </div>
	
	  <div class="text-center wuc-tab-view" v-if="textFlex">
	    <div class="wuc-tab-item" :class="index === tabCur ? selectClass + ' cur':''" v-for="(item,index) in tabList" :key="index" :id="index" @tap="tabSelect(index,$event)">
	      <span>{{item.name}}</span>
		  <div class='link' :class="index === tabCur ? selectlinkClass:''" ></div>
	    </div>
	  </div>
	</scroll-view>
</template>

<script>
export default {
	name: 'wuc-tab',
	data() {
		return {};
	},
	props: {
		tabList: {
			type: Array,
			default() {
				return [];
			}
		},
		tabCur: {
			type: Number,
			default() {
				return 0;
			}
		},
		tabClass: {
			type: String,
			default() {
				return '';
			}
		},
		tabStyle: {
			type: String,
			default() {
				return '';
			}
		},
		textFlex: {
			type: Boolean,
			default() {
				return false;
			}
		},
		selectClass: {
			type: String,
			default() {
				return 'text-white';
			}
		},
		selectlinkClass: {
			type: String,
			default() {
				return 'selectlink'
			}
		}
	},
	methods: {
		tabSelect(index, e) {
			if (this.currentTab === index) return false;
			this.$emit('update:tabCur', index);
			this.$emit('change', index);
		}
	},
	computed: {
		scrollLeft() {
			return (this.tabCur - 1) * 60;
		}
	}
};
</script>
<style>
	div,
	scroll-view,
	swiper {
		box-sizing: border-box;
	}
	.wuc-tab {
		width: 100%;
	    white-space: nowrap;
	},
	.wuc-tab-view {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.wuc-tab-item {
		display: flex;
		flex-direction: column;
		font-size: 28upx;
		color: #999;
		margin-left: 40upx;
		align-items: center;
	}
	.flex {
	    display: flex;
	}
	.text-center {
	    text-align: center;
	}
	.flex-sub {
	    flex: 1;
	}
	.link {
		width: 30upx;
		height: 6upx;
		background-color: #FFFFFF;
		margin-top: 8upx;
	}
	.selectlink {
		background-color: #DF2E24;
	}
	
	.text-white{
	  color:#333;
	  /* height: 50upx;
	  line-height: 50upx; */
	}
	.bg-white{
	    background-color: #ffffff;
	}
	.bg-blue{
	    background-color: #0081ff;
	}
	.text-orange{
	  color: #f37b1d
	}
	
	.text-xl {
		font-size: 36upx;
	}
</style>
	