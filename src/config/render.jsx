// External Packages
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

// Internal Packages
import { Root } from 'components'
import { withTheme } from 'components/higher-order'
import store from 'config/store'

/**
 * @constant {Element} RootWithTheme The wrapped Root component, withTheme.
 */
const RootWithTheme = withTheme(Root)

/**
 * Reference: [render](https://reactjs.org/docs/react-dom.html#render)
 *
 * @param {Element} Element   The element to wrap.
 * @param {Element} container The container to mount.
 */
export default function render(Element, container) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <RootWithTheme>
          <Element />
        </RootWithTheme>
      </Provider>
    </AppContainer>,
    container
  )
}
