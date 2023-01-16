import React, { Component } from "react";

export default class StateExByClass extends Component {
  constructor() {
    super();
    this.state = {
      name: "elearn",
      Estd: 2009,
    };
  }
  changeData = () => {
    this.setState({
      name: "Algorithmica",
      Estd: 2010,
    });
  };
  render() {
    return (
      <div>
        <h1>
          State Example - Institute name: {this.state.name}, Year or
          Establishment: {this.state.Estd}
        </h1>
        <button onClick={this.changeData}>Change State</button>
      </div>
    );
  }
}
