import React, { Component } from 'react';
//import '.Calculator/Css/App.css';
import Header from './Templates/Header.js'

import Calculator from '../Calculator/Components/Calculator.js';

class CalculatorPage extends Component {
  render() {
    return (
        <div className="App pb-5">
    
        <Header Title={'Loot Calculator'}></Header>
        
        <section>
        <Calculator history={this.props.history}></Calculator>
        </section>
        <article>
        The resources lootable in storages are divided by 1.25 when the attacker has 1 level higher than the defender, divided by 2 when the attacker has 2 levels more, divided by 2 for 3 levels higher and finally if he has more than 3 levels by 20.
        </article>
        <article>
      The calculator does not take into consideration the resources in collectors. To be the most accurate as possible you should collect them. Be aware of that, the resources still in collectors are more exposed than in storages. The resources as the most secure on the treasury.
        </article>
      </div>
     
    );
  }
}

export default CalculatorPage;
