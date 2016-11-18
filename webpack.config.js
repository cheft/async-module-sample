var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // devtool: 'source-map',
  entry: {
    script: [
      // 'webpack/hot/dev-server',
      path.resolve('./app/main.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name].js',
    publicPath: '/assets/',
    chunkFilename: '[name]-[id].js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader','css-loader')
    }]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),  
  ]
};
