import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import Header from '../components/Header'
import Routes from '../routes'
import { appContainer } from '../styles/index.css'

const AppContainer = () => (
  <Router>
    <div className={appContainer}>
      <Header />
      <Routes />
    </div>
  </Router>
)

export default AppContainer
