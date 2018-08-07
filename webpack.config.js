const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
  filename: './style.css'
});
module.exports = {
  entry: "./index.js",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  context: path.resolve(__dirname, 'src'),
  devServer: {
    contentBase: path.resolve(__dirname, 'public/assets'),
    stats: 'errors-only',
    open: true,
    port: 8080,
    compress: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['public']),  // TODO check if these plugins are needed on webpack 4
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    extractPlugin
  ],
  module: {
    rules: [{
      test: /\.(jpg|png|gif|svg)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './assets/'
          }
        }]
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: extractPlugin.extract({
        use: ["css-loader", "sass-loader", "postcss-loader"], // TODO check if postcss is needed
        fallback: 'style-loader'
      })
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-0', 'react']
        }
      }
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.(png|gif|svg|eot|ttf|woff|woff2)$/, // TODO add jpg when import images work
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    }]
  }
}