const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./client/index.js', './style.css'],
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    static: {
        directory: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },
    proxy: {
      '/api' : 'http://localhost:3000',
    },
  },
  plugins: [new HtmlWebpackPlugin(
    {
    title: 'Development',
    template: 'index.html',
    }
    )],
  module: {
    rules: [
      {
        test: /(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              exclude: /node_modules/,
              presets: ['@babel/preset-env','@babel/preset-react'],
            },
          },
        ]
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
}