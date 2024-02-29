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
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        title: 'react webpack project'
      })
    ]
  }
}
