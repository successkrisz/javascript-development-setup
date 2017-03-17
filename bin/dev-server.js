const project = require('../config/project.config')
const server = require('../server/dev')
const debug = require('debug')('app:bin:dev-server')

server.listen(project.server_port, project.server_host, function () {
  debug(`Server is now running at http://${project.server_host}:${project.server_port}`)
})
