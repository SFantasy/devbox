const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

process.env.NODE_ENV = 'production';

module.exports = {
  name: 'devbox-app',

  entry: [
    './src/app.jsx',
  ],

  output: {
    path: path.join(__dirname, 'dest'),
    filename: 'app.bundle.js',
  },

  module: {
    loaders: [{
      test: /\.js[x]$/,
      loaders: ['babel'],
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      loader: 'style!css',
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass!postcss',
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)/,
      loader: 'url-loader?limit=100000',
    }, {
      test: /\.md$/,
      loader: 'html!markdown',
    }],
  },

  postcss: function () {
    return [autoprefixer];
  },

  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.jsx', '.js', '.json', '.scss'],
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};
