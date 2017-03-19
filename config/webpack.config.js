const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const debug = require('debug')('app:config:webpack')

const project = require('./project.config')

const __DEV__ = process.env.NODE_ENV === 'development'
const __PROD__ = process.env.NODE_ENV === 'production'
const __TEST__ = process.env.NODE_ENV === 'test'

// Shared Configuration
const config = {
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.[hash:12].min.js',
    publicPath: '',
    path: project.paths.dist
  },
  devtool: 'source-map',
  plugins: [
    new HTMLWebpackPlugin({ template: `${project.paths.client}/index.html` }),
    new webpack.DefinePlugin({
      __DEV__: __DEV__,
      __PROD__: __PROD__,
      __TEST__: __TEST__
    })
  ],
  module: { rules: [] }
}

// Production Configuration
if (__PROD__) {
  config.devtool = false
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('style-[contenthash:10].css')
  )
}

// Development Configuration
if (__DEV__) {
  config.entry.push(
    'webpack/hot/dev-server',
    `webpack-dev-server/client?http://${project.server_host}:${project.server_port}`
  )
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
}

// Configuring Loaders

// Only the CSS rules before ExtractTextPlugin
const cssName = __PROD__ ? '[hash:base64:10]' : '[path][name]---[local]'

config.module.rules.push(
  {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [
      { loader: 'style-loader' },
      { loader: `css-loader?localIdentName=${cssName}` },
      { loader: 'sass-loader?sourceMap' }
    ]
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      { loader: 'style-loader' },
      { loader: `css-loader?localIdentName=${cssName}` }
    ]
  }
)

if (__PROD__) {
  debug('Applying ExtractTextPlugin to CSS loaders')
  config.module.rules = config.module.rules.map(rule => {
    const loadersToApply = rule.use.slice(1).map(loader => loader.loader)
    rule.use = ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: loadersToApply
    })
    return rule
  })
}

config.module.rules.push(
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
)

module.exports = config
