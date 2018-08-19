import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'

import reducers from '../reducers'
import saga from '../sagas'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['error', 'nav'],
}
const persistedReducer = persistReducer(persistConfig, reducers)
const navigationMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav)
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware, navigationMiddleware]
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

const store = createStore(persistedReducer, applyMiddleware(...middleware))
sagaMiddleware.run(saga)
const persistor = persistStore(store)

export { store, persistor }