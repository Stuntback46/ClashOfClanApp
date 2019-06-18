import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <div>
     		<header className="App-header pt-5">
        	<div className="logo">
       		</div>  
        	<h1 className="text-center">{this.props.Title}</h1>
        	</header>
      </div>
     
    );
  }
}

export default Header;