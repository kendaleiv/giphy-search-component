const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let plugins = [];

if (process.env.INCLUDE_WEBPACK_HTML) {
  plugins.push(new HtmlWebpackPlugin({
    template: path.join(__dirname, 'index.html')
  }));
}

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  mode: 'development',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'giphy-search-component.min.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: plugins
};
