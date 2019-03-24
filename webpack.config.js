const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/lpw_entry.js',
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js?$/, //a regular expression that tests what kind of files to run through this loader.
        exclude: /(node_modules)/, //ignore these files
        use: {
          loader: 'babel-loader', //the name of the loader we are going to use (babel-loader).
          query: {
            presets: ['@babel/env'] //
          }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [ 'file-loader', 'image-webpack-loader' ]
      }
    ]
  },
  resolve: {
    extensions: [".js", '*']
  }
};
