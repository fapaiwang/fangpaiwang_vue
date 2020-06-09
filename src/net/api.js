
import NetRequest from './NetRequest.js'

const netRequest = new NetRequest()

// 请求拦截器
netRequest.interceptors.request((request) => {
  return request
})

// 响应拦截器
netRequest.interceptors.response((response) => {
  return response.data
})

// 设置默认配置
netRequest.setConfig((config) => {
  config.baseURL = '/h5api'
  // config.baseURL = 'http://www.fangpaiwang.com/api'
  return config
})

export default {
  // 这里统一管理api请求
  apis: {
    getBanner(data) {
      return netRequest.get('/banner/index', data)
    },
	getHomeMenu(data) {
		return netRequest.get('/page/home_menu', data)
	},
	
	getHouseDetail(data) {
		return netRequest.post('/second/houseDetail', data)
	},
	getHomeSecondSearch(data){
		return netRequest.get('/banner/home_second_search', data)
	},
	getqualityEstate(data){ // 优质小区列表
		return netRequest.get('/second/quality_estate', data)
	},
	getrecommendHouse(data) { // 推荐房源
		return netRequest.get('/second/recommend_house', data)
	},
	getrestrictHouse(data) { // 自由购
		return netRequest.get('/second/restrict_house', data)
	},
	getTodayAddData(data) {
		return netRequest.get('/second/get_today_add', data)
	},
	getCharacteristicHouseData(data) {
		return netRequest.get('/second/characteristic_house', data)
	}
  }
}