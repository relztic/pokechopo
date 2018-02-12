// Internal Packages
import Pokechopo from 'Pokechopo'
import render from 'config/render'
import 'config/styledTheming'

render(Pokechopo, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
