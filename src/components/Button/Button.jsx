// External Packages
import { bool, func, node } from 'prop-types'
import React from 'react'

// Internal Packages
import StyledButton from './styled/Button'

/**
 * Creates a new Button component.
 * @class
 */
const Button = ({ children, onClick, disabled }) => (
  <StyledButton onClick={onClick} disabled={disabled}>
    {children}
  </StyledButton>
)

/** @override */
Button.propTypes = {
  children: node.isRequired,
  onClick: func.isRequired,
  disabled: bool,
}

/** @override */
Button.defaultProps = {
  disabled: false,
}

export default Button
