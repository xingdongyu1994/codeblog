/*
1.ws如何建立
  ws  http都是对tcp的封装  ws需要借助http协议进行一次握手  完事了在tcp通道传输就跟http无关了
  http服务器需要发送一个升级 upgrade请求  有服务器进行升级协议

   var ws  = new WebSocket('ws:localhost:xxx' ) 建立连接
   ws.onmessage = function(){
     console.log("xxx")
   }

   ws.send("xxx") // 发送数据

   上述一个简单的过程  new 一个实例 传递一个服务  利用http协议升级服务

   ws使用http通道需要我们有一个webhttp服务

2. 如何实现


  依node为基础
  1. 将我们正常的localhost:xxxx http服务  升级服务
     server.on('upgrade', (req, socket, upgradeHead) => {})
     响应我们head头
      connection: upgrade  // 升级的协议
      upgrade: websocket // 升级到websocket
      sec-websocket-accept  // 对客户端的sec-websocket-key的一个加密
  2. 升级成功后  就可以监听客户端发送过来的数据了
  3. socket得到客户端数据是一个buffer   需要转一次
  4. 得到真实数据 通过event  this.event.emit()  向websocket服务器注册数据
  5. 服务端也可以发送数据给客户端




  没有同源限制
  建立tcp协议上
  ws协议
  可以发送文本
  通过http代理
      
*/