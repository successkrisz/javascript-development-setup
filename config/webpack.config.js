const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const project = require('./project.config')

const DEVELOPMENT  = process.env.NODE_ENV === 'development'
const PRODUCTION  = process.env.NODE_ENV === 'production'

const entry = ['./src/index.js']

if (DEVELOPMENT) {
  entry.push('webpack/hot/dev-server')
  entry.push(`webpack-dev-server/client?http://${project.server_host}:${project.server_port}`)
}

const plugins = PRODUCTION
  ? [
      new webpack.optimize.UglifyJsPlugin(),
      new ExtractTextPlugin('style-[contenthash:10].css')
    ]
  : [ new webpack.HotModuleReplacementPlugin() ]

plugins.push(
  new HTMLWebpackPlugin({
    template: 'src/index.html'
  })
)

const cssIdentifier = PRODUCTION ? '[hash:base64:10]':'[path][name]---[local]'

const cssLoader = PRODUCTION
  ? ExtractTextPlugin.extract({
    use: 'css-loader?localIdentName=' + cssIdentifier
    })
  : [{ loader: 'style-loader' }, { loader: 'css-loader?localIdentName=' + cssIdentifier }]

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
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: cssLoader
      }
    ]
  },
  plugins: plugins
}

module.exports = config
