// 1. 监听数据的变化
function MyProxyDefineProperty(name, func) {

  var value = null
  var archive = []
  Object.defineProperty(this, name, {
    get: function () {
      console.log("执行了get")
      return value
    },
    set: function (newVal) {
      console.log('执行了set')
      value = newVal;

      archive.push({
        val: newVal
      });
    }
  })
  this.archive = function () {
    return archive
  }

}


function MyProxyProxy(targe, cb) {
  var proxy = new Proxy(target, {
    get: function (obj, key) {
      return obj[key];
    },
    set: function (obj, key, value) {
      obj[key] = value
      cb(key, value)
    }
  })
  return proxy;
}
export default MyProxyDefineProperty