/*
  webpack打包
   1. 简介
      js的打包工具  通过一些loader 或者 plugin 来扩展打包工具的能力
        webpack的核心概念  提供了一个entry  chunk   loader plugin  这些组成了一个webpack生态
        从入口出发  开始解析文件之间的依赖ast语法树 来递归去找到文件之间的依赖  
        解析过程 使用loader | plugin 来处理文件 对文件转换等操作
        输出一个文件块
   2. 平常使用
       定义的webpack.config.js
       {
         entry:xxx,
         output: xxx,
         module: {
           rule:[{
             test: /\.js$/,
             use:{
               loader:XXXX
             }
           }]
         },
         plugin:[
           new DDD(),
           new DDDD()
         ]
       }
   3. 实现一个简易webpack
      1. 通过读取入口文件
      2. 根据入口文件解析文件或者ast
      3. 根据ast语法树  找出所有依赖关系
      4. 将ast在转为code
      5. 根据依赖生成依赖图
      6. 写入文件


      https://github.com/airuikun/minipack/blob/master/src/minipack.js

      https://github.com/dykily/simple_webpack/blob/master/bundler.js


  loader plugin 

  plugin 是一个有apply方法

  var myPlugin = {
    apply(compiler) {

    }
  }





    
*/