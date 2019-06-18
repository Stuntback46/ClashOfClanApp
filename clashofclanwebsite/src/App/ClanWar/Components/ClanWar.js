import React from 'react';
import WarInterface from './WarInterface.js'
import axios from 'axios'
class ClanWar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	participant:0,
      player:[]
      
    };
   
}
 componentDidMount() {
 	console.log("did mount")
axios.get('api/clanwar/')
  .then((response)=> {
    // handle success
   
   this.setState({participant:response.data.participant})
   this.setState({defStars:response.data.defStars})
   this.setState({hdvLvl:response.data.hdvLvl})
   this.setState({instructions:response.data.instructions})
   this.setState({offStars:response.data.offStars})
   this.setState({opponent:response.data.opponent})
   this.setState({teamMate:response.data.teamMate})
   this.setState({hdvOppLvl:response.data.hdvOppLvl})


  })
  .catch((error) =>{
if (error.toString()==='Error: Request failed with status code 403')
{
 this.setState({error:'You must be logged in to see the active war!'} )

}
if (error.toString()==='Error: Request failed with status code 406')
{this.setState({error:'You can have only one war active at the same time'} )}
  

  }).then(()=> {
    // always executed
  });
}
  render() {
  	console.log("teammate",this.state.teamMate)
  	if(this.state.participant
  		&&this.state.defStars
  		&&this.state.hdvLvl
  		&&this.state.instructions
  		&&this.state.offStars
  		&&this.state.opponent
  		&&this.state.teamMate
  		&&this.state.hdvOppLvl
  		)
{
	return(
<WarInterface className="vw-90" 
history={this.props.history}
participant={this.state.participant} 
defStars={this.state.defStars}
hdvLvl={this.state.hdvLvl}
instructions={this.state.instructions}
offStars={this.state.offStars}
opponent={this.state.opponent}
teamMate={this.state.teamMate}
hdvOppLvl={this.state.hdvOppLvl}
/>
  )}
  else{
  	return (<p>Loading...</p>)
  }  		
 
 
  }
}

export default ClanWar;