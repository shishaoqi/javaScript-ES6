const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production' // 是否生产环境

function resolve (dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
  mode: isProd ? 'production' : 'development',
  //程序主入口目录
  entry: {
    app: './src/main.ts'
  },

  //把打包的目录放到哪
  output: {
    path: resolve('dist'),
    filename: '[name].[contenthash:8].js' //产生的js文件的取名
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: [resolve('src')]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin({
    }),

    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  devtool: isProd ? 'cheap-module-source-map' : 'eval-cheap-module-source-map',

  devServer: {
    host: 'localhost', // 主机名
    //stats: 'errors-only', // 打包日志输出输出错误信息
    port: 8081,
    open: true
  },
}