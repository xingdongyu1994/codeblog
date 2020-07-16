/*
  require
  1. 简介
      我们平常对模块化理解   amd  cmd   es6  异步加载模块


      require(['a','b'], function(){

      })

      amd 提前执行  cmd是延迟执行
      define(['a','b'], function(){

      })
      define(function(){
        require(a)
        require(b)
      })


    带着问题
     require如何异步加载的
        动过 script dom
     异步加载如何加载模块的

       1.  组织依赖关系
       2. define

      需要我们定义一个define(dependencies(依赖模块), cb)
      require来引用  
      require(['xx'], cb)


      通过 自执行函数来包装一下


    我们有个监听器
    对每一个模块的成功  错误的回调函数

    1. 分析主模块  创建一个script标签  添加到document head中
    2. require  得到第一个参数['a','b']  分析a  b 模块文件  得到js 创建一个script标签 添加到document.body中
      于此同时我们建立一个两个队列  1 保证每一个模块的 pending  resolve  reject   2. 总的回调
    3. 通过我们script.onload   |   error   回调来将每一个模块的状态改变
    4. 得到队列的ab模块 是否都状态变成resolve了 就执行总的回调



*/