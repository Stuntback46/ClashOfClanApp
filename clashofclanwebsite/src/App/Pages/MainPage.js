import React, { Component } from 'react';
import Header from './Templates/Header.js'
//import {CheckAuthUser} from "./CheckAuthUser/CheckAuthUser.js";



class MainPage extends Component {
constructor (props) {
    super(props);
   
   

  }



  render() {
    return (

      <div className="App">
       <Header Title={'Main Page'}></Header>
     	<h2>Welcome on the Clash of Clan Application</h2>
      <a href="/myvillage"><h3>My Village</h3></a>
      <a href="/clantools"><h3>Clan Tools</h3></a>
     	<a href="/lootcalculator"><h3>Loot Calculator</h3></a>
     	<a href="/strategyeditor"><h3>Strategy Editor</h3></a>
      </div>
     
    );
  }
}

export default MainPage
