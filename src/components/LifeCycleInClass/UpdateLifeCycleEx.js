import React, { Component } from 'react'
import UnMountEx from './UnMountEx';

export default class UpdateLifeCycleEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "elearn",
         show: true
      }
    }

    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps method called.")
        return null;
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate method called.")
        return true;
    }

    changeState = () => {
        console.log("Button clicked.")
        this.setState({
            name: 'Rajesh'
        })
    }
    getSnapshotBeforeUpdate(preProps, preState) {
        console.log("getSnapshotBeforeUpdate method called.")
        document.getElementById("oldValue").innerHTML ="old value is : "+preState.name;
        return null;
    }
    componentDidUpdate(){
        console.log("componentDidUpdate method called.")
        document.getElementById("newValue").innerHTML = "new value is : " + this.state.name;
    }
    removeDate = () => {
        this.setState({
            show: false
        })
    }
  render() {
    console.log("render method called.")
    let msg;
    (this.state.show)?msg = <UnMountEx/>:msg = "Data removed";

    return (
      <div>
        <h1>Welcome to - {this.state.name}</h1>
        <button onClick={this.changeState}>Change State</button>
        <div id='oldValue'></div>
        <div id='newValue'></div><br></br>
        <h4>Unmount example: componentWillUnmount called - {msg}</h4>
        <button onClick={this.removeDate}>Unmount</button>
      </div>
    )
  }
}
