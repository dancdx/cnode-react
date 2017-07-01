import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import Routes from './routes'
import configureStore from './store'

const store = configureStore()

const Root = ({ store }) => (
  <Provider store={store}>
    {Routes}
  </Provider>
)

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
registerServiceWorker()
