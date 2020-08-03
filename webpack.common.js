const path = require('path');// pathモジュール
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.resolve(__dirname, 'src');
const public = path.resolve(__dirname, 'public');

module.exports = {
  // エントリーポイントの設定
  entry: src + '/index.jsx',
  // 出力の設定
  output: {
    path: public,
    publicPath: '/',
    filename: 'bundle.js'
  },
  // modules
  module: {
    rules: [
      {// js
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options : {
              presets: [['@babel/preset-env', {modules: false}]]
            }
          },
          // {
          //   loader: 'eslint-loader',
          //   options: {
          //     fix: true
          //   }
          // }
        ],
      },
      {// css
        test: /\.(css|sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {// img
        test: /\.(jpg|JPG|jpeg|png|PING|gif|mp3|svg|ttf|woff2|woff|eot)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: src + '/index.html',
      filename: 'index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', 'json']
  },
};