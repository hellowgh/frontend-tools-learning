const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// 注意！脚本中执行set NODE_ENV=production && webpack build，会使得环境production后面有一个空格，因此要trim一下
const isProduction = process.env.NODE_ENV.trim() === 'production';

module.exports = () => {
  return {
    mode: isProduction ? 'production' : 'development',
    entry: {
      index: {
        import: './src/index.tsx', // import表示入口文件路径
        dependOn: 'shared' // dependOn表示入口文件的依赖的chunk
      },
      details: {
        import: './src/details.tsx',
        dependOn: 'shared',
      },
      shared: ['react', 'react-dom'] // 这里将公共代码放在一个shared chunk中
    },
    output: {
      chunkFilename: isProduction ? '[name].[chunkhash:8].chunk.js' : '[name].chunk.js',
      filename: isProduction ? '[name].[contenthash:8].js' : '[name].js'
    },
    devServer: {
      open: true,
      port: 3000
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader'
        },
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
        },
        {
          test: /\.less$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'less-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource', // mistake 注意这里是type
        },
        {
          test: /\.(woff|woff2|eot|otf)$/i,
          type: 'asset/resource'
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', 'tsx', '.less'] // 让jsx文件可以被Resolver自动识别（注意是 .js 非 js）
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
        title: 'react webpack project',
        chunks: ['shared', 'index']
      }),
      new HtmlWebpackPlugin({
        filename: 'details.html',
        template: './public/index.html',
        title: 'details',
        chunks: ['shared', 'details'] // 将这些chunk在HTML中引入
      }),
      isProduction && new MiniCssExtractPlugin({
        filename: '[name].[contenthash:8].css',
        chunkFilename: '[name].[contenthash:8].chunk.css'
      }),
      new CleanWebpackPlugin(),
    ].filter(Boolean)
  }
}
