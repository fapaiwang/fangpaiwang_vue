import Vue from 'vue'
import App from './App'
import MinRouter from './utils/min-router'
import minRouter from './router'
import NetRequest from './src/net/NetRequest'
import netRequest from './src/net/api'
Vue.prototype.apiUrl = '/h5api';

Vue.config.productionTip = false

App.mpType = 'app'
Vue.use(MinRouter)
Vue.use(NetRequest)


const app = new Vue({
    ...App,
	minRouter,
	netRequest
})
app.$mount()
