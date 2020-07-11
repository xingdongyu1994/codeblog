function MyFor(data, cb) {
  let iterable, result;

  if (typeof data[Symbol.iterator] !== "function") {
    data.forEach(element => {
      cb(element)
    });
    return
  }
  if (typeof cb !== "function") throw new TypeError("cb must be callable");

  iterable = data[Symbol.iterator]();

  result = iterable.next();
  while (!result.done) {
    cb(result.value);
    result = iterable.next();
  }
}

function MySet(data) {
  this.size = 0
  this.valuesQueue = []
  MyFor(data, (element) => {
    this.add(element)
  })
  // if (data) {
  //   console.log("asfgsa ", data)
  //   data.forEach(element => {
  //     this.add(element)
  //   });
  // }
}


MySet.prototype.add = function (val) {
  if (!this.valuesQueue.includes(val)) {
    this.valuesQueue.push(val)
    this.size += 1
  }
}

MySet.prototype.has = function (val) {
  return this.valuesQueue.includes(val)
}

MySet.prototype.delete = function (val) {
  if (!this.has(val)) {
    return false;
  }
  var index = this.valuesQueue.indexOf(val)
  this.valuesQueue.splice(index, 1)
  this.size -= 1
  return true
}

MySet.prototype.clear = function () {
  this.size = 0
  this.valuesQueue = []
}


MySet.prototype.forEach = function (cb) {
  for (let i = 0; i < this.valuesQueue.length; i++) {
    cb.call(null, this.valuesQueue[i], this.valuesQueue[i], this)
  }
}

MySet.prototype.keys = function () {
  let that = this

  function MyIterator() {
    let index = 0
    const obj = {
      next: function () {
        return index < that.valuesQueue.length ? {
          done: false,
          value: that.valuesQueue[index++]
        } : {
          done: true,
          value: undefined
        }
      }
    }
    obj[Symbol.iterator] = function () {
      return obj
    }
    return obj
  }

  return MyIterator()

}

MySet.prototype.values = function () {
  return this.keys()
}
MySet.prototype.entries = function () {
  let that = this

  function MyIterator() {
    let index = 0
    const obj = {
      next: function () {
        ++index
        return index < that.valuesQueue.length ? {
          done: false,
          value: [that.valuesQueue[index], that.valuesQueue[index]]
        } : {
          done: true,
          value: undefined
        }

      }
    }
    obj[Symbol.iterator] = function () {
      return obj
    }
    return obj
  }

  return MyIterator()
}

export default MySet