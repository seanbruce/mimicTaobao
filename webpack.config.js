"use strict";

const path = require('path');
const Webpack = require('webpack');
const MiniSccExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const homePage = new HtmlWebpackPlugin({
  filename: 'taobao.html',
  template: 'src/taobao.html',
  chunks: ['app'],
});
const supportPlugin = new Webpack.ProvidePlugin({
});
const clean = new CleanWebpackPlugin(['dist']);
const miniSccExtractPlugin = new MiniSccExtractPlugin ({
  filename: 'app.min.css',
});

const config = {
  entry: {
    app: './src/js/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'app.bundle.min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniSccExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: {
                safe: true
              }
            }
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          }
        ],
        exclude: path.resolve(__dirname, 'src/taobao.html'),
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          }
        ]
      },
    ],
  },
  plugins: [
    supportPlugin,
    miniSccExtractPlugin,
    homePage,
    clean
  ],
}

module.exports = config;
