const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WorkboxWebPackPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new workboxPlugin.GenerateSW({
      swDest: 'serviceWorker.js',
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};
