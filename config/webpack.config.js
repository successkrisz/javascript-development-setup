const path = require('path')

const config = {
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.js',
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
      }
    ]
  }
}

module.exports = config
