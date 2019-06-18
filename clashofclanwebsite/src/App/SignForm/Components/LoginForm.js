import React, { Component } from 'react';
import FormErrors from './FormErrors.js';
import '../Css/SignUpForm.css';
import axios from 'axios';


class LoginForm extends Component {
  constructor (props) {
    super(props);
    this.onSubmit=this.onSubmit.bind(this)
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid:false,
      error:''
    }
  }

handleUserInput = (e) => {

    let name = e.target.name;
    if (name === 'username')
    {
      name='email'
    }
    let value = e.target.value;

    this.setState({[name]: value}, () => { this.validateField(name, value) });
    console.log("email",this.state.email);
    console.log("password",this.state.email);
  }

  validateField = (fieldName, value) =>{
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
   
   

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'Email is invalid!';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': 'Password is too short!';
        break;
  
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                    
                  }, this.validateForm);
  }

  validateForm=() =>{
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }
  onSubmit(e){
e.preventDefault();
axios.post('api/login/',{
  username:this.state.email,password:this.state.password})
.then((response) => {
  console.log(response)
  console.log(response.data.pseudo)
   localStorage.setItem('isLoggedIn','true')
   localStorage.setItem('villageId',response.data.villageId)
   localStorage.setItem('clanId',response.data.clanId)
    this.props.refresh();
    this.props.history.push('/')

})                          
.catch(error => {
  console.log(error)
  this.setState({error:'Email or Password incorrect'})

}
  )
  
 
}
  errorClass=(error)=> {
    return(error.length === 0 ? '' : 'border border-danger');
  }

  render () {
    console.log(this.props.history)
    return (
    	<div>
      <form className="demoForm" onSubmit={this.onSubmit} method="post" action="api/login/">
        
        
        <div className={`form-group`}>
          <label htmlFor="email">Email address</label>
          <input type="email"  className={`form-control ${this.errorClass(this.state.formErrors.email)}`} name="username"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput} 
            autoComplete='off'
             />
        </div>
        <div className="form-group" >
          <label htmlFor="password">Password</label>
          <input type="password" className={`form-control ${this.errorClass(this.state.formErrors.password)}`} name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput}  minLength="6" maxlength="16"
            autoComplete='off' />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Login</button>
      <span>Forgot your password? <a href="/password_reset">Reset password</a></span>
      <hr></hr>
      <span>New to Clash of Clans <a href="/signup">Sign up now!</a></span>
      </form>
      <div className="panel panel-default">
         <p className='text-danger'>{this.state.error}</p>
          <FormErrors formErrors={this.state.formErrors}/>
        </div>
        </div>
    )
  }
}

export default LoginForm;
