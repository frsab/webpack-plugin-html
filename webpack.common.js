const  path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:'./assets/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'my-first-webpack.bundle.js',   
  },
  // plugins:[
  //   new HtmlWebpackPlugin({title:'Production'})
  // ]
};