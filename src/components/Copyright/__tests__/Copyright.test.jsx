// External Packages
import { shallow } from 'enzyme'
import React from 'react'

// Internal Packages
import Copyright from '../Copyright'

describe('<Copyright />', () => {
  it('should render the component on valid props', () => {
    const component = shallow(<Copyright>Hello, World!</Copyright>)

    expect(component).toMatchSnapshot()
  })
})
