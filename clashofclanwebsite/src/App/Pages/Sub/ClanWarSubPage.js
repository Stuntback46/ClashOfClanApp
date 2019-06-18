import React, { Component } from 'react';
//import '.Calculator/Css/App.css';
import Header from '../Templates/Header.js'

import ClanWar from '../../ClanWar/Components/ClanWar.js';

class ClanWarSubPage extends Component {
  render() {
    return (
        <div className="App mb-5">
    
        <Header Title={'Clan War'}></Header>
        
        <ClanWar history={this.props.history}/>
      </div>
     
    );
  }
}

export default ClanWarSubPage;