/* 
1.  js defer  async 区别
2. preload prefetch区别
  加载js css 通过 script link标签来引入要加载的资源  在由浏览器来分配加载顺序执行  
  有了preload <link pre = "preload" as="script | style" onload = function(){}  onerror=function(){}>  提前加载
  preload 在dom渲染之前加载 js  css分离使用  加载当前页面中数据
  prefetch 在浏览器空闲时间加载以后会用到的资源 场景用在非首页上  这样后续就可以快速加载后面的页面了

3. from memory cache、from disk cache
  这个在http前端缓存时候 常见到的
  memory cache  缓存一些 js 字体   关闭浏览器就消失  这个改动频繁随时执行
  disk cache 缓存   css    加载完改动不频繁

  图片
  请求资源 200  退出浏览器  再次进来formdisk  刷新就formmemory

4.CDN 加速，为什么用 CDN 加速
  内容分发网络

  域名解析 ip
  域名解析cname  cname解析ip

  cdn为了改善互联网服务质量 提升访问速度

  服务资源分为静态的 动态的
  动态 jsp 就不说了 我们cdn上也是部署静态资源

  我们静态资源也是一个域名 xxx/static   
  这个域名是解析一个ip  如何解析的  又如何解析成一个离用户近的ip
  普通的dns是多不到了 需要一个特殊的dns服务器  1.需要知道用户当前的位置 2. 知道当前这个域名的ip
  1. 位置可以通过移动运营商得到
  2. 第二个问题就通过cdn得到  cdn运营商提供一个dns服务器
  

*/