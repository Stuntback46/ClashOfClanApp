import React, { Component } from 'react';

import Header from './Templates/Header.js'

import { Route, Link,Switch, BrowserRouter as Router } from 'react-router-dom'

import SignUpForm from '../SignForm/Components/SignUpForm.js';

class SignUpPage extends Component {
  render() {
    console.log("signup",this.props.history)
    return (
      <div className="App">
	
      <Header Title={'Sign Up'}></Header>

      <SignUpForm history={this.props.history}></SignUpForm>
 
      </div>
    );
  }
}

export default SignUpPage;