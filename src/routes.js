import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Todos from './modules/Todos'
import Counter from './components/Counter'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/todos' component={Todos} />
    <Route exact path='/counter' component={Counter} />
    <Route render={() => <h1>Page Not Found</h1>} />
  </Switch>
)

export default Routes
