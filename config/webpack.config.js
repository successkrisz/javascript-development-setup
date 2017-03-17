const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const project = require('./project.config')

const DEVELOPMENT  = process.env.NODE_ENV === 'development'
const PRODUCTION  = process.env.NODE_ENV === 'production'

const entry = PRODUCTION
  ? ['./src/index.js']
  : [
    './src/index.js',
    'webpack/hot/dev-server',
    `webpack-dev-server/client?http://${project.server_host}:${project.server_port}`
    ]

const plugins = PRODUCTION
  ? [ new webpack.optimize.UglifyJsPlugin ]
  : [ new webpack.HotModuleReplacementPlugin() ]

plugins.push(
  new HTMLWebpackPlugin({
    template: 'src/index.html'
  })
)

const config = {
  entry: entry,
  output: {
    filename: 'bundle.[hash:12].min.js',
    publicPath: '',
    path: path.join(__dirname, '..', 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.(woff|png|jpg|gif)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'images/[hash:12].[ext]'
          }
        }]
      }
    ]
  },
  plugins: plugins
}

module.exports = config
