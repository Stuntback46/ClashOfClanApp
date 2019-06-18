import React, { Component } from 'react';
import FormErrors from './FormErrors.js';
import '../Css/SignUpForm.css';
import axios from 'axios'


class SignUpForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      dateOfBirth:'',
      gender:'',
      villageId:'',
      formErrors: {email: '', password: '',dateOfBirth:'',villageId:'',gender:''},
      emailValid: false,
      passwordValid: false,
      dateOfBirthValid:false,
      genderValid:false,
      villageIdValid:false,
      formValid: false,
      error:""
    }
  }

  handleUserInput = (e) => {
    let name = e.target.name;
    if (name === 'username')
    {
      name='email'
    }
    let value = e.target.value;

    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let dateOfBirthValid= this.state.dateOfBirthValid;
    let villageIdValid= this.state.villageIdValid
    let genderValid=this.state.genderValid
    

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'Email is invalid!';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': 'Password is too short!';
        break;
        case 'dateOfBirth':
        dateOfBirthValid = value.match(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i);
        fieldValidationErrors.dateOfBirth = dateOfBirthValid ? '': 'Must be DD/MM/YYYY';
        break;
        case 'gender':
        
        genderValid = (value==='female'||value==='male'||value==='other');
        fieldValidationErrors.gender = genderValid ? '': 'Thanks to file your gender!';
        break;
        case 'villageId':
        villageIdValid = (value.length < 11 && value.length > 7 && value.match(/^[/#][a-zA-Z0-9.,$;]+$/i)); 
        fieldValidationErrors.villageId = villageIdValid ? '': 'Village Id is invalid! Must be like: #XXXXXXXXX';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                    dateOfBirthValid: dateOfBirthValid,
                    genderValid: genderValid,
                    villageIdValid: villageIdValid

                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.dateOfBirthValid && this.state.genderValid && this.state.villageIdValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'border border-danger');
  }
onSubmit=(e)=>{
e.preventDefault();
axios.post('api/signup/',{username:this.state.email,
                                              password:this.state.password,
                                              dateOfBirth:this.state.dateOfBirth,
                                              gender:this.state.gender,
                                              villageId:this.state.villageId}).then((response) => {this.props.history.push("/login")
                                              })
.catch(error => {
  this.setState({error:error.response.data.message||error.response.data.response.data.message})
  console.log(error.response)
  
});

  }

  render () {
    
    return (
    	<div>
      <form className="demoForm" onSubmit={this.onSubmit} method="post" action="/api/signup">
        <div className={`form-group`}>
          <label htmlFor="email">Email address</label>
          <input type="email"  className={`form-control ${this.errorClass(this.state.formErrors.email)}`} name="username"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput} 
             />
        </div>
        <div className="form-group" >
          <label htmlFor="password">Password</label>
          <input type="password" className={`form-control ${this.errorClass(this.state.formErrors.password)}`} name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput}  minlength="6" maxlength="16" />
        </div>
         <div className="form-group" >
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input type="text" className={`form-control ${this.errorClass(this.state.formErrors.dateOfBirth)}`} name="dateOfBirth"
            placeholder="DD/MM/YYYY"
            value={this.state.dateOfBirth}
            onChange={this.handleUserInput} />
        </div>
         <div className="form-group" >
         <label htmlFor="gender">Gender</label>
          <select className={`form-control ${this.errorClass(this.state.formErrors.gender)}`} name="gender"
            placeholder="Gender"
            value={this.state.gender}
            onChange={this.handleUserInput}>
 			<option value={0}></option>
 			<option value='female'>Female</option>
 			<option value='male'>Male</option>
 			<option value='other'>Other</option>
			</select>
        </div>
         <div className="form-group" >
          <label htmlFor="villageId">Village Id</label>
          <input type="text" className={`form-control ${this.errorClass(this.state.formErrors.villageId)}`} name="villageId"
            placeholder="Village Id"
            value={this.state.villageId}
            onChange={this.handleUserInput}  minlength="10" maxlength="10" />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>
      </form>
      
      <div className="panel panel-default text-center" style={{"width":"320px"}}>
         {!this.state.formValid?<p className='text-danger'>Thanks to fill properly all fields</p>:""}
          {<p className='text-danger'>{this.state.error}</p>}
          <FormErrors formErrors={this.state.formErrors}/>
        </div>
        </div>
    )
  }
}

export default SignUpForm;