
import { LOAD_LIST_SUCCESS } from './constants'

const initialState = {
  data: null
}

const list = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LIST_SUCCESS:
      return state
    default:
      return state
  }
}

export default list
