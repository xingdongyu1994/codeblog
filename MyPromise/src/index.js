// import MyPromise from './main'

// let p = new MyPromise(function (resolve, reject) {
//   setTimeout(function () {
//     var a = new MyPromise(function (resolve, reject) {
//       resolve("破婆婆破婆婆婆婆铺铺铺铺铺铺铺铺铺铺")
//     })
//     resolve(a)
//   }, 1000)

// })
// let p2 = p.then(function (data) {
//   console.log("成功", data)
//   return data
// }, function (err) {
//   console.log("错误", err)
//   return "不刚发布的11111111111"
// })

// // console.log("p2p2p2p2p2", p2)

// // p2.then(function (data) {
// //   console.log("链式成功", data)
// // }, function (err) {
// //   console.log("链式错误", err)
// // })

// import MyPromise from './main'

// let p = new MyPromise(function (resolve, reject) {
//   reject("冠福股份的染发过的")

// })
// let p2 = p.then(function (data) {
//   console.log("成功", data)
//   return data
// }, function (err) {
//   console.log("错误", err)
// })

// // console.log("p2p2p2p2p2", p2)

// // p2.then(function (data) {
// //   console.log("链式成功", data)
// // }, function (err) {
// //   console.log("链式错误", err)
// // })




// import MyPromise from './main'
// let p = MyPromise.resolve(1)
// p.then(function (data) {
//   console.log("个", data)
// }, function () {

// })





// import MyPromise from './main'
// // let p1 = MyPromise.resolve(1)
// // let p2 = MyPromise.resolve(p1)
// // let p3 = MyPromise.resolve(3)

// let p11 = MyPromise.reject(1)
// let p22 = MyPromise.resolve(2)
// let p33 = MyPromise.reject(3)
// // p33.then(function (data) {
// //   console.log("供热费", data)
// // })
// let p = MyPromise.some([p11, p22, p33])
// p.then(function (data) {
//   console.log("供热费", data)
// }, function (err) {
//   console.log("供热费111", err)
// })





import MyPromise from './main'

let p = new MyPromise(function (resolve, reject) {
  reject("m,m,m,")
}).then(function (data) {
  console.log("成功", data)
  return "bbb"
}, function (a) {
  console.log("错误", a)
}).catch(function (error) {
  console.log("错误bbbbbbbbbbbbbbbbbbb", error)
})