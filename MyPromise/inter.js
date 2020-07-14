// 常见题目
/*


  连接： https://segmentfault.com/a/1190000016848192
1. 打印顺序
  setTimeout(()=>{
    console.log("setTime")
  })
  var p1 =new Promise((resolve)=> {
    console.log("p1")
    resolve('p2')
  })

  p1.then((res)=> {
   console.log("人工费我",res)
  })
  console.log("bbb")


2. Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)
  
  这个有点意思   Promise.resolve  是返回一个promise的
  判断这个传递的参数 是否为then的对象（也就是promise） 就执行xx.then(resolve, reject) 执行
  不是promise  就会执行resolve(xxx)

  值的穿透  因为我们then需要是一个函数  不是函数 就上次的值往下传

3. 红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次，意思就是3秒，执行一次 red 函数，2秒执行一次 green 函数，1秒执行一次 yellow 函数，不断交替重复亮灯，意思就是按照这个顺序一直执行这3个函数，这步可以就利用递归来实现。

function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}


function light(cb , time) {
  return new Promise((resolve, reject)=> {
    setTime(function(){
      cb();
      resolve()
    }, time)
  })
}
function next() {
  Promise.resolve()
  .then(function(){
    light(red, 3000)
  }).then(function(){
     light(green, 1000)
  }).then(function(){
    next()
  })
}
next()


4. 控制并发
function requestLimit(urls, cb, limit) {
   var i = 0
   var queue = []
   var res = []
   function queuePromise(){
    if(i ===urls.length) {
     return Promise.resolve()
    }
    i++
    var p = Promise.resolve(cb)
    res.push(p)
    var e = p.then(function(){
      queue.splice(queue.indexOf(e)===-1)
    })
    queue.push(e);
    var pp = Promise.resolve();
    if(queue.length ===limist) {
     var pp = Promise.race(queue)
    }
    return pp.then(function(){
      queuePromise()
    })
   }
   queuePromise().then(()=> {
     Promise.all(ret)
   })
}



https://www.html.cn/interview/14781.html
1. 多个catch  当reject后 所有catch都会执行  返回也是resolve
*/