// External Packages
import React from 'react'
import { create } from 'react-test-renderer'

// Internal Packages
import StyledRoot from '../Root'

describe('<StyledRoot />', () => {
  it('should style the component on valid props', () => {
    const styledComponent = create(<StyledRoot />)

    expect(styledComponent).toMatchSnapshot()
  })
})
