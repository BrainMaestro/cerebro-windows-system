const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index: './src/index'
  },
  output: {
    path: './dist',
    libraryTarget: 'commonjs2',
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.json'],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ]
  },
  node: {
    __dirname: true,
  },
  target: 'electron-renderer',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.png$/, use: 'url-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ]
  }
};
