import axios from 'axios'
// import { Message } from 'element-ui'
// import store from '@/store'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  dataURL: process.env.BASE_DATAPATH,
  timeout: 50000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (config.url.lastIndexOf('.json') > -1) {
      config.baseURL = ''
    } else {
      config.baseURL = process.env.VUE_APP_BASE_API
    }
    config.data = config.params
    if (config.method === 'post') {
      config.params = {}
    }
    // Do something before request is sent
    // if (store.getters.token) {
    //   // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    //   config.headers['X-Token'] = getToken()
    // }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response
)

export default service
