const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  devtool: false, // 不生成
  mode: 'production', // 环境
  output: {
    path: path.resolve(__dirname, 'dist'),  // 生成解析文件
    filename: '[name].[contenthash].js',  // 增加唯一标识
    publicPath: './'
  },
})