import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// import App from './containers/App'
import List from './containers/List'
import Detail from './containers/Detail'
import User from './containers/User'

export default  <Router>
  <div>
    <Route exact path='/' component={List} />
    <Route path='/list' component={List} />
    <Route path='/detail' component={Detail} />
    <Route path='/user' component={User} />
  </div>
</Router>
