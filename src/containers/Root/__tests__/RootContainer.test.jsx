// External Packages
import { expect as chaiExpect } from 'chai'
import { shallow } from 'enzyme'
import { reset, set } from 'mockdate'
import React from 'react'
import { spy } from 'sinon'

// Internal Packages
import { PlainRootContainer as RootContainer, mapDispatchToProps, mapStateToProps } from '../RootContainer'

/**
 * @constant {Object} state The state to mock.
 */
const state = {
  pokemon: {
    id: 1,
    name: 'bulbasaur',
  },
}

describe('<RootContainer />', () => {
  beforeAll(() => {
    set(new Date(2018, 0))
  })

  afterAll(() => {
    reset()
  })

  it('should render the container on valid props', () => {
    let container

    container = shallow(
      <RootContainer data={null} errorMessage="" isFetching={false} onDiscoverPokemonClick={() => {}} />
    )

    expect(container).toMatchSnapshot()

    container = shallow(<RootContainer data={null} errorMessage="" isFetching onDiscoverPokemonClick={() => {}} />)

    expect(container).toMatchSnapshot()

    container = shallow(
      <RootContainer
        data={null}
        errorMessage="InvalidArgumentError: invalid pokemonNumber `-1`"
        isFetching={false}
        onDiscoverPokemonClick={() => {}}
      />
    )

    expect(container).toMatchSnapshot()

    container = shallow(
      <RootContainer data={state.pokemon} errorMessage="" isFetching={false} onDiscoverPokemonClick={() => {}} />
    )

    expect(container).toMatchSnapshot()
  })

  it('should map the state on valid states', () => {
    const received = mapStateToProps(state)

    const expected = state.pokemon

    expect(received).toEqual(expected)
  })

  it('should map the dispatch on valid dispatches', () => {
    const dispatch = spy()

    const received = mapDispatchToProps(dispatch)

    const event = {
      preventDefault: () => {},
    }

    received.onDiscoverPokemonClick(event)

    chaiExpect(dispatch).to.have.property('callCount', 1)
  })
})
