import React from 'react'
import { Provider, connect } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { reduxifyNavigator } from 'react-navigation-redux-helpers'
import { store, persistor } from './config/store'
import Navigator from './config/routes'

const App = reduxifyNavigator(Navigator, 'root')
const mapStateToProps = ({ nav }) => ({ state: nav })
const AppWithNavigationState = connect(mapStateToProps)(App)

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <AppWithNavigationState />
    </PersistGate>
  </Provider>
)
