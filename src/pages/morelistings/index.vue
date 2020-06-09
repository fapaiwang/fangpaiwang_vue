<template>
	<view>
		<navSearchHeader @goPickCityClick="onPickCityClick" @returnInputDate="returnDate" @goUserClick="onUserClick"></navSearchHeader>
		<getrecommendHouse :recommendHouseData='recommendHouseData'></getrecommendHouse>
		
	</view>
</template>

<script>
	import navSearchHeader from '../../components/base/backNav.vue'; // 搜索框
	import getrecommendHouse from './getrecommendHouse.vue' // 推荐房源
	
	export default {
		navigate: ['navigateTo'],
		name: "Morelistings",
		components: {
			navSearchHeader,
			getrecommendHouse
		},
		data() {
			return {
				recommendHouseData: [],
			}
		},
		onLoad: function() {
			this.getRecommendHouseData()
		},
		methods: {
			getRecommendHouseData() { //推荐房源
				this.$netApi.getrecommendHouse().then(res => {
					
					this.recommendHouseData = res.data;
				}).catch(err => {
					console.log(err)
				});
			}
			
		}
	}
</script>

<style>

</style>
