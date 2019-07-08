const webpack = require('webpack');
const path = require('path');

// Webpack is a module bundler, which means it takes modules with dependencies
// and packages them into one bundle file. In this configuration, it also uses
// babel to transpile the files before bundling. Webpack knows which files to include
// by starting with the 'entry' file in the config, and following the es6 import
// statements.

// Build directory is where the bundle file will be placed
let BUILD_DIR = path.resolve(__dirname, 'client/dist');
// App directory is where all of your raw JSX files will be placed
let APP_DIR = path.resolve(__dirname, 'client/src');

module.exports = {
  entry: path.join(APP_DIR + '/index.jsx'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};
