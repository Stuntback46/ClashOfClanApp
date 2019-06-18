import React from 'react';
import * as Cst from '../Constants/Constants.js';
import axios from 'axios';


class NewClanWar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	newWar:false,
    	participant:15,
    	validation:false,
      error:''

    };
   
}
onNewWar=(e)=>{
this.setState({newWar:true});

}
onNumberofParticipanSelection=(e)=>{
this.setState({participant:e.target.value});

}

saveClanWar=(e)=>{
	axios.post('api/clanwar/',{
  participant:this.state.participant})
.then((response) => {
   
    
   this.props.history.push('/clanwar/');

})                          
.catch(error => {
  console.log(error.toString())
if (error.toString()==='Error: Request failed with status code 403')
{
 this.setState({error:'You must be logged in to create a new war'} )

}
if (error.toString()==='Error: Request failed with status code 406')
{this.setState({error:'You can have only one war active at the same time'} )}

})

}

ClanWarsVs(){
				let ClanWarsVs = [];
			for (let i=5; i <= Cst.ClanWarsMaxParticipant; i=i+5)
			{
				ClanWarsVs.push(<option key={i/5} value={i}>{i} vs {i}</option>); 
			}
			return ClanWarsVs;
		}

  render() {

   if (this.state.newWar===false){
 return(	<div className="device">
      <button type="button" onClick={this.onNewWar}>New War!!!</button>
      </div>);
   
   }
    else if(this.state.newWar===true){

    	return(<div>
    		   <label>Type of War:</label>
    			<select name="participant" value={this.state.participant} onChange={this.onNumberofParticipanSelection}>
    			{this.ClanWarsVs()}
    			</select><br/>
    			<button type="button" onClick={this.saveClanWar}>Validation</button>
          <p className='text-danger'>{this.state.error}</p>
    		</div>);
    }
  
  }
}

export default NewClanWar;
