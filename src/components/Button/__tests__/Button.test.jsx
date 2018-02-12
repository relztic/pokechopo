// External Packages
import { shallow } from 'enzyme'
import React from 'react'

// Internal Packages
import Button from '../Button'

describe('<Button />', () => {
  it('should render the component on valid props', () => {
    let component

    component = shallow(<Button onClick={() => {}}>Hello, World!</Button>)

    expect(component).toMatchSnapshot()

    component = shallow(
      <Button onClick={() => {}} disabled>
        Hello, World!
      </Button>
    )

    expect(component).toMatchSnapshot()
  })
})
