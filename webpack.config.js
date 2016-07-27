var path = require('path')
var webpack = require('webpack')

module.exports = {
  name: 'devbox-app',

  devtool: 'eval',

  entry: [
    './src/app'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  },

  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.json', '.scss']
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ]
}