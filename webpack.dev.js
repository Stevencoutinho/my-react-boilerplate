const merge = require('webpack-merge');
const common = require('./webpack.common.js');// 共通設定
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  plugins: [],
  devtool: '#inline-source-map',
  devServer: {
    inline: true,
    open: true,
    contentBase: path.join(__dirname, 'src'),
    publicPath: '/',
    historyApiFallback: true,
    watchContentBase: true,
    // host: '127.0.0.1',
    port: 3000,
  }
});
