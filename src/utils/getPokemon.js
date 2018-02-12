// External Packages
import restql from 'restql'

// Internal Packages
import constants from 'config/constants'
import environment from 'config/environment'

/**
 * @constant {Object} resolver The resolver to apply.
 */
const resolver = {
  'stats[].stat.url': {
    'affecting_natures.increase[].url': null,
    'affecting_natures.decrease[].url': null,
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

  const resource = `${environment.POKECHOPO_API_URL}v${environment.POKECHOPO_API_VERSION}/pokemon/${pokemonNumber}/`

  return restql(resource, resolver)
}
