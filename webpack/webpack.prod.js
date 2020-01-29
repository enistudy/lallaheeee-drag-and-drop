const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'static/[name].[hash].js',
    path: path.join(__dirname, '../build'),
    publicPath: './',
  },
});
