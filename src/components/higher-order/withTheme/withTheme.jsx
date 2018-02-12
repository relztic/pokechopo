// External Packages
import React from 'react'
import { ThemeProvider } from 'styled-components'

// Internal Packages
import theme from 'config/theme'
import getComponentDisplayName from 'utils/getComponentDisplayName'

/**
 * Creates a new withTheme higher-order component.
 * @class
 */
const withTheme = WrappedComponent => {
  const WithTheme = props => (
    <ThemeProvider theme={theme}>
      <WrappedComponent {...props} />
    </ThemeProvider>
  )

  /** @override */
  WithTheme.displayName = `WithTheme(${getComponentDisplayName(WrappedComponent)})`

  return WithTheme
}

export default withTheme
