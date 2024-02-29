const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
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