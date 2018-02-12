// Internal Packages
import { FETCH_POKEMON, FETCH_POKEMON_FAILURE, FETCH_POKEMON_SUCCESS } from 'actions/pokemon'

/**
 * @constant {Object} initialState The initial state to default.
 */
const initialState = {
  data: null,
  errorMessage: '',
  isFetching: false,
}

/**
 * Reduces the state of a pokemon slice.
 *
 * @param {Object} [prevState] The previous state to reduce.
 * @param {Object} action      The action to apply.
 * @returns {Object} An object.
 */
export default function pokemon(prevState = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMON:
      return {
        data: null,
        errorMessage: '',
        isFetching: true,
      }
    case FETCH_POKEMON_FAILURE:
      return {
        data: null,
        errorMessage: action.payload.message,
        isFetching: false,
      }
    case FETCH_POKEMON_SUCCESS:
      return {
        data: {
          id: action.payload.id,
          name: action.payload.name,
        },
        errorMessage: '',
        isFetching: false,
      }
    default:
      return prevState
  }
}
