import MyWebSocket from '../main'

const http = require("http"),
  fs = require("fs"),
  path = require("path"),
  url = require("url");
// 获取当前目录
var root = path.resolve();
// 创建服务器
var sever = http.createServer(function (request, response) {
  var pathname = url.parse(request.url).pathname;
  var filepath = path.join(root, pathname);
  // 获取文件状态
  fs.stat(filepath, function (err, stats) {
    if (err) {
      // 发送404响应
      response.writeHead(404);
      response.end("404 Not Found.");
    } else {
      // 发送200响应
      response.writeHead(200);
      // response是一个writeStream对象，fs读取html后，可以用pipe方法直接写入
      fs.createReadStream(filepath).pipe(response);
    }
  });
});

sever.listen(8888);

var ws = new MyWebSocket(sever);

ws.on('data', (data) => {
  console.log('receive data:' + data);
  ws.send('服务发送数据');
});
console.log('Sever is running at http://127.0.0.1:8888/');



// 参考

//https://segmentfault.com/a/1190000022075295

// https://segmentfault.com/a/1190000022481875
// https://github.com/whxaxes/node-test/blob/master/server/websocket/socket.js