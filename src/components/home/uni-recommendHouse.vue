<template>
	<view class="recommendHouseView">
		<view class="recommendHouseTitleView">
			<view class="recommendHouseTitleItem">
				<text>
					为您推荐
				</text>
			</view>
			<view class="recommendHouseTitleItem">
				<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange"></wuc-tab>
			</view>
		</view>
		<view>
			<swiper :style="{height: `${280 * houseDtat(TabCur).length}upx`}" class="quickTabSwiper" :current="TabCur" duration="300" @change="swiperChange">
			  <swiper-item v-for="(item,index) in tabList" :key="index">
				<block v-for="(items, indexs) in houseDtat(TabCur)" :key="indexs">
					<view class="houseItemView">
						<view class="houseItemImg">
							<image :src="getImgUrl(items.img)" mode=""></image>
						</view>
						<view class="houseItem">
							<view class="itemTitle">
								<text>{{items.title}}</text>
							</view>
							<view class="itemInfo">
								<text>{{`${items.room}室${items.living_room}厅 | ${items.acreage}㎡ | ${items.orientations} | ${items.toilet}`}}</text>
							</view>
							<view class="itemPrice">
								<view>
									<text>起拍价</text>
									<text class="redPrice">{{items.qipai}}万</text>
								</view>
								<view>
									<text>市场价</text>
									<text class="grayPrice">{{items.toilet}}万</text>
								</view>
							</view>
							<view class="createIime">
								<view class="createIimeIcon">
									<image src="../../../static/img/home/item@2x.png" mode=""></image>
								</view>
								<view class="createIimeIconinfo">
									<text>
										开拍时间：{{getDate(items.create_time)}}
									</text>
								</view>
							</view>
						</view>
					</view>
				</block>
				
			  </swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import WucTab from '../tab/wuc-recommendHouse.vue';
	
	export default {
		components: {
			WucTab
		},
		props:[
			'recommendHouseData',
			'restrictHouseData'
		],
		data() {
			return {
				TabCur: 0,
				tabList: [{ name: '推荐房源' }, { name: '自由购' }],
			}
		},
		methods: {
			tabChange(index) {
			    this.TabCur = index;
			},
			swiperChange(e) {
				var index=e.target.current || e.detail.current;
				this.TabCur = index;
			},
			houseDtat(num) {
				if (num == 0) {
					return this.restrictHouseData;
				} else if (num == 1) {
					return this.recommendHouseData;
				}
			},
			getImgUrl(icon){
				return `http://fangpaiwang.com/${icon}`;
			},
			getDate(dates) {
				var date = new Date(dates);
				var Y = date.getFullYear() + '-';
				var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
				var D = date.getDate() + ' ';
				var h = date.getHours() + ':';
				var m = date.getMinutes() + ':';
				var s = date.getSeconds();
				return Y+M+D+h+m+s
			}
		}
	}
</script>

<style>
	.recommendHouseView {
		margin-top: 43upx;
		padding: 0 30upx;
	},
	.recommendHouseTitleView {
		height: 117upx;
		display: flex;
		flex-direction: row;
		align-items: center;
	},
	.recommendHouseTitleItem {
		flex: 1;
	}
	.recommendHouseTitleItem text {
		font-size:40upx;
		font-family:PingFang SC;
		font-weight:800;
		color:rgba(51,51,51,1);
	}
	.houseItemView {
		display: flex;
		height: 286upx;
		flex-direction: row;
	}
	.houseItemImg {
		width: 240upx;
		height: 149upx;
		border-radius:10upx;
	}
	.houseItemImg image {
		width: 100%;
		height: 100%;
	}
	.houseItem {
		flex: 1;
		margin-left: 25upx;
	}
	.itemTitle{
		font-size:30upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		overflow: hidden;
		text-overflow: ellipsis;
		display:-webkit-box; //作为弹性伸缩盒子模型显示。
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2;
	}
	.itemInfo {
		font-size: 24upx;
		color: #666;
	}
	.itemPrice {
		display: flex;
		flex-direction: row;
		color: #333333;
		justify-content: space-between;
		font-size: 20upx;
	}
	.redPrice {
		margin-left: 10upx;
		color: #E02E24;
		font-size: 26upx;
	}
	.grayPrice {
		margin-left: 10upx;
		color: #333;
		font-size: 26upx;
	}
	.createIime {
		margin-top: 20upx;
		height: 44upx;
		background:rgba(199,49,38, 0.15);
		/* opacity:0.06; */
		border-radius: 10upx;
		display: flex;
		flex-direction: row;
		text-align: center;
	},
	.createIimeIconinfo {
		font-size: 26upx;
		color: #E02E24;
		line-height: 44upx;
	},
	.createIimeIcon {
	},
	.createIimeIcon image {
		width: 24upx;
		height: 24upx;
		margin-left: 12upx;
		margin-right: 7upx;
	}
	
</style>
