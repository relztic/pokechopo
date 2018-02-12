// External Packages
import { shallow } from 'enzyme'
import React from 'react'

// Internal Packages
import Link from '../Link'

describe('<Link />', () => {
  it('should render the component on valid props', () => {
    let component

    component = shallow(<Link href="https://pokeapi.co/api/v2/pokemon/1/">Hello, World!</Link>)

    expect(component).toMatchSnapshot()

    component = shallow(
      <Link href="https://pokeapi.co/api/v2/pokemon/1/" target="blank">
        Hello, World!
      </Link>
    )

    expect(component).toMatchSnapshot()

    component = shallow(
      <Link href="https://pokeapi.co/api/v2/pokemon/1/" target="parent">
        Hello, World!
      </Link>
    )

    expect(component).toMatchSnapshot()

    component = shallow(
      <Link href="https://pokeapi.co/api/v2/pokemon/1/" target="top">
        Hello, World!
      </Link>
    )

    expect(component).toMatchSnapshot()
  })
})
