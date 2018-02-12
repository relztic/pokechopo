// External Packages
import { node } from 'prop-types'
import React from 'react'

// Internal Packages
import StyledCopyright from './styled/Copyright'

/**
 * Creates a new Copyright component.
 * @class
 */
const Copyright = ({ children }) => <StyledCopyright>{children}</StyledCopyright>

/** @override */
Copyright.propTypes = {
  children: node.isRequired,
}

export default Copyright
