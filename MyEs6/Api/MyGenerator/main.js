function* gen() {
  yield 1
  yield 2
  yield 3
}
var a = gen()
a.next()
a.next()
a.next()
console.log("111", a) // {value: 1, done: false}

// 需要我们执行一个自执行的


// 1. yield后面跟一个promise  value就是一个promise yield后就then接着调用数据


// 2. yield后面跟着可能不是promise 就是一个字符串 或者 回调函数

function isPromise(data) {
  return typeof data.then === 'function'
}


function run(gen) {
  var g = gen()

  function next(data) {
    var res = g.next(data);
    if (res.done) {
      return
    } else {
      if (isPromise(res.value)) {
        res.value.then((data) => {
          next(data)
        })
      } else {
        res.value(next)
      }

    }
  }
  next()
}

run(gen)