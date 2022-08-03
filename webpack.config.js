let  path = require('path')
module.exports = {
  mode: 'development',
  entry:'./assets/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'my-first-webpack.bundle.js',   
  },
  watch:true
      
};