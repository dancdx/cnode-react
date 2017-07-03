import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// import App from './containers/App'
import List from './containers/List'
import Detail from './containers/Detail'

export default  <Router>
  <div>
    <Route exact path='/' component={List} />
    <Route path='/list' component={List} />
    <Route path='/detail' component={Detail} />
  </div>
</Router>
