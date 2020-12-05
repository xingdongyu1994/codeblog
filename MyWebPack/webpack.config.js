const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const resolve = p => path.resolve(__dirname, '..', p)
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: './src/xunhuanyilai/main.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist')
  },
  // module: {
  //   rules: [{
  //     test: /\.js$/,
  //     use: {
  //       loader: 'babel-loader'
  //     }
  //   }]
  // },
  // plugins: [
  //   new HTMLPlugin({
  //     filename: 'index.html',
  //     template: './index.html',
  //     inject: true
  //   })
  // ],
}