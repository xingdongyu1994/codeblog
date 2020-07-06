import defaultParams from './defaultparams'
import Intercept from './intercept'
import {
  mergeParams
} from './action'


class MyAxios {
  constructor() {
    this.defaultParams = defaultParams
    this.interceptors = {
      request: new Intercept(), // request  queue
      response: new Intercept() // response  queue
    }
  }
  xhrSend(options) {
    return new Promise(function (resolve) {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr)
          }
        }
      }
      xhr.open(options.method, options.url, true);
      for (let key in options.headers) {
        xhr.setRequestHeader(encodeURIComponent(key), encodeURIComponent(options.headers[key]));
      }
      xhr.send(options.data);

    }, function (err) {
      throw (err)
    })
  }
  xhrRequest(params) {
    const lastParams = mergeParams(this.defaultParams, params)

    let promise = Promise.resolve(lastParams)

    //请求拦截器
    let requestQueue = this.interceptors.request.queue
    requestQueue.forEach(item => {
      promise = promise.then(item.resolveHandle, item.rejectHandle)
    })



    promise.then(function (data) {
      return this.xhrSend(data)
    })

    let responseQueue = this.interceptors.response.queue
    responseQueue.forEach(item => {
      promise = promise.then(item.resolveHandle, item.rejectHandle)
    })

    //响应拦截器
    return promise
  }
  get(url, params = {}) {
    params.method = 'get';
    params.url = url;
    return this.xhrRequest(params)
  }
  post(url, params = {}, data) {
    params.url = url
    params.method = 'post'
    if (data) {
      params.data = data
    }
    return this.xhrRequest(params)
  }
}
export default MyAxios