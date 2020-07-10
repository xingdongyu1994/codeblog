/*
  promise 轮子

  1. promise简介
      promise 英文翻译为承诺 其实意思也是说一旦改变了承诺了就不在改了
      解决异步的一个方案  将数据请求和数据处理分开来
      promise内部维护了三种状态   pending  resolved   rejected   一旦从pending变成resolved | rejected就不能改变了
      其实也是一个Promise构造函数  
      原型上有 then catch等方法
      自身有all  race resolve  reject的api方法
      
      then也是返回一个promise  可以调用then  catch  resolve  reject等方法 也是能解决回调的重要原因
      then接受两个函数 注册回调表示状态改变的回调
  2. promise平常使用
     let p = new Promise((resolve, reject)=> {
       resolve(1)
     })
     p.then(data=>{
       console.log("结果", data)
     },err=> {
       console.log("错误", err)
     })
  3. 一步一步实现一个简单的promise
     1. 先构造一个MyPromise函数  接受一个函数作为一个参数来处理内部状态 resolve  reject
     2. then原型方法 在状态改变回调 回调成功 还是错误  两个参数 成功回调  错误回调将回调添加到Mypromise的resolvedQueue 和 rejectedQueue
        如果有一个then我们看到结果是可以执行的  多个then链式调用是不行的  为了解决那个回调地狱 用了then也返回一个Mypromise 这样就有了Mypromise的 then方法了

        注意这个then后的
        p.then(function() {
         return xxxx    这个xxxx可能就是value值  也有可能再返回一个promise
        }, function(){

        })

        上一个p1 结果给到p2  p1状态会影响p2的执行

        then

    3. MyPromise.all  race   resolve  reject  等等



总结：
   MyPromise 是一个构造函数
   三种状态  状态的改变不可逆
   then 返回一个新的promise  参数有两个  成功回调 错误回调
   then返回值的问题  可能是一个字符串值具体值 还有可能还有可能是一个MyPromise   将回调添加成功 错误队列中
   then的链式调用 MyPromise的状态会依赖当前then方法回调以及返回值  返回值可能是  不是函数  是否MyPromise

*/