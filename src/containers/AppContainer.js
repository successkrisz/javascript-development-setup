import React, { PropTypes } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from '../components/Header'
import Routes from '../routes'
import { appContainer } from '../styles/index.css'

const AppContainer = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div className={appContainer}>
        <Header />
        <Routes />
      </div>
    </Router>
  </Provider>
)

AppContainer.propTypes = {
  store: PropTypes.object.isRequired
}

export default AppContainer
