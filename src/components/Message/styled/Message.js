// External Packages
import styled from 'styled-components'
import { variants } from 'styled-theming'

// Internal Packages
import { colors, dimensions } from 'config/palette'

/**
 * @constant {Function} * The variants to apply.
 */
const color = variants('mode', 'variant', {
  danger: { normal: colors.red.x500 },
  info: { normal: colors.grey.x500 },
  success: { normal: colors.green.x500 },
  warning: { normal: colors.yellow.x500 },
})

/**
 * @constant {Element} style The style of the component.
 */
const style = styled.span`
  color: ${color};
  font-size: ${dimensions.xLarge};
`

export default style
