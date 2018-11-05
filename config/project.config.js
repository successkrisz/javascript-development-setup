const path = require('path')
const ip = require('ip')

const basePath = path.join(__dirname, '..')

const config = {
  paths: {
    base: basePath,
    client: path.join(basePath, 'src'),
    dist: path.join(basePath, 'dist'),
    public: path.join(basePath, 'public'),
    server: path.join(basePath, 'server'),
    tests: path.join(basePath, 'tests'),
  },
  // Server Configuration
  server_host : ip.address(),
  server_port : process.env.PORT || 3000,
}

module.exports = config
