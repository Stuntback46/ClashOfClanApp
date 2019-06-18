import React, { Component } from 'react';
import StrategyEditor from '../StrategyEditor/Components/StrategyEditor.js' 
import Header from './Templates/Header.js'

class StrategyEditorPage extends Component {

  render() {
  console.log("strat",this.props.history)
    return (
      <div className="App ">

      <Header Title={'Strategy Editor'}></Header>

      <StrategyEditor history={this.props.history}></StrategyEditor>
     
      </div>
    );
  }
}

export default StrategyEditorPage;