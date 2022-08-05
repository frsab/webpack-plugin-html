const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')

// const  path = require('path')
// const  dev = process.env.NODE_ENV==='dev';
// const TerserPlugin = require("terser-webpack-plugin");


module.exports =merge(common, {
  mode: 'development',
  watch:true,
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
});