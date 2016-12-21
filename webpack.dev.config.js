const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');

const dashboard = new Dashboard();

process.env.NODE_ENV = 'development';

module.exports = {
  name: 'devbox-app',

  devtool: 'cheap-source-map',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/app',
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/dist/',
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
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
    }]
  },

  postcss: function () {
    return [autoprefixer];
  },

  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.json', '.scss'],
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new DashboardPlugin(dashboard.setData),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
