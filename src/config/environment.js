// Internal Packages
import { version } from '../../package.json'

// Core
const POKECHOPO_ENVIRONMENT = process.env.POKECHOPO_ENVIRONMENT || process.env.NODE_ENV
const POKECHOPO_NAME = process.env.POKECHOPO_NAME || 'Pokéchopo'
const POKECHOPO_VERSION = process.env.POKECHOPO_VERSION || version

// API
const { POKECHOPO_API_URL } = process.env
const { POKECHOPO_API_VERSION } = process.env

/**
 * @constant {Object} environment The environment of the application.
 */
const environment = Object.freeze({
  // Core
  POKECHOPO_ENVIRONMENT,
  POKECHOPO_NAME,
  POKECHOPO_VERSION,

  // API
  POKECHOPO_API_URL,
  POKECHOPO_API_VERSION: parseInt(POKECHOPO_API_VERSION, 10),
})

export default environment
