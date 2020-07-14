const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }
}