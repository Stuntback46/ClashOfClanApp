import React, { Component } from 'react';

import Header from './Templates/Header.js'




import LoginForm from '../SignForm/Components/LoginForm.js';
class LoginPage extends Component {
constructor (props) {
    super(props);
    }
   

  render() {
  	console.log("history",this.props.history)
    return (
      <div className="App ">
      <Header Title={'Login'}></Header>
      <LoginForm history={this.props.history} refresh={this.props.refresh}/>
      </div>
    );
  }
}

export default LoginPage;