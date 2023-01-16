import React, { Component } from 'react'

export default class MountingEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Asit"
      }
      console.log("1. Constructor executed");
    }
    static getDerivedStateFromProps(){
        console.log("2. getDerivedStateFromProps method executed---inbuild methods")
        return null;
    }
    componentDidMount(){
        console.log("4. componentDidMount method executed --after render method. Used for desplaying object.")
    }

  render() {
    console.log("3.Render method executed.")
    return (
      <div>MountingEx - {this.state.name}</div>
    )
  }
}
