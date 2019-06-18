import React, { Component } from 'react';
//import '.Calculator/Css/App.css';
import Header from './Templates/Header.js'
import Furet from './Images/furet.jpg'


class Error404Page extends Component {
  render() {
    return (
        <div className="App pb-5">
    
        <Header Title={"Error 404"}></Header>
        
        
        <article>
        <h2>This page is not existing yet!</h2>
        <br/><img src={Furet} width="500px"></img>
        </article>
      </div>
     
    );
  }
}

export default Error404Page;