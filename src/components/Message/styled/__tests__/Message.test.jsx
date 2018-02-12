// External Packages
import React from 'react'
import { create } from 'react-test-renderer'

// Internal Packages
import { withTheme } from 'components/higher-order'
import StyledMessage from '../Message'

describe('<StyledMessage />', () => {
  it('should style the component on valid props', () => {
    const StyledMessageWithTheme = withTheme(StyledMessage)

    let styledComponent

    styledComponent = create(<StyledMessageWithTheme />)

    expect(styledComponent).toMatchSnapshot()

    styledComponent = create(<StyledMessageWithTheme variant="danger" />)

    expect(styledComponent).toMatchSnapshot()

    styledComponent = create(<StyledMessageWithTheme variant="info" />)

    expect(styledComponent).toMatchSnapshot()

    styledComponent = create(<StyledMessageWithTheme variant="success" />)

    expect(styledComponent).toMatchSnapshot()

    styledComponent = create(<StyledMessageWithTheme variant="warning" />)

    expect(styledComponent).toMatchSnapshot()
  })
})
