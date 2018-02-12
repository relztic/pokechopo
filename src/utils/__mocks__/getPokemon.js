// Internal Packages
import constants from 'config/constants'

/**
 * @constant {Object} responses The responses to mock.
 */
const responses = {
  1: {
    id: 1,
    name: 'bulbasaur',
  },
}

/**
 * Gets a Pokémon based on its number, if not cached.
 *
 * @param {number} pokemonNumber The Pokémon number to get.
 * @returns {Promise<Object>} A promise which resolves into an object.
 * @throws {InvalidArgumentError} If a Pokémon number is invalid.
 */
export default async function getPokemon(pokemonNumber) {
  if (pokemonNumber < constants.POKEMON_MIN_NUMBER || pokemonNumber > constants.POKEMON_MAX_NUMBER) {
    throw new Error(`InvalidArgumentError: invalid pokemonNumber \`${pokemonNumber}\``)
  }

  return new Promise(resolve => {
    setTimeout(resolve, 100, responses[pokemonNumber])
  })
}
