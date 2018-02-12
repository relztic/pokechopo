// External Packages
import { node } from 'prop-types'
import React from 'react'

// Internal Packages
import StyledRoot from './styled/Root'

/**
 * Creates a new Root component.
 * @class
 */
const Root = ({ children }) => <StyledRoot>{children}</StyledRoot>

/** @override */
Root.propTypes = {
  children: node.isRequired,
}

export default Root
