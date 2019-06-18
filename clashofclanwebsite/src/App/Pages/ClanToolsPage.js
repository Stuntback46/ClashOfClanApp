import React, { Component } from 'react';
//import '.Calculator/Css/App.css';
import Header from './Templates/Header.js'

class ClanToolsPage extends Component {
  render() {
    return (
        <div className="App pb-5">
    
        <Header Title={'Clan Tools'}></Header>
        <h2>A usefull list of Tools for your clan</h2>
        <a href="/claimmyclan"><h3>Claim My Clan</h3></a>
        <a href="/newclanwar"><h3>New Clan War</h3></a>
        <a href="/clanwar"><h3>Clan War</h3></a>
        <a href="/myclan"><h3>My Clan</h3></a>
        </div>
     
    );
  }
}

export default ClanToolsPage;
