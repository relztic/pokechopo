// External Packages
import { shallow } from 'enzyme'
import React from 'react'

// Internal Packages
import Root from '../Root'

describe('<Root />', () => {
  it('should render the component on valid props', () => {
    const component = shallow(<Root>Hello, World!</Root>)

    expect(component).toMatchSnapshot()
  })
})
