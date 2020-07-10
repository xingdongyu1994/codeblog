function MyPromise(cb) {
  let that = this
  that.status = 'pending'
  that.data = null,
    that.resolvedQueue = []
  that.rejectedQueue = []


  function changeResolved(data) {
    //  这个地方如何按照这个方式来实现的话 最后结果这个that.resolvedQueue永远都是空的 因为这里是同步执行 then在后面注册的
    //  所有这里改成一个setTimeout异步的实现

    setTimeout(function () {
      if (that.status === 'pending') {

        that.status = 'resolved'
        that.data = data
        // for (let i = 0; i < that.resolvedQueue.length; i++) {
        //   that.resolvedQueue[i](data);
        // }
        let cb;
        while (cb = that.resolvedQueue.shift()) {
          cb(data)
        }

      }
    }, 0)
  }


  function changeRejected(data) {

    setTimeout(function () {
      if (that.status === 'pending') {

        that.status = 'rejected'
        that.data = data
        // for (let i = 0; i < that.rejectedQueue.length; i++) {
        //   that.rejectedQueue[i](data);
        // }

        let cb;
        while (cb = that.rejectedQueue.shift()) {
          cb(data)
        }

      }
    }, 0)
  }

  cb(changeResolved, changeRejected)
}
MyPromise.prototype.then = function (resolveP1, rejectP1) {




  let that = this
  let p2
  if (typeof resolveP1 !== 'function') {
    resolveP1 = function (data) {}
  }
  if (typeof rejectP1 !== 'function') {
    rejectP1 = function (data) {}
  }


  if (that.status === 'pending') {
    p2 = new MyPromise(function (resolveP2, rejectP2) {
      that.resolvedQueue.push(function () {
        let p1Val = resolveP1(that.data)
        if (p1Val instanceof MyPromise) {
          p1Val.then(resolveP2, rejectP2)
        }
      })

      that.rejectedQueue.push(function () {

        let p1Val = rejectP1(that.data)


        if (p1Val instanceof MyPromise) {
          p1Val.then(resolveP2, rejectP2)
        } else {
          rejectP2(that.data)
        }
      })
    })
  }
  if (that.status === 'resolved') {
    p2 = new MyPromise(function (resolveP2, rejectP2) {
      let p1Val = resolveP1(that.data) // 得到p1 resolve值
      if (p1Val instanceof MyPromise) {
        return p1Val.then(resolveP2, rejectP2)
      } else {
        resolveP2(p1Val)
      }
    })
  }

  if (that.status === 'rejected') {
    console.log("非本单位asdfgsafs ", that.data)
    p2 = new MyPromise(function (resolveP2, rejectP2) {
      if (typeof rejectP1 !== 'function') {
        resolveP2()
      } else {
        let p1Val = rejectP1(that.data) // 得到p1 MyPromise

        if (p1Val instanceof MyPromise) {

          p1Val.then(resolveP2, rejectP2)
        } else {
          resolveP2(p1Val) // 得到p2 resolve值
        }
      }
    })
  }
  return p2
}

MyPromise.resolve = function (c) {
  return new MyPromise(function (resolve, reject) {
    if (c instanceof MyPromise) {
      c.then(resolve, reject)
    } else {
      return resolve(c)
    }

  })
}
MyPromise.reject = function (c) {
  return new MyPromise(function (resolve, reject) {
    if (c instanceof MyPromise) {
      c.then(resolve, reject)
    } else {
      return reject(c)
    }
  })
}
MyPromise.all = function (promises) {
  return new MyPromise(function (resolve, reject) {
    const len = promises.length
    let res = new Array(len)
    let num = 0
    for (let i = 0; i < len; i++) {
      MyPromise.resolve(promises[i]).then(function (data) {

        res[i] = data
        num += 1
        if (num === len) {
          return resolve(res)
        }
      }, function (err) {
        return reject(err)
      })
    }
  })
}

MyPromise.race = function (promises) {
  return new MyPromise(function (resolve, reject) {
    const len = promises.length
    for (let i = 0; i < len; i++) {
      MyPromise.resolve(promises[i]).then(function (data) {
        return resolve(data)
      }, function (err) {
        return reject(err)
      })
    }
  })
}


MyPromise.some = function (promises) {
  return new MyPromise(function (resolve, reject) {
    const len = promises.length
    let res = new Array(len)
    let num = 0
    for (let i = 0; i < len; i++) {
      MyPromise.resolve(promises[i]).then(function (data) {
        return resolve(data)
      }, function (err) {
        res[i] = err
        num += 1
        if (num === len) {
          return reject(res)
        }
      })
    }
  })
}
MyPromise.prototype.catch = function (cb) {
  let that = this
  return that.then(undefined, cb)
}

export default MyPromise