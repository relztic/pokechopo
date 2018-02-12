// External Packages
import { shallow } from 'enzyme'
import React from 'react'

// Internal Packages
import withTheme from '../withTheme'

describe('<WithTheme(WrappedComponent) />', () => {
  it('should wrap the component on valid props', () => {
    const WrappedComponent = 'span'

    const WrappedComponentWithTheme = withTheme(WrappedComponent)

    const wrappedComponent = shallow(<WrappedComponentWithTheme>Hello, World!</WrappedComponentWithTheme>)

    expect(wrappedComponent).toMatchSnapshot()
  })
})
