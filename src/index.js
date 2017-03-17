import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import './index.css'

const render = () => {
  const MOUNT_NODE = document.getElementById('root')

  ReactDOM.render(<App />, MOUNT_NODE)
}

// Goooo
render()

if (module.hot) {
  module.hot.accept()
}
