
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
  return config
})

export default {
  // 这里统一管理api请求
  apis: {
    getBanner(data) {
      return netRequest.get('/banner/index', data)
    },
	getHomeMenu(data) {
		return netRequest.get('page/home_menu', data)
	},
	
	getHouseDetail(data) {
		return netRequest.post('/second/houseDetail', data)
	}
	
  }
}