const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  devtool: 'source-map',  // 开发环境生成map数据，不然会有警告
  mode: 'development',  // 开发环境
  output: {
    path: path.resolve(__dirname, 'dist'),  // 生成解析文件
    filename: '[name].[contenthash].js',  // 增加唯一标识
    publicPath: '/'
  }, 
  devServer: {  // 热重载
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 3000,
  }
})