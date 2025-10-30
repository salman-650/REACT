import React, { Component } from 'react'

export default class UsingProps extends Component {
  render() {
    return (
      <div>
        <h1>heyyy, {this.props.name}!</h1>
      </div>
    )
  }
}
