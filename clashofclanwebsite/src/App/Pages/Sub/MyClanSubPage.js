import React, { Component } from 'react';
//import '.Calculator/Css/App.css';
import Header from '../Templates/Header.js'

import MyClan from '../../MyClan/Components/MyClan.js';

class MyClanSubPage extends Component {
  render() {
    return (
        <div className="App mb-5">
    
        <Header Title={'My Clan'}></Header>
        
        <MyClan history={this.props.history}/>
      </div>
     
    );
  }
}

export default MyClanSubPage;