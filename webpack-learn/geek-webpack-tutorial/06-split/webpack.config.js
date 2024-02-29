const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    foo: './src/foo.js',
  },
  output: {
    publicPath: '/dist/',
    filename: '[name].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}