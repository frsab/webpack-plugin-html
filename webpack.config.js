const  path = require('path')
const  dev = process.env.NODE_ENV==='dev';
const TerserPlugin = require("terser-webpack-plugin");






// Can be async
const minify = (input, sourceMap, minimizerOptions, extractsComments) => {
  // The `minimizerOptions` option contains option from the `terserOptions` option
  // You can use `minimizerOptions.myCustomOption`

  // Custom logic for extract comments
  const { map, code } = require("uglify-js") // Or require('./path/to/uglify-module')
    .minify(input, {
      /* Your options for minification */
    });

  return { map, code, warnings: [], errors: [], extractedComments: [] };
};

// Used to regenerate `fullhash`/`chunkhash` between different implementation
// Example: you fix a bug in custom minimizer/custom function, but unfortunately webpack doesn't know about it, so you will get the same fullhash/chunkhash
// to avoid this you can provide version of your custom minimizer
// You don't need if you use only `contenthash`
minify.getMinimizerVersion = () => {
  let packageJson;

  try {
    // eslint-disable-next-line global-require, import/no-extraneous-dependencies
    packageJson = require("uglify-module/package.json");
  } catch (error) {
    console.error(error);
  }
  return packageJson && packageJson.version;
};






module.exports = {
  mode: 'development',
  entry:'./assets/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'my-first-webpack.bundle.js',   
  },
  watch:true,
   
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      test : /\.js(\?.*)?$/i,
      exclude: /\/excludes/,
      minify

    }),
  ],
  },
};