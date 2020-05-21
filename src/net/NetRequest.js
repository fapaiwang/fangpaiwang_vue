const config = Symbol('config')
const isCompleteURL = Symbol('isCompleteURL')
const requestBefore = Symbol('requestBefore')
const requestAfter = Symbol('requestAfter')

class NetRequest {
  [config] = {
    baseURL: '',
    header: {
      'content-type': 'application/json'
    },
    method: 'GET',
    dataType: 'json',
    responseType: 'text'
  }

  interceptors = {
    request: (func) => {
      if (func) {
        NetRequest[requestBefore] = func
      } else {
        NetRequest[requestBefore] = (request) => request
      }
      
    },
    response: (func) => {
      if (func) {
        NetRequest[requestAfter] = func
      } else {
        NetRequest[requestAfter] = (response) => response
      }
    }
  }

  static [requestBefore] (config) {
    return config
  }

  static [requestAfter] (response) {
    return response
  }

  static [isCompleteURL] (url) {
    return /(http|https):\/\/([\w.]+\/?)\S*/.test(url)
  }

  setConfig (func) {
    this[config] = func(this[config])
  }

  request (options = {}) {
    options.baseURL = options.baseURL || this[config].baseURL
    options.dataType = options.dataType || this[config].dataType
    options.url = NetRequest[isCompleteURL](options.url) ? options.url : (options.baseURL + options.url)
    options.data = options.data
    options.header = {...options.header, ...this[config].header}
    options.method = options.method || this[config].method

    options = {...options, ...NetRequest[requestBefore](options)}

    return new Promise((resolve, reject) => {
      options.success = function (res) {
        resolve(NetRequest[requestAfter](res))
      }
      options.fail= function (err) {
        reject(NetRequest[requestAfter](err))
      }
      uni.request(options)
    })
  }

  get (url, data, options = {}) {
    options.url = url
    options.data = data
    options.method = 'GET'
    return this.request(options)
  }

  post (url, data, options = {}) {
    options.url = url
    options.data = data
    options.method = 'POST'
    return this.request(options)
  }
}

NetRequest.install = function (Vue) {
  Vue.mixin({
    beforeCreate: function () {
			if (this.$options.netRequest) {
        console.log(this.$options.netRequest)
				Vue._netRequest = this.$options.netRequest
			}
    }
  })
  Object.defineProperty(Vue.prototype, '$netApi', {
    get: function () {
			return Vue._netRequest.apis
		}
  })
}

export default NetRequest