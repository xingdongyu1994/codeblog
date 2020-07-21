// 1. 浏览器回收机制
/*
  标记清除 引用计数
  function fun() {
    var a = {}  // 进入环境
    var b = {}
  }
  fun() // 离开环境

  function  fun2() {
    var a = {}   a =0
    var b = a    a = 1
    var c = a    a = 2
    var b ={}    a =1
    var c = {}   a=0
  }
*/