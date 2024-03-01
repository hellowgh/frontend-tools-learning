import HtmlWebpackPlugin from 'html-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';

module.exports = () => ({
  plugins: [
    new HtmlWebpackPlugin()
  ]
})