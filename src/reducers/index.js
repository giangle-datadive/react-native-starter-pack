import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import { LOGOUT } from '../actions/user'
import { persistor } from '../config/store'
import Navigator from '../config/routes'

import user from './user'

const navReducer = createNavigationReducer(Navigator)

const appReducer = combineReducers({
  user,
  nav: navReducer,
})

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    persistor.purge()
    state = undefined //eslint-disable-line
  }
  return appReducer(state, action)
}

export default rootReducer