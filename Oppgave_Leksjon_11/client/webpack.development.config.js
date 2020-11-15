const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    publicPath: '/',
    /* proxy: {
      '/': 'http://localhost:5000',
    }, */
  },
  devtool: 'eval-source-map',
});
