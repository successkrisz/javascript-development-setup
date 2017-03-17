const path = require('path')
const webpack = require('webpack')

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

const plugins = DEVELOPMENT
  ? [ new webpack.HotModuleReplacementPlugin() ]
  : []

const config = {
  entry: entry,
  output: {
    filename: 'bundle.js',
    publicPath: PRODUCTION ? 'dist/' : '/dist/',
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
