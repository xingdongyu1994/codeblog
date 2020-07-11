function MyMap() {
  this.init()
};
MyMap.prototype.tongLen = 8

MyMap.prototype.bucket = []

MyMap.prototype.makeHash = function (key) {
  let hash = 0;
  // string   
  if (typeof key !== 'string') {
    if (typeof key == 'number') {
      //number NaN 
      hash = Object.is(key, NaN) ? 0 : key;
    } else if (typeof key == 'object') {
      // null {} []
      hash = 1;
    } else if (typeof key == 'boolean') {
      // true false boolean
      hash = Number(key);
    } else {
      // undefined  function(){}
      hash = 2;
    }
  } else {
    // string
    // 'a' 'ab' 'asdasdadasda';
    // 长度大于等于3 前三个字符 ascii 累加 
    for (let i = 0; i < 3; i++) {
      // key[]
      hash += key[i] ? key[i].charCodeAt(0) : 0;
    }
  }
  return hash % 8;
}
MyMap.prototype.init = function () {
  for (let i = 0; i < this.tongLen; i++) {
    this.bucket[i] = {
      next: null,
      type: 'bucket_' + i,
    };
  }
}

MyMap.prototype.set = function (key, value) {
  const that = this
  let hash = that.makeHash(key);
  const oTempBucket = this.bucket[hash];
  while (oTempBucket.next) {
    if (oTempBucket.next.key == key) {
      oTempBucket.next.value = value;
      return;
    } else {
      oTempBucket = oTempBucket.next;
    }
  };
  oTempBucket.next = {
    key: key,
    value: value,
    next: null
  };
}

MyMap.prototype.get = function (key) {
  const that = this
  let hash = that.makeHash(key);
  let oTempBucket = that.bucket[hash];
  console.log("bggfred ", oTempBucket, key)
  while (oTempBucket.next) {
    if (oTempBucket.next.key == key) {
      return oTempBucket.next.value
    } else {
      oTempBucket = oTempBucket.next;
    }
  }
  return undefined
}
export default MyMap