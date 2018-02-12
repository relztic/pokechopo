// External Packages
import styled from 'styled-components'

// Internal Packages
import { colors, durations } from 'config/palette'

/**
 * @constant {Element} style The style of the component.
 */
const style = styled.a`
  color: ${colors.white};
  text-decoration-skip: ink;
  transition: color ${durations.fast} ease-in;

  &:hover {
    color: ${colors.yellow.x500};
  }
`

export default style
