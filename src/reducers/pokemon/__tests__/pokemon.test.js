// Internal Packages
import { dispatchFetchPokemon, dispatchFetchPokemonFailure, dispatchFetchPokemonSuccess } from 'actions/pokemon'
import pokemon from '../pokemon'

/**
 * @constant {Object} initialState The initial state to default.
 */
const initialState = {
  data: null,
  errorMessage: '',
  isFetching: false,
}

describe('pokemon', () => {
  it('should initialize the state on valid args', () => {
    const prevState = undefined

    const action = {}

    const received = pokemon(prevState, action)

    expect(received).toEqual(initialState)
  })

  it('should reduce the state on valid FETCH_POKEMON actions', () => {
    const action = dispatchFetchPokemon()

    const received = pokemon(initialState, action)

    const expected = {
      ...initialState,
      isFetching: true,
    }

    expect(received).toEqual(expected)
  })

  it('should reduce the state on valid FETCH_POKEMON_FAILURE actions', () => {
    const error = new Error('InvalidArgumentError: invalid pokemonNumber `-1`')

    const action = dispatchFetchPokemonFailure(error)

    const received = pokemon(initialState, action)

    const expected = {
      ...initialState,
      errorMessage: error.message,
    }

    expect(received).toEqual(expected)
  })

  it('should reduce the state on valid FETCH_POKEMON_SUCCESS actions', () => {
    const data = {
      id: 1,
      name: 'bulbasaur',
    }

    const action = dispatchFetchPokemonSuccess(data)

    const received = pokemon(initialState, action)

    const expected = {
      ...initialState,
      data,
    }

    expect(received).toEqual(expected)
  })
})
