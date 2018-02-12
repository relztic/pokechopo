// External Packages
import restql from 'restql'

// Internal Packages
import getPokemon from '../getPokemon'

jest.mock('restql')

describe('getPokemon', () => {
  it('should call `restql` on valid Pokémon numbers', async () => {
    const pokemonNumber = 1

    await getPokemon(pokemonNumber)

    expect(restql).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1/', {
      'stats[].stat.url': {
        'affecting_natures.increase[].url': null,
        'affecting_natures.decrease[].url': null,
      },
    })
  })

  it('should throw an error on invalid Pokémon numbers', async () => {
    const pokemonNumber = -1

    const expected = 'InvalidArgumentError: invalid pokemonNumber `-1`'

    try {
      await getPokemon(pokemonNumber)
    } catch (error) {
      expect(error.message).toBe(expected)
    }
  })
})
