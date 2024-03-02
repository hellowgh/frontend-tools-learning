  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const {CleanWebpackPlugin} = require('clean-webpack-plugin');
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');
  const { VueLoaderPlugin } = require('vue-loader');

  const envMode = process.env.NODE_ENV.trim();
  const isProduction = envMode === 'production';

  module.exports = () => ({
    mode: envMode,
    output: {
      chunkFilename: isProduction ? '[name].[chunkhash:8].chunk.js' : '[name].js',
      filename: isProduction ? '[name].[contenthash:8].js' : '[name].js'
    },
    devServer: {
      port: 3000,
      open: true
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: 'ts-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true, // true：启用loader缓存
              cacheCompression: false, // false：不压缩缓存文件，提升读写速度
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.less$/,
          use: ['vue-style-loader', 'css-loader', 'less-loader']
        }
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        title: 'vue-webpack-manual-project',
        template: './public/index.html'
      }),
      isProduction && new MiniCssExtractPlugin({
        chunkFilename: '[name].[contenthash:8].chunk.css',
        filename: '[name].[contenthash:8].css'
      })
    ].filter(Boolean),
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.runtime.esm-bundler.js', // 使用vue的esm版本，便于webpack静态tree-shaking
      },
      extensions: ['.js', '.vue'],
    }
  })
