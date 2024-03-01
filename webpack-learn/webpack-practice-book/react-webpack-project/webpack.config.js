const HtmlWebpackPlugin = require('html-webpack-plugin');

// 注意！脚本中执行set NODE_ENV=production && webpack build，会使得环境production后面有一个空格，因此要trim一下
const isProduction = process.env.NODE_ENV.trim() === 'production';

module.exports = () => {
  return {
    mode: isProduction ? 'production' : 'development',
    devServer: {
      open: true,
      port: 3000
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modulses/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'] // 让jsx文件可以被Resolver自动识别（注意是 .js 非 js）
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        title: 'react webpack project'
      })
    ]
  }
}
