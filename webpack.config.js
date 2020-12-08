const webpack = require('webpack');
const merge = require("webpack-merge");

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {

  return merge([
      {
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader'
              }
            },
            {
              test: /\.svg$/,
              use: [
                {
                  loader: 'svg-url-loader',
                  options: {
                    limit: 10000,
                  },
                },
              ],
            },
            {
              test: /\.scss$/,
              use: [
                'style-loader',
                'css-loader',
                'sass-loader'
              ]
            },
            {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader',
                'sass-loader'
              ]
            },
            {test: /\.(png|jpe?g|gif|woff|woff2)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: "[path][name].[ext]",
                  esModule: false
                }
              },
            ],}
          ]
        },
        
    }
  ])
};