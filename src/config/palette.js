/**
 * @constant {Object} colors The colors of the palette.
 */
const colors = Object.freeze({
  black: `#000000`,
  green: { x500: `#4caf50` },
  grey: { x500: `#9e9e9e` },
  red: { x500: `#f44336` },
  white: `#ffffff`,
  yellow: { x500: `#ffeb3b` },
})

/**
 * @constant {Object} dimensions The dimensions of the palette.
 */
const dimensions = Object.freeze({
  xxxSmall: `0.25rem`,
  xxSmall: `0.5rem`,
  xSmall: `0.75rem`,
  xMedium: `1rem`,
  xLarge: `1.25rem`,
})

/**
 * @constant {Object} durations The durations of the palette.
 */
const durations = Object.freeze({
  slow: `600ms`,
  normal: `400ms`,
  fast: `200ms`,
})

/**
 * @constant {Object} fonts The fonts of the palette.
 */
const fonts = Object.freeze({
  sansSerif: `'Helvetica Neue', Helvetica, Arial, sans-serif`,
})

export { colors, dimensions, durations, fonts }
