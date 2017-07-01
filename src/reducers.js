import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import list from './containers/List/reducer'

const rootReducer = combineReducers({
  list,
  routerReducer
})

export default rootReducer
