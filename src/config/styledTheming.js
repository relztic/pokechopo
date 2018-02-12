// External Packages
import { injectGlobal } from 'styled-components'

// Internal Packages
import { colors, fonts } from 'config/palette'

/* eslint-disable */
injectGlobal`
  html {
    background-color: ${colors.black};
    height: 100%;
  }

  body {
    align-items: center;
    color: ${colors.white};
    display: flex;
    font-family: ${fonts.sansSerif};
    justify-content: center;
    min-height: 100%;
  }
`
/* eslint-enable */
