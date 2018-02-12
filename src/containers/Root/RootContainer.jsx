// External Packages
import { bool, func, number, shape, string } from 'prop-types'
import React, { Fragment } from 'react'
import { connect } from 'react-redux'

// Internal Packages
import { fetchPokemon } from 'actions/pokemon'
import { Button, Copyright, Divider, Link, Loading, Message } from 'components'
import constants from 'config/constants'

/**
 * Creates a new Root container.
 * @class
 */
const RootContainer = ({ data, errorMessage, isFetching, onDiscoverPokemonClick }) => (
  <Fragment>
    <Button onClick={onDiscoverPokemonClick} disabled={isFetching}>
      Discover a Pokémon
    </Button>
    <Divider />
    {!data ? (
      <Fragment>
        <Message variant="warning">{!isFetching ? 'Click it.' : <Loading message="Searching" />}</Message>
        {!errorMessage ? (
          <Message>
            Gotta catch &#39;em all!<Message variant="info">&trade;</Message>
          </Message>
        ) : (
          <Message variant="danger">{errorMessage}</Message>
        )}
      </Fragment>
    ) : (
      <Fragment>
        <Message>
          <Link href={`https://www.pokemon.com/us/pokedex/${data.name}/`} target="blank">
            {`${data.name[0].toUpperCase()}${data.name.slice(1)}`}
          </Link>
          <Message variant="warning">
            {` #${String(data.id).padStart(String(constants.POKEMON_MAX_NUMBER).length, '0')}`}
          </Message>
        </Message>
        <Message variant="success">Look at what you got!</Message>
      </Fragment>
    )}
    <Copyright>
      &copy; {new Date().getFullYear()}{' '}
      <Link href="https://www.linkedin.com/in/relztic/" target="blank">
        Relztic
      </Link>{' '}
      🐴
    </Copyright>
  </Fragment>
)

/** @override */
RootContainer.propTypes = {
  data: shape({
    id: number.isRequired,
    name: string.isRequired,
  }),
  errorMessage: string.isRequired,
  isFetching: bool.isRequired,
  onDiscoverPokemonClick: func.isRequired,
}

/** @override */
RootContainer.defaultProps = {
  data: null,
}

/** @override */
const mapStateToProps = state => state.pokemon

/** @override */
const mapDispatchToProps = dispatch => ({
  onDiscoverPokemonClick: event => {
    event.preventDefault()

    const pokemonNumber = Math.floor(Math.random() * constants.POKEMON_MAX_NUMBER) + constants.POKEMON_MIN_NUMBER

    dispatch(fetchPokemon(pokemonNumber))
  },
})

/**
 * @constant {Element} ConnectedRootContainer The connected Root container, Redux.
 */
const ConnectedRootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainer)

export default ConnectedRootContainer

export { RootContainer as PlainRootContainer, mapDispatchToProps, mapStateToProps }
