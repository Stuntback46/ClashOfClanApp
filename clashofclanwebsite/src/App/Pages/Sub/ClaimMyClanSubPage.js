import React, { Component } from 'react';
//import '.Calculator/Css/App.css';
import Header from '../Templates/Header.js'

import ClaimMyClan from '../../ClaimMyClan/Components/ClaimMyClan.js';

class ClaimMyClanSubPage extends Component {
  render() {
    return (
        <div className="App mb-5">
    
        <Header Title={'Claim My Clan'}></Header>
        
        <ClaimMyClan history={this.props.history}/>
      </div>
     
    );
  }
}

export default ClaimMyClanSubPage;