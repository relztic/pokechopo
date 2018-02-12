// External Packages
import React from 'react'
import { create } from 'react-test-renderer'

// Internal Packages
import StyledLink from '../Link'

describe('<StyledLink />', () => {
  it('should style the component on valid props', () => {
    const styledComponent = create(<StyledLink />)

    expect(styledComponent).toMatchSnapshot()
  })
})
