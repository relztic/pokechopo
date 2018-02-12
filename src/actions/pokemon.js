// Internal Packages
import getPokemon from 'utils/getPokemon'

/**
 * @constant {string} * The actions to dispatch.
 */
const FETCH_POKEMON = 'FETCH_POKEMON'
const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE'
const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS'

/**
 * Dispatches the object of a FETCH_POKEMON action.
 *
 * @returns {Object} An object.
 */
const dispatchFetchPokemon = () => ({
  type: FETCH_POKEMON,
})

/**
 * Dispatches the object of a FETCH_POKEMON_FAILURE action.
 *
 * @param {Object} error The error to catch.
 * @returns {Object} An object.
 */
const dispatchFetchPokemonFailure = error => ({
  type: FETCH_POKEMON_FAILURE,
  payload: error,
  error: true,
})

/**
 * Dispatches the object of a FETCH_POKEMON_SUCCESS action.
 *
 * @param {Object} data The data to process.
 * @returns {Object} An object.
 */
const dispatchFetchPokemonSuccess = data => ({
  type: FETCH_POKEMON_SUCCESS,
  payload: data,
})

/**
 * Fetches a Pokémon based on its number, if not cached.
 *
 * @param {number} pokemonNumber The Pokémon number to get.
 * @returns {Function} A function.
 */
const fetchPokemon = pokemonNumber => async dispatch => {
  dispatch(dispatchFetchPokemon())

  try {
    const data = await getPokemon(pokemonNumber)

    dispatch(dispatchFetchPokemonSuccess(data))
  } catch (error) {
    dispatch(dispatchFetchPokemonFailure(error))
  }
}

export {
  FETCH_POKEMON,
  FETCH_POKEMON_FAILURE,
  FETCH_POKEMON_SUCCESS,
  dispatchFetchPokemon,
  dispatchFetchPokemonFailure,
  dispatchFetchPokemonSuccess,
  fetchPokemon,
}
