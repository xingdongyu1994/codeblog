const path = require('path')
const MyPlugin = require('./plugins/MyPlugin');
module.exports = {

  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist')
  },
  plugins: [
    new MyPlugin()
  ]
}