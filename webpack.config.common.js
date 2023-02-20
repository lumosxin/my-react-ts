const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.tsx', // 文件入口
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // 要处理的文件
    alias: {
      '@': path.join(__dirname, '/src/')  // 根目录别名，页面文件可以使用@代替根目录
    }
  },
  module: { // 文件解析的规则配置
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset/resource'
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',  // 打包后的模版页面
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css', // 用hash处理css文件
    }),
    new CleanWebpackPlugin()
  ]
}