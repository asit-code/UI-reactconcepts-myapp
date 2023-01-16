import React, { Component } from 'react'

export default class BasicClass extends Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.name} and company: {this.props.company}</h1>
      </div>
    )
  }
}
