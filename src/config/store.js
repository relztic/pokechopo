// External Packages
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

// Internal Packages
import * as reducers from 'reducers'

/**
 * @constant {Function} composeEnhancers The enhanced compose function, DevTools.
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line

/**
 * @constant {Function} reducer The reducer to apply.
 */
const reducer = combineReducers(reducers)

/**
 * @constant {Function} enhancer The enhancer to apply.
 */
const enhancer = composeEnhancers(applyMiddleware(thunk))

/**
 * @constant {Object} store The store of the application.
 */
const store = createStore(reducer, enhancer)

if (module.hot) {
  module.hot.accept('reducers', () => {
    const nextReducer = combineReducers(require('reducers')) // eslint-disable-line

    store.replaceReducer(nextReducer)
  })
}

export default store
