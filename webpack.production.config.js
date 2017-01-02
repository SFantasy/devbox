var path = require('path')
var webpack = require('webpack')

module.exports = {
  name: 'devbox-app',

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
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)/,
      loader: 'url-loader?limit=100000'
    }, {
      test: /\.md$/,
      loader: 'html!markdown'
    }]
  },

  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.json', '.scss']
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        beautify: true,
        warnings: false
      }
    })
  ]
}
