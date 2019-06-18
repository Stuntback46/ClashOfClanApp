import React, { Component } from 'react';
import axios from 'axios'
//import {CheckAuthUser} from "../CheckAuthUser/CheckAuthUser.js";

class NavBar extends Component {
constructor (props) {
  
   console.log("navbar construct")
    super(props);
    this.state={isLoggedIn:localStorage.getItem('isLoggedIn')||"false"}
    this.logout=this.logout.bind(this)
    console.log("constructor nav refresh:",this.props.refresh)
  }


logout(e){
  e.preventDefault();

  axios.get('api/logout').then(() => {
    this.setState({isLoggedIn:'false'})
    localStorage.setItem('isLoggedIn','false')
    console.log("logout")
    this.props.history.go('/')
    

}) 
  
    
  .catch(error => {})
}

shouldComponentUpdate(nextState,nextProps){
  
if (this.state.isLoggedIn!==nextState.isLoggedIn)
  {
    return true}
if(this.props.refresh===true)
  {this.setState({isLoggedIn:"true"})
console.log("udate bordel")
    return true}
return false
}

  render() {

    return (
      
     	<div>


<nav className="navbar navbar-expand navbar-light bg-light vw-100 fixed-top pb-0">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item dropdown active">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Menu
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="/myvillage">My Village</a>
          <a className="dropdown-item" href="/lootcalculator">Loot Calculator</a>
          <a className="dropdown-item" href="/strategyeditor">Strategy Editor</a>
          <div className="dropdown-divider"></div>

          <a className="dropdown-item" href="/clantools">Clan Tools</a>
        </div>
      </li>
      <li className="nav-item active">
        <a href="/" className="nav-link" >Home <span className="sr-only">(current)</span></a>
      </li>
      {((this.state.isLoggedIn==='false')&&(this.props.refresh===false)) ? (
        <li className="nav-item active">
        <a className="nav-link" href="/login">Login<span className="sr-only">(current)</span></a>
      </li>):(<div></div>)
      }
      {(this.state.isLoggedIn==='false')&&(this.props.refresh===false) ? (
      <li className="nav-item active">
        <a className="nav-link" href="/signup">SignUp<span className="sr-only">(current)</span></a>
      </li>
      
      ) : (
      <li className="nav-item active ">
        <a onClick={this.logout} className="nav-link " href="api/logout/" >Logout<span className="sr-only">(current) </span></a>
      </li>
      )}
    
    </ul>
    
  </div>
</nav>
</div>
   
    );
  }
}

export default NavBar;