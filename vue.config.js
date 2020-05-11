'use strict'

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    port: '9999',
    open: process.env.NODE_ENV === 'development'
  }
}
