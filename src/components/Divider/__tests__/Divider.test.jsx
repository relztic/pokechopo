// External Packages
import { shallow } from 'enzyme'
import React from 'react'

// Internal Packages
import Divider from '../Divider'

describe('<Divider />', () => {
  it('should render the component on valid props', () => {
    const component = shallow(<Divider />)

    expect(component).toMatchSnapshot()
  })
})
