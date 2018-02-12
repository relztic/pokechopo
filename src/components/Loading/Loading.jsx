// External Packages
import { number, string } from 'prop-types'
import React, { Component } from 'react'

/**
 * Creates a new Loading component.
 * @class
 */
class Loading extends Component {
  /** @override */
  static propTypes = {
    message: string,
    suffix: string,
    suffixDuration: number,
    suffixLength: number,
  }

  /** @override */
  static defaultProps = {
    message: 'Loading',
    suffix: '.',
    suffixDuration: 1000,
    suffixLength: 3,
  }

  /** @override */
  state = {
    ticks: 0,
  }

  /** @override */
  componentDidMount() {
    this.tickInterval = setInterval(this.tick, this.props.suffixDuration)
  }

  /** @override */
  componentWillUnmount() {
    clearInterval(this.tickInterval)
  }

  /** @private */
  tick = () => {
    this.setState(prevState => ({
      ticks: prevState.ticks < this.props.suffixLength ? prevState.ticks + 1 : 0,
    }))
  }

  /** @override */
  render() {
    return (
      <span>
        {this.props.message}
        {this.props.suffix.repeat(this.state.ticks)}
      </span>
    )
  }
}

export default Loading
