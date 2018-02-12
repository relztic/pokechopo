// External Packages
import { configure } from 'enzyme' // eslint-disable-line
import Adapter from 'enzyme-adapter-react-16' // eslint-disable-line
import 'jest-styled-components' // eslint-disable-line

configure({ adapter: new Adapter() })

// The Jest API does not allow to stub the environmental settings.
process.env = {
  ...process.env,

  // Core
  POKECHOPO_ENVIRONMENT: 'development',
  POKECHOPO_NAME: 'Pokéchopo',
  POKECHOPO_VERSION: '0.0.0',

  // API
  POKECHOPO_API_URL: 'https://pokeapi.co/api/',
  POKECHOPO_API_VERSION: '2',
}
