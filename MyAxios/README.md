# MyAxios

### 平常见到的 axios 实战

```
  1. 直接使用
  import axios from 'axios'
  axios('url').then(()=> {
    // xxxx
  })
  axios({'url'：xxx, 'method':xxx})
  axios.create({   创建一个实例
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  2.调用get使用
  axios.get('url', params).then(()=> {
    //xxx
  })

  3.调用post使用 delete put等等
  axios.post('url',{
    id：xxx
    name:xxx
  })
  。。。。。。
```

### axios 本质

从上面平常用的时候会发现 axios 本质上就是一个函数
传递一些参数 返回一个 Axios 的实例

### 一步一步 axios 实现

- 第一步 新建一个 MyAxios 函数 返回一个实例

```
  class MyAxios() {
    constructor() {}
  }
  return default new MyAxios()
```

- 第二步 get post 等原型方法实现

```
  get(url,data) {
    return xhrRequest(......)
  }
  post(url, data) {
    return xhrRequest(......)
  }
```

- 第三步 xhrRequest 真正发送请求

  1. 合并 defaultparams 和传进来的 params
  2. xhrRequest 返回都一个 promise
  3. 我们将 promise 包装一下 lastParams

到此为止我们已经实现了一个简单的 axios 了
包括 get post create 返回 promise 等信息已经做到了 delete put 已经写就行

- 第四步 拦截器

  1.看下我们实战用的

  ```
    // 请求拦截
    axios.interceptors.request.use(function(){

    }, function() {

    })
    // 响应拦截
    axios.interceptors.response.use(function(){

    }, function(){

    })
  ```

  interceptors 属性 有一个 request response
  new 出一个 intercept 实例
  use 每次都添加到队列一项

  ```
  2. 需要我们建立队列来存储这些 use 的回调
  ```

  queue = []
  queue.push(resolveHandle,rejectHandle)

  ```
  3. request队列存储了用户use成功错误的回调 response队列存储了用户use成功错误的回调
  4. 在发送xhrRequest前得到request.queue队列 遍历执行
  5. 在发送xhrResponse后得到response.queue队列 遍历执行
  ```

总结：
我们简单一个 MyAxios 已经实现完毕 总结几个点就是

> 1.axios 本身就是一个函数

> 2.get post delete put 等实现

> 3.用户默认值参数合并

> 4.xhr 发送网络请求

> 5.拦截器
