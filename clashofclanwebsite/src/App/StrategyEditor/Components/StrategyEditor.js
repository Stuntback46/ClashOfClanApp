import React from 'react';
import DrawArea from './DrawArea.js' 

class StrategyEditor extends React.Component {
	constructor(props) {
  super(props);
 
  this.state= {
  	dTownHall: 1,
      stoGold: '',
      stoElixir: '',
      stoDarkElixir:'',
      tGold:'',
      tElixir:'',
      tDarkElixir:''

  };

}

  render() {
    return (
      <div className="device">
      <DrawArea></DrawArea>
	   </div>	
    );
  }
}

export default StrategyEditor;