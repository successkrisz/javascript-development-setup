const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('../config/webpack.config.js')

const compiler = webpack(config)

const server = new WebpackDevServer(compiler, {
  hot: true,
  filename: config.output.filename,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
})

module.exports = server
