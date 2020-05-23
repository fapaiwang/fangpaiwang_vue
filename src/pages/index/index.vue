
<template name="Index">
	<view>
		<navSearchHeader @goPickCityClick="onPickCityClick" @returnInputDate="returnDate" @goUserClick="onUserClick"></navSearchHeader>
		<banner :bannerdata="bannerdata"></banner>
		<quickCon :quickConData="quickConData"></quickCon>
		<auction></auction>
	</view>
</template>
	
	
<script>
	import navSearchHeader from '../../components/base/uni-navSearchHeader.vue'; // 搜索框
	import banner from '../../components/home/uni-banner.vue'; // banner
	import quickCon from '../../components/home/quick-con.vue' // 快速导航
	import auction from '../../components/home/uni-auction.vue' // 拍卖
    export default {
		components: {
			navSearchHeader,
			banner,
			quickCon,
			auction
		},
        name: "Index",
		data() {
			return {
				bannerdata: [],
				quickConData: [
					{name: '全部房源'},
					{name: '全部房源'},
					{name: '全部房源'},
					{name: '全部房源'},
					{name: '全部房源'},
					{name: '全部房源'},
					{name: '全部房源'},
					{name: '全部房源'}
				],
			}
		},
		onLoad: function() {
			this.getHomeData()
		},
		
        methods: {
			
			getHomeData() {
				this.getBannerData();
				this.getHomeMenuData();
			},
			getBannerData() {
				this.$netApi.getBanner({space_id: '4'}).then(res => {
					this.bannerdata= res.data;
					console.log(this.bannerdata)
				}).catch(err => {
					console.log(err)
				})
			},
			getHomeMenuData() {
				this.$netApi.getHomeMenu({space_id: '4'}).then(res => {
					this.bannerdata= res.data;
					console.log(this.bannerdata)
				}).catch(err => {
					console.log(err)
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
			}
        }
    }
</script>
<style>
    
</style>