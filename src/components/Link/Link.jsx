// External Packages
import { node, oneOf, string } from 'prop-types'
import React from 'react'

// Internal Packages
import StyledLink from './styled/Link'

/**
 * Creates a new Link component.
 * @class
 */
const Link = ({ children, href, target }) => (
  <StyledLink href={href} target={`_${target}`}>
    {children}
  </StyledLink>
)

/** @override */
Link.propTypes = {
  children: node.isRequired,
  href: string.isRequired,
  target: oneOf(['blank', 'parent', 'self', 'top']),
}

/** @override */
Link.defaultProps = {
  target: 'self',
}

export default Link
