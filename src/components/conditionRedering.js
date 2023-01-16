import React, { Component } from "react";

export default class ConditionRedering extends Component {
  
  constructor() {
    super()
    this.state = {
       login: true
    }
  }

  //Constructor for switch
  /*
  constructor() {
    super();
    this.state = {
      choice: 1,
    };
  }
  */
  
  render() {
    //let msg;
    
    //if ..else
    /*
    if(this.state.login){
        msg =  <h1>Welcome User</h1>
    } else {
        msg = <h1>Welcome Guest</h1>
    }
    */
    //tornary operator.
    //(this.state.login)?msg=<h1>Welcome User</h1>:msg=<h1>Welcome Guest</h1>;

    //simple if
    return (this.state.login) && <h1>Welcome User.</h1>

    //Switch case
    /*
    switch (this.state.choice) {
      case 1:
        msg = <h1>Choice is 1</h1>;
        break;
      case 2:
        msg = <h1>Choice is 2</h1>;
        break;
      case 3:
        msg = <h1>Choice is 3</h1>;
        break;
      case 4:
        msg = <h1>Choice is 4</h1>;
        break;
      default:
        msg = <h1>Invalid choice</h1>;
        break;
    }
    */
    
    //return msg;
  }
}
