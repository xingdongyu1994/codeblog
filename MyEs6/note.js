/*
  es6 api 轮子
  
  a. MySet
    1. set介绍
       set 是一种新的数据结构 跟js数组有点类似  讲究存储的数据都是唯一的 么有重复   Set就是一个构函数
    2. 平常使用
      var s = new Set()
       var s1 = new Set([1,2,3,4])

      
      s.add()
      s.has()
      s.size
      s.delete()
      s.clear()
      s.forEach()


      s.keys()
      s.values()
      s.entries()    

      这三个遍历 返回的是遍历器

      set不会给转数据结构
    3. 一步一步实现

    1. 构造一个MySet函数    实现基本api
    2. 实现那个遍历器 这里主要  构造一个遍历器
        我们穿进去的是一个数组 在遍历时候 我们的Set没有键值 只有键key 所有两个是一样的
       遍历器next方法 返回就是一个 done  value值的对象



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

总结
     正常下我创建了一个迭代器对象  拥有next函数的  done value

     有了迭代器对象  还需要消费遍历迭代器的方式 
     我们obj 只是一个纯的对象  不具有被遍历消费 

     需要es6 提供了一个Symbol.iterator 可以让其可以遍历


    set keys  values  entries 都是有内置的Symbol.iterator



  b. map轮子


   

    1. map介绍
       map 是一个集合 是依 键值对存储的  set是值值对存在
       可以存储任意的类型的键值对 也是不能重复的  是有顺序的
       底层使用链表  hash来实现

       不像我们平常定义的对象一样只能字符串  map的 key可以任意类型
    2. 平常map使用
      var a =new Map()
      set()
      get()
      has()
      delete()
      clear()
      size


      keys()
      values()
      entries()

      跟set()差不多的api
    3. 实现一个map



    参考 https://www.jianshu.com/p/0159013e9389 hash算法








 c. MyGenerator

   1. Generator简介
       异步解决方案
       有几个特点  函数带一个*号 函数体内使用yield

       执行函数 返回一个遍历器对象
       
   2. 实现

     注意 yield这个关键字的后面跟的返回值



  d. async await 

    async 返回一个promise
    async = promise + generator

    并发
     Promise.all([fetch1,fetch2])
    串行
    await fetch1
    await fetch2



  e. Object.defineProperty  proxy



  set get  configurable可改  writable赋值运算  enumerable可枚举


  这两个区别
  proxy代理一个对象  需要new实例下才能
  Object.defineProperty 是在修改原理对象是用
*/