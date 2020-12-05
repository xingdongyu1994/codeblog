function getValue(obj,path) {
  path = path.split('.')
  for(var i= 0; i<path.length; i++) {
    if(obj[path[i]] !==undefined) {
      obj = obj[path[i]]
    }
  }

  console.log("paht",obj)
  return obj
}
function getValue2(obj, path){
  var index = path.indexOf('.')
  var pre = path.substring(0, index)
  var next = path.substring(index+1)
  if(obj[pre]) {
    return getValue2(obj[pre], next)
  }
  return obj
}
var obj = {
  a: {
    b: {
      c: {
        d: {
          e: 5
        }
      }
    }
  }
}
var res = getValue2(obj, "a.b.c.d.e")
console.log("不vcfd, ", res)
