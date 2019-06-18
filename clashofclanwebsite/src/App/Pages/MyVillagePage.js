import React, { Component } from 'react';
//import '.Calculator/Css/App.css';
import Header from './Templates/Header.js'

import MyVillage from '../MyVillage/Components/MyVillage.js';

class MyVillagePage extends Component {
  render() {
    return (
        <div className="App mb-5">
    
        <Header Title={'My Home Village'}></Header>
        
        <MyVillage history={this.props.history}/>
      </div>
     
    );
  }
}

export default MyVillagePage;
