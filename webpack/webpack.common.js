const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const commonPaths = require('./paths');

module.exports = {
  entry: commonPaths.entryPath,
  module: {
    // can be extended for css
    rules: [
      {
        enforce: 'pre',
        test: /\.(js)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          emitWarning: process.env.NODE_ENV !== 'production',
        },
      },
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js'], // can be extended for css and scss
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath,
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    }),
  ],
};
