let webpackOptions = require("../webpack.config");
let webpack = require('../webpack')

let compiler = webpack(webpackOptions)
compiler.run((err) => {
  console.log("回调函数")
})