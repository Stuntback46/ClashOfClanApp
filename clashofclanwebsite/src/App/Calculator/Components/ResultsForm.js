import React from 'react';
import * as Cst from '../Constants/Constants.js'
import {GoldLoot} from '../Managers/LootCalculator.js'
import {ElixirLoot} from '../Managers/LootCalculator.js'
import {DarkElixirLoot} from '../Managers/LootCalculator.js'
import gold from '../Image/gold.png'
import elixir from '../Image/elixir.png'
import darkelixir from '../Image/darkelixir.png'

class ResultsForm extends React.Component {
	constructor(props) {
  super(props);
  this.makeLvlRow = this.makeLvlRow.bind(this);
  this.lvlRow=[];
  this.goldLoot=[];
  this.elixirLoot=[];
  this.darkElixirLoot=[];

}
	makeLvlRow(dTownHall){
		let lvlRow=[];
		if(dTownHall===1) lvlRow.push(<td className ="headings" key={lvlRow.length+1}>1</td>);
		else if(dTownHall>1 && dTownHall<Cst.TownHallLvlMax) lvlRow.push(<td className ="headings" key={lvlRow.length+1}>1-{dTownHall}</td>); 
        if (dTownHall<Cst.TownHallLvlMax)
		{
			for(let i=1;((dTownHall+i)<=Cst.TownHallLvlMax) && i<4;(i++))
			{
				lvlRow.push(<td className ="headings" key={lvlRow.length+1}>{dTownHall+i}</td>); 
				
			}
		}
		if (dTownHall===Cst.TownHallLvlMax) lvlRow.push(<td className ="headings" key={lvlRow.length+1}>1-{dTownHall}</td>)
			else if (dTownHall===Cst.TownHallLvlMax-4) lvlRow.push(<td className ="headings" key={lvlRow.length+1} >{dTownHall+4}</td>)
			else if (dTownHall<Cst.TownHallLvlMax-4) lvlRow.push(<td className ="headings" key={lvlRow.length+1} >{dTownHall+4}-12</td>)
		
			
			
		return lvlRow;
	}

  render() {
  	this.lvlRow=this.makeLvlRow(this.props.dTownHall);
  	this.elixirLoot=ElixirLoot(this.props.dTownHall,this.props.stoElixir,this.props.tElixir);;
  	this.darkElixirLoot=DarkElixirLoot(this.props.dTownHall,this.props.stoDarkElixir,this.props.tDarkElixir);;
  	this.goldLoot=GoldLoot(this.props.dTownHall,this.props.stoGold,this.props.tGold);
    return (
      <div className="lootavailable">
      <div className="span"> Potential Loot:</div>
		<table className="table">
		<tbody>
			<tr>
				<td className="headings">Attacker Lvl</td>
				<td className="headings"><img height="35px" src={gold} alt="Gold:"></img></td>
				<td className="headings"><img height="35px" src={elixir} alt="Elixir:"></img></td>
				<td className="headings"><img height="35px" src={darkelixir} alt="Dark Elixir:"></img></td>
			</tr>
			<tr>

				{this.lvlRow[0]}
				<td>{(this.goldLoot[0])}</td>
				<td>{this.elixirLoot[0]}</td>
				{this.darkElixirLoot[0]!==undefined?<td>{this.darkElixirLoot[0]}</td>:null}
			</tr>
			<tr >
				{this.lvlRow[1]!==undefined?this.lvlRow[1]:null}
				{this.goldLoot[1]!==undefined?<td>{(this.goldLoot[1])}</td>:null}
				{this.elixirLoot[1]!==undefined?<td>{(this.elixirLoot[1])}</td>:null}
				{this.darkElixirLoot[1]!==undefined?<td>{this.darkElixirLoot[1]}</td>:null}
			</tr>
			<tr>
				{this.lvlRow[2]!==undefined?this.lvlRow[2]:null}
				{this.goldLoot[2]!==undefined?<td>{(this.goldLoot[2])}</td>:null}
				{this.elixirLoot[2]!==undefined?<td>{(this.elixirLoot[2])}</td>:null}
				{this.darkElixirLoot[2]!==undefined?<td>{this.darkElixirLoot[2]}</td>:null}
			</tr>
			<tr >
				{this.lvlRow[3]!==undefined?this.lvlRow[3]:null}
				{this.goldLoot[3]!==undefined?<td>{(this.goldLoot[3])}</td>:null}
				{this.elixirLoot[3]!==undefined?<td>{(this.elixirLoot[3])}</td>:null}
				{this.darkElixirLoot[3]!==undefined?<td>{this.darkElixirLoot[3]}</td>:null}
			</tr>
			<tr>
				{this.lvlRow[4]!==undefined?this.lvlRow[4]:null}
				{this.goldLoot[4]!==undefined?<td>{(this.goldLoot[4])}</td>:null}
				{this.elixirLoot[4]!==undefined?<td>{(this.elixirLoot[4])}</td>:null}
				{this.darkElixirLoot[4]!==undefined?<td>{this.darkElixirLoot[4]}</td>:null}
			</tr>
			</tbody>
		</table>
      </div>
    );
  }
}

export default ResultsForm;