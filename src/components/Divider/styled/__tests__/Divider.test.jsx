// External Packages
import React from 'react'
import { create } from 'react-test-renderer'

// Internal Packages
import StyledDivider from '../Divider'

describe('<StyledDivider />', () => {
  it('should style the component on valid props', () => {
    const styledComponent = create(<StyledDivider />)

    expect(styledComponent).toMatchSnapshot()
  })
})
