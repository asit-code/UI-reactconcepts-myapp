import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      email: "",
    };
  }
  changeName = (event) => {
    this.setState({
        name:event.target.value
    })
  }
  changeAge = (event) => {
    this.setState({
        age:event.target.value
    })
  }
  changeEmail = (event) => {
    this.setState({
        email:event.target.value
    })
  }
  submitHandlerMethod = (event) => {
    event.preventDefault();
    let name = this.state.name;
    let age = this.state.age;
    let email = this.state.email;
    let alphaExp = /^[a-zA-Z]+$/
    let emailExp = /^[a-zA-z0-9]+@+[a-zA-Z]+.+[a-zA-Z]+$/
    
    if(name === ""){
        document.getElementById('nameNote').innerHTML='Please enter name.'
    }else{
        if(name.match(alphaExp)){
            document.getElementById('nameNote').innerHTML=''
        }
        else{
            document.getElementById('nameNote').innerHTML='Please enter charecter only.'
        }
    }
    if(age === ""){
        document.getElementById('ageNote').innerHTML='Please enter age.'
    }else{
        if(!Number(age)){
            document.getElementById('ageNote').innerHTML='Please enter number only.'
        }
        else{
            document.getElementById('ageNote').innerHTML=''
        }
    }
    if(email === ""){
        document.getElementById('emailNote').innerHTML='Please enter email.'
    }else{
        if(email.match(emailExp)){
            document.getElementById('emailNote').innerHTML=''
        }
        else{
            document.getElementById('emailNote').innerHTML='Please enter valid emailId.'
        }
    }
  }
  render() {
    const { name, age, email } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandlerMethod}>
          <div>
            <label>Name</label>
            <input type="text" name="name" value={name} onChange={this.changeName}/>
            <p id="nameNote"></p>
          </div>
          <div>
            <label>Age</label>
            <input type="text" name="age" value={age} onChange={this.changeAge}/>
            <p id="ageNote"></p>
          </div>
          <div>
            <label>Email</label>
            <input type="text" name="email" value={email} onChange={this.changeEmail}/>
            <p id="emailNote"></p>
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}
