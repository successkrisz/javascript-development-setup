import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

export default (initialState = {}) => {
  const middlewares = [thunk]

  const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  const hasReduxDevTools = reduxDevTools && (typeof reduxDevTools === 'function')

  const composeEnhancers = (__DEV__ && hasReduxDevTools) ? reduxDevTools : compose

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )

  return store
}
