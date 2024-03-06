const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
  mode: 'development',
  resolveLoader: {
    modules: ['node_module', path.resolve(__dirname, 'loaders')]
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: {
          loader: 'my-loader',
          options: {
            prefix: 'use strict'
          }
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'custom loader'
    })
  ]
})
