import React, { Component } from 'react'

export default class UnMountExampleEx extends Component {
  componentWillUnmount(){
    console.log("componentWillUnmount called.")
    alert('Data is removed.')
  }
  render() {
    return (
      <div>welcome to UnMountEx</div>
    )
  }
}
