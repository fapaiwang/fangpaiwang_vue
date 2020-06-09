
<template name="Index">
	<view>
		<navSearchHeader @goPickCityClick="onPickCityClick" @returnInputDate="returnDate" @goUserClick="onUserClick"></navSearchHeader>
		<banner :bannerdata="bannerdata"></banner>
		<quickCon :quickConData="quickConData"></quickCon>
		<auction :secondSearchData="SecondSearchData"></auction>
		<infoScroll :todayAddData="todayAddData"></infoScroll>
		<view class="quickTab">
			<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange"></wuc-tab>
			<swiper class="quickTabSwiper" :current="TabCur" duration="300" @change="swiperChange">
			  <swiper-item class="quickTabSwiperItem" v-for="(item,index) in tabList" :key="index">
				  <block v-for="(item, index) in tabList" :key="index">
					  <div class="quickTabItemView">
						  <div class="quickTabImgView">
							   <image class="quickTabImg" :src="imgUrl('uploads/secondhouse/20200413/97129489e77c5cb96d0f23484e1da04e.jpg')" mode=""></image>
						  </div>
					  </div>
				  </block>
				
			  </swiper-item>
			</swiper>
		</view>
		<centerBanner :centerBannerdata='centerBannerdata'></centerBanner>
		<featured :qualityEstateData='qualityEstateData'></featured>
		<getrecommendHouse :recommendHouseData='recommendHouseData' :restrictHouseData='restrictHouseData'></getrecommendHouse>
		<view class="moreView">
			<view @click="goMore" class="moreViewBtn">
				<text>更多推荐房源</text>
			</view>
		</view>
	</view>
</template>
	
	
<script>
	import navSearchHeader from '../../components/base/uni-navSearchHeader.vue'; // 搜索框
	import banner from '../../components/home/uni-banner.vue'; // banner
	import quickCon from '../../components/home/quick-con.vue' // 快速导航
	import auction from '../../components/home/uni-auction.vue' // 拍卖
	import infoScroll from '../../components/home/uni-InfoScroll.vue' // 今日新增推荐
	import WucTab from '../../components/tab/wuc-tab.vue';
	import centerBanner from '../../components/home/uni-centerBanner.vue' // 中间广告图
	import featured from '../../components/home/uni-featured.vue' // 精选小区
	import getrecommendHouse from '../../components/home/uni-recommendHouse.vue' // 推荐房源

    export default {
		components: {
			navSearchHeader,
			banner,
			quickCon,
			auction,
			infoScroll,
			WucTab,
			centerBanner,
			featured,
			getrecommendHouse
		},
		navigate: ['navigateTo'],
        name: "Index",
		data() {
			return {
				bannerdata: [],  // banner
				centerBannerdata: [],  // banner
				SecondSearchData: [],
				qualityEstateData: [],
				recommendHouseData: [],
				restrictHouseData: [],
				quickConData: [],
				todayAddData: [], // 今日新增
				characteristicHouseData: [],
				TabCur: 0,
				tabList: [{ name: '为你选房' }, { name: '特色房源' }, { name: '学校周边' }, { name: '其他房' }],
			}
		},
		onLoad: function() {
			this.getHomeData()
		},
		
        methods: {
			
			getHomeData() {
				this.getBannerData();
				this.getHomeMenuData();
				this.getHomeSecondSearchData();
				this.getqualityEstateData();
				this.getRecommendHouseData();
				this.getTodayAddData();
				this.getCharacteristicHouse();
			},
			getBannerData() {
				this.$netApi.getBanner({space_id: '4'}).then(res => {
					this.bannerdata= res.data;
				}).catch(err => {
					console.log(err)
				})
				this.$netApi.getBanner({space_id: '14'}).then(res => {
					this.centerBannerdata= res.data;
				}).catch(err => {
					console.log(err)
				})
			},
			getHomeMenuData() {
				this.$netApi.getHomeMenu().then(res => {
					this.quickConData = res.data;
					console.log(res.data)
					// console.log(res)
				}).catch(err => {
					// console.log(err)
				})
			},
			getqualityEstateData() { // 推荐小区
				this.$netApi.getqualityEstate().then(res => {
					this.qualityEstateData = res.data;
				}).catch(err => {
					// console.log(err)
				})
				
			},
			
			getHomeSecondSearchData() {
				this.$netApi.getHomeSecondSearch().then(res => {
					this.SecondSearchData= res.data;
				}).catch(err => {
					console.log(err)
				})
			},
			getRecommendHouseData() { //推荐房源
				this.$netApi.getrecommendHouse().then(res => {
					
					this.recommendHouseData = res.data;
				}).catch(err => {
					console.log(err)
				});
				this.$netApi.getrestrictHouse().then(res => { //自由购
					this.restrictHouseData = res.data;
					
				}).catch(err => {
					console.log(err)
				})
			},
			
			getTodayAddData() {
				this.$netApi.getTodayAddData().then(res => { //自由购
					this.todayAddData = res.data;
				}).catch(err => {
					console.log(err)
				})
			},
			getCharacteristicHouse() {
				this.$netApi.getCharacteristicHouseData().then(res => { //自由购
					this.characteristicHouseData = res.data;
					// console.log('11111111222222222', res);
				}).catch(err => {
					console.log(err)
				})
			},
			imgUrl(icon) {
				return `http://fangpaiwang.com/${icon}`;
			},
			goMore() {
				uni.navigateTo({
				   url: '../morelistings/index'
				})
			},
			
			returnDate(e) {
				this.getHomeData()
				console.log("接收到的值==>>"+e)
			},
			onUserClick() {
				console.log("接收到的值==>> 去用户页面")
			},
			onPickCityClick() {
				console.log("接收到的值==>>选择城市")
			},
			tabChange(index) {
			    this.TabCur = index;
			},
			swiperChange(e) {			
				var index=e.target.current || e.detail.current;
				this.TabCur = index;
			}

        }
    }
</script>
<style>
    .quickTab{
		padding: 0 30upx;
		padding-top: 40upx;
	},
	.quickTabSwiper {
		margin-top: 40upx;
		height: 486upx;
	},
	.moreView {
		padding: 0 30upx;
		padding-top: 40upx;
		margin-bottom: 100upx;
	},
	.moreViewBtn {
		width: 100%;
		height: 88upx;
		background:rgba(241,241,241,1);
		border-radius:10px;
		display: flex;
		justify-content: center;
		align-items: center;
		color:rgba(102,102,102,1);
		font-size: 28upx;
	},
	.quickTabSwiperItem {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
	},
	.quickTabItemView {
		width: 49%;
		height: 233upx;
	}
	.quickTabImgView{
		width: 100%;
		height: 233upx;
	}
	.quickTabImg{
		width: 100%;
		height: 100%;
		border-radius: 10upx;
		/* width: 50%; */
	}
</style>