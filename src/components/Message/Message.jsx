// External Packages
import { node, oneOf } from 'prop-types'
import React from 'react'

// Internal Packages
import StyledMessage from './styled/Message'

/**
 * Creates a new Message component.
 * @class
 */
const Message = ({ children, variant }) => <StyledMessage variant={variant}>{children}</StyledMessage>

/** @override */
Message.propTypes = {
  children: node.isRequired,
  variant: oneOf(['danger', 'info', 'normal', 'success', 'warning']),
}

/** @override */
Message.defaultProps = {
  variant: 'normal',
}

export default Message
