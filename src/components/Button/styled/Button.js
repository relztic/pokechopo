// External Packages
import styled, { css } from 'styled-components'

// Internal Packages
import { colors, dimensions, durations } from 'config/palette'

/**
 * @constant {Element} style The style of the component.
 */
const style = styled.button`
  background-color: ${colors.black};
  border: 2px solid ${colors.white};
  border-radius: 3px;
  color: ${colors.white};
  cursor: pointer;
  padding: ${dimensions.xMedium};
  transition: all ${durations.fast} ease-in;
  transition-property: border-color, color;
  ${({ disabled }) =>
    disabled &&
    css`
      border-color: ${colors.grey.x500};
      color: ${colors.grey.x500};
      cursor: wait;
    `};

  &:focus {
    outline: none;
  }
`

export default style
