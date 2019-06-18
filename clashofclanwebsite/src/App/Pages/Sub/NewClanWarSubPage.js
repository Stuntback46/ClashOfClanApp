import React, { Component } from 'react';
//import '.Calculator/Css/App.css';
import Header from '../Templates/Header.js'

import NewClanWar from '../../NewClanWar/Components/NewClanWar.js';

class NewClanWarSubPage extends Component {
  render() {
    return (
        <div className="App mb-5">
    
        <Header Title={'New Clan War'}></Header>
        
        <NewClanWar history={this.props.history}/>
      </div>
     
    );
  }
}

export default NewClanWarSubPage;