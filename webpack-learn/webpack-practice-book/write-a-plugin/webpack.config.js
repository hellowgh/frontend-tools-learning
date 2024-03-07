const HtmlWebpackPlugin = require('html-webpack-plugin');
const MyWebpackPlugin = require('./plugins/myWebpackPlugin')

module.exports = () => ({
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'custom plugin'
    }),
    new MyWebpackPlugin()
  ]
})
