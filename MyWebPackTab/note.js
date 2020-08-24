/*
1.  webpack就是从设置一个入口文件开始寻找各种依赖 处理各种高级代码 转换成浏览器可以支持的代码
    拥有了插件系统来扩展webppack能力

2. webpack 插件的生命周期
  一个插件
    进入compile开始进入编译环境  compilation 创建第一个版本   make任务开始
    after-compiler  emit触发生成文件  after-emit
   将近180个钩子

  插件一个过程就是 
    创建  webpack在其内部对象上创建的钩子
    注册  插件将自己的action放到钩子上
    调用  编译过程中触发钩子
  本质上就是一个事件流的机制  将各个插件穿起来 核心库就是tapable
  compiler负责编译
  compilation 负责bundle的创建


  tapable  hook分为同步hook 异步hook 异步分为同行还是并行



  1. 默认值   options.context 设置当前项目工作目录
  2. 编译前准备  
*/