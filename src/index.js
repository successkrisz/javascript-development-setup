import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'

import AppContainer from './containers/AppContainer'

// Creating the Store
const store = createStore()

const render = () => {
  const MOUNT_NODE = document.getElementById('root')

  ReactDOM.render(<AppContainer store={store} />, MOUNT_NODE)
}

// Goooo
render()

if (module.hot) {
  module.hot.accept()
}
