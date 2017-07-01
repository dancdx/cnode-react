import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(...middleware)
    )
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
