// External Packages
import { shallow } from 'enzyme'
import React from 'react'

// Internal Packages
import Message from '../Message'

describe('<Message />', () => {
  it('should render the component on valid props', () => {
    let component

    component = shallow(<Message>Hello, World!</Message>)

    expect(component).toMatchSnapshot()

    component = shallow(<Message variant="danger">Hello, World!</Message>)

    expect(component).toMatchSnapshot()

    component = shallow(<Message variant="info">Hello, World!</Message>)

    expect(component).toMatchSnapshot()

    component = shallow(<Message variant="success">Hello, World!</Message>)

    expect(component).toMatchSnapshot()

    component = shallow(<Message variant="warning">Hello, World!</Message>)

    expect(component).toMatchSnapshot()
  })
})
