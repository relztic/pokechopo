// External Packages
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

// Internal Packages
import { fetchPokemon } from '../pokemon'

/**
 * @constant {Object} store The store to mock.
 */
const store = configureMockStore([thunk])()

jest.mock('utils/getPokemon')

describe('pokemon', () => {
  afterEach(() => {
    store.clearActions()
  })

  it('should dispatch the actions on valid Pokémon numbers', async () => {
    const pokemonNumber = 1

    await store.dispatch(fetchPokemon(pokemonNumber))

    const received = store.getActions()

    // prettier-ignore
    const expected = [
      { type: 'FETCH_POKEMON' },
      { type: 'FETCH_POKEMON_SUCCESS', payload: { id: 1, name: 'bulbasaur' } }
    ]

    expect(received).toEqual(expected)
  })

  it('should dispatch the actions on invalid Pokémon numbers', async () => {
    const pokemonNumber = -1

    await store.dispatch(fetchPokemon(pokemonNumber))

    const received = store.getActions()

    // prettier-ignore
    const expected = [
      { type: 'FETCH_POKEMON' },
      { type: 'FETCH_POKEMON_FAILURE', payload: new Error('InvalidArgumentError: invalid pokemonNumber `-1`'), error: true }
    ]

    expect(received).toEqual(expected)
  })
})
