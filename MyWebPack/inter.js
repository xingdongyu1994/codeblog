// 常见题目

/*
1. webpack 优化
从体积上
  引入cdn
  按需加载  webpack.ensure  
  压缩去掉无用代码

从打包速度上
babel-loader cacheDirectory 
loader 匹配 excludes  includes    cache缓存  
uglify压缩 多进程压缩
HappyPack 开启多线程打包

2. webpack loader plugin区别
   代码的转换器
   webpack的扩展
3. webpack tree - shaking
    es6 静态分析
4. webpack 持久化缓存
    1. 前端持久化方案
        其实就是给静态文件加了hash 没一个hash名字都是不一样的 都是增量的 避免覆盖之前的文件  因为这样我们就可以
        对css js img 就直接上传到cdn  缓存起来 每次部署时候都是增量的一个js  css  hash  不覆盖
        对html 不缓存 每次上传都是最新的html
    2. 我们为啥要做持久化
        第一次用户访问时候 静态资源利用我们设置的持久化方案 在请求http响应头上加上 cache-control 缓存
        当在此放回时候 就不用发送http请求了就可以得到静态资源
       
    2. webpack如何做持久化
        做到持久化缓存 就要到的是  hash是一个唯一的值  也是稳定的
        webpack中有两种  hash   chunkHash
          把所有内容单纯打包到一个文件中 hash就够了
          但是是分割的好几个文件  一个模块加载不想影响其他的 就chunkHash
          modules.exports = {
            entry: 'xxx',
            output: [name].[chunkHash].js
          }


    缓存时候  css文件hash会失效    
       contenthash解决csshash失效问题





    几个问题
  1. 单文件如何打包
  2. 多个文件如何切割
  3. 如何tree-shaking

*/