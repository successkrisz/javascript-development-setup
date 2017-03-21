import React from 'react'
import ReactDOM from 'react-dom'

import AppContainer from './containers/AppContainer'

const render = () => {
  const MOUNT_NODE = document.getElementById('root')

  ReactDOM.render(<AppContainer />, MOUNT_NODE)
}

// Goooo
render()

if (module.hot) {
  module.hot.accept()
}
