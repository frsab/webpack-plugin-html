let  path = require('path')
module.exports = {
  mode: 'development',
  entry:'./assets/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'my-first-webpack.bundle.js',   
  },
  watch:true,
  // module:{
  //   rules: [
  //     {
  //       test: /\.m?js$/,
  //       exclude: /node_modules/,
  //       use: ['babel-loader']
  //       // use: {
  //       //   loader: 'babel-loader',
  //       //   options: {
  //       //     presets:['env']
  //       //     // presets: [
  //       //     //   ['@babel/preset-env', { targets: "defaults" }]
  //       //     // ],
  //       //     // plugins: ['@babel/plugin-proposal-class-properties']
  //       //   }
  //       // }
  //     }
  //   ]
  // }     
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: [
        //       ['@babel/preset-env'
        //     //  , { targets: "defaults" }
        //     ]
        //     ]
        //   }
        // }
      }
    ]
  } 
};