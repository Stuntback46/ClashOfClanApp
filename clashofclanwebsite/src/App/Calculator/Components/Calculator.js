import React from 'react';

import TownForm from './TownForm';
import ResultsForm from './ResultsForm.js';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dTownHall: 1,
      stoGold: 0,
      stoElixir: 0,
      stoDarkElixir:0,
      tGold:0,
      tElixir:0,
      tDarkElixir:0
    };
    this.handleondTownHall = this.handleondTownHall.bind(this);
    this.handleonstoGold = this.handleonstoGold.bind(this);
    this.handleonstoElixir = this.handleonstoElixir.bind(this);
    this.handleonstoDarkElixir = this.handleonstoDarkElixir.bind(this);
    this.handleontGold = this.handleontGold.bind(this);
    this.handleontElixir = this.handleontElixir.bind(this);
    this.handleontDarkElixir = this.handleontDarkElixir.bind(this);
}

handleondTownHall(dTownHall){
this.setState({dTownHall:dTownHall});

}
handleonstoGold(stoGold){
this.setState({stoGold:stoGold});

}
handleonstoElixir(stoElixir){
this.setState({stoElixir:stoElixir});

}
handleonstoDarkElixir(stoDarkElixir){
this.setState({stoDarkElixir:stoDarkElixir});

}
handleontGold(tGold){
this.setState({tGold:tGold});

}
handleontElixir(tElixir){
this.setState({tElixir:tElixir});

}
handleontDarkElixir(tDarkElixir){
this.setState({tDarkElixir:tDarkElixir});

}

  render() {
    
    return (
      <div className="device">
      
      <div>
      <TownForm ondTownHall={this.handleondTownHall}
      			onstoGold ={this.handleonstoGold}
      			onstoElixir ={this.handleonstoElixir}
      			onstoDarkElixir ={this.handleonstoDarkElixir}
      			ontGold ={this.handleontGold}
      			ontElixir ={this.handleontElixir}
      			ontDarkElixir ={this.handleontDarkElixir}
	 ></TownForm>
	 </div>
	 <div>
      <ResultsForm  dTownHall={this.state.dTownHall}
      				stoGold={this.state.stoGold}
     			    stoElixir={this.state.stoElixir}
      				stoDarkElixir={this.state.stoDarkElixir}
      				tGold={this.state.tGold}
     				tElixir={this.state.tElixir}
     				tDarkElixir={this.state.tDarkElixir}></ResultsForm>
      </div>
      </div>
    );
  }
}

export default Calculator;
