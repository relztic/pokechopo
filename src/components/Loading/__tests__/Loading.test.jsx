// External Packages
import { expect as chaiExpect } from 'chai'
import { mount, shallow } from 'enzyme'
import React from 'react'
import { spy } from 'sinon'

// Internal Packages
import Loading from '../Loading'

describe('<Loading />', () => {
  it('should render the component on valid props', () => {
    const component = shallow(<Loading />)

    expect(component).toMatchSnapshot()
  })

  it('should update the component on valid actions', () => {
    const component = mount(<Loading />)

    chaiExpect(component.state().ticks).to.equal(0)

    component.instance().tick()

    chaiExpect(component.state().ticks).to.equal(1)

    component.instance().tick()

    chaiExpect(component.state().ticks).to.equal(2)

    component.instance().tick()

    chaiExpect(component.state().ticks).to.equal(3)

    component.instance().tick()

    chaiExpect(component.state().ticks).to.equal(0)
  })

  it('should unmount the component on valid actions', () => {
    spy(Loading.prototype, 'componentWillUnmount')

    const component = mount(<Loading />)

    component.unmount()

    chaiExpect(Loading.prototype.componentWillUnmount).to.have.property('callCount', 1)

    Loading.prototype.componentWillUnmount.restore()
  })
})
