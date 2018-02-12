// External Packages
import React from 'react'
import { create } from 'react-test-renderer'

// Internal Packages
import StyledButton from '../Button'

describe('<StyledButton />', () => {
  it('should style the component on valid props', () => {
    let styledComponent

    styledComponent = create(<StyledButton />)

    expect(styledComponent).toMatchSnapshot()

    styledComponent = create(<StyledButton disabled />)

    expect(styledComponent).toMatchSnapshot()
  })
})
