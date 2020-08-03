const merge = require('webpack-merge');
const common = require('./webpack.common.js');// 共通設定

module.exports = merge(common, {
  mode: 'production'
});