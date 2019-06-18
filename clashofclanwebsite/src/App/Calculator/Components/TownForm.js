import React from 'react';
import * as Cst from '../Constants/Constants.js'
import gold from '../Image/gold.png'
import elixir from '../Image/elixir.png'
import darkelixir from '../Image/darkelixir.png'


class TownForm extends React.Component {
	constructor(props) {
  super(props);
  this.TownHallLvlMax = this.TownHallLvlMax.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.TownHallPictureCalculator = this.TownHallPictureCalculator.bind(this);
  this.state= {
  	dTownHall: 6,
      stoGold: '',
      stoElixir: '',
      stoDarkElixir:'',
      tGold:'',
      tElixir:'',
      tDarkElixir:''

  };

}
TownHallPictureCalculator(dTownHall){

	let TownHallPicture = Cst.TownHallPicture[dTownHall-1];
	return TownHallPicture;
}
TownHallLvlMax(){
				let TownHallLvlMaxArray = []
			for (let i=1; i <= Cst.TownHallLvlMax; i++)
			{
				TownHallLvlMaxArray.push(<option key={i} value={i}>{i}</option>); 
			}
			return TownHallLvlMaxArray;
		}
handleChange(e){
	let value=parseInt(e.target.value);
	
	if (isNaN(value))
	{
		value=0;
		e.target.value=0;
	}
	else if (value>99999999)
	{
		value=99999999;
		e.target.value=99999999;
	}
if(e.target.name==='dTownHall')
{	
	this.setState({dTownHall:value});
	this.props.ondTownHall(value);}

if(e.target.name==='stoGold')
{	this.setState({stoGold:value});
	this.props.onstoGold(value);}

if(e.target.name==='stoElixir')
{	this.setState({stoElixir:value});
	this.props.onstoElixir(value);}

if(e.target.name==='stoDarkElixir')
{	this.setState({stoDarkElixir:value})
	this.props.onstoDarkElixir(value);}

if(e.target.name==='tGold')
{	this.setState({tGold:value})
	this.props.ontGold(value);}

if(e.target.name==='tElixir')
{	this.setState({tElixir:value})
	this.props.ontElixir(value);}

if(e.target.name==='tDarkElixir')
{	this.setState({tDarkElixir:value})
	this.props.ontDarkElixir(value);}
}

  render() {
    return (
      <div>
      <div className="defender">
		<h2>Defender:</h2>
		<form>
			<div className="vertical">
				<div className="town">
					<div className="span">Town Hall</div>
					<label>Level:</label>
					<select name="dTownHall" value={this.state.dTownHall} onChange={this.handleChange}>
					{this.TownHallLvlMax()}
					</select>
					<img className="townhall" height="100" src={this.TownHallPictureCalculator(this.state.dTownHall)} alt="Gold:"></img>
				</div>
					<div className="Horizontal">
						<div className="sto">
							<div className="span">Ressources in Storage:</div>
			
							<div>
							<label><img height="35px" src={gold} alt="Gold:"></img></label>
							<input type="number"  name="stoGold" max={Cst.MaxGoldStorage} min='0' placeholder={"Max: "+Cst.MaxGoldStorage} step="10000" onChange={this.handleChange} ></input></div>
							</div>
							<div>
							<label><img height="35px" src={elixir} alt="Elixir:"></img></label>
							<input type="number"  name="stoElixir" max={Cst.MaxElixirStorage} min='0' placeholder={"Max: "+Cst.MaxElixirStorage} step="10000" onChange={this.handleChange}></input>
							</div>
							<div>
							<label><img height="35px" src={darkelixir} alt="Dark Elixir:"></img></label>
							<input type="number"  name="stoDarkElixir" max={Cst.MaxDarkElixirStorage} min='0' placeholder={"Max: "+Cst.MaxDarkElixirStorage} step="1000" onChange={this.handleChange}></input><br></br>
							</div>
						</div>
							
						<div className="Horizontal">
							<div className="span">Ressources in Treasury:</div>
				
							<label><img width="30px" src={gold} alt="Gold:"></img></label>
							<input type="number"  name="tGold" max={Cst.MaxGoldTreasury} min='0' placeholder={"Max: "+Cst.MaxGoldTreasury} step="10000" onChange={this.handleChange}></input>
							<label><img height="35px" src={elixir} alt="Elixir:"></img></label>
							<input type="number"  name="tElixir" max={Cst.MaxElixirTreasury} min='0' placeholder={"Max: "+Cst.MaxElixirTreasury} step="10000" onChange={this.handleChange}></input>
							<label><img height="35px" src={darkelixir} alt="Dark Elixir:"></img></label>
							<input type="number"  name="tDarkElixir" max={Cst.MaxDarkElixirTreasury} min='0' placeholder={"Max: "+Cst.MaxDarkElixirTreasury} step="500" onChange={this.handleChange}></input>
							</div>
						</div>
							
		</form>
	</div>
	</div>	
    );
  }
}

export default TownForm;