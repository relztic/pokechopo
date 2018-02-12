// External Packages
import React from 'react'
import { create } from 'react-test-renderer'

// Internal Packages
import StyledCopyright from '../Copyright'

describe('<StyledCopyright />', () => {
  it('should style the component on valid props', () => {
    const styledComponent = create(<StyledCopyright />)

    expect(styledComponent).toMatchSnapshot()
  })
})
