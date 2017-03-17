const path = require('path')

const config = {
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.js',
    publicPath: '',
    path: path.join(__dirname, '..', 'dist')
  }
}

module.exports = config
