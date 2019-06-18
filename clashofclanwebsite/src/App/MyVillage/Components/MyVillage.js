import React from 'react';
import axios from 'axios';

class MyVillage extends React.Component {
  constructor(props) {
    super(props);
    this.state={data:Number}
    
}
  componentDidMount() {
    console.log("componentDidMount")
let villageIdToGet    
if (this.props.villageIdToGet)
{
  villageIdToGet=this.props.villageIdToGet
}
else {
  villageIdToGet=localStorage.getItem('villageId')
}

axios.get('api/player/'+ escape(villageIdToGet))
  .then((response)=> {
    // handle success
   this.setState({data:response.data})
    console.log(response);
  })
  .catch((error) =>{
    // handle error
    
    console.log(error);
    if ( error.toString()==='Error: Request failed with status code 403')
      {
        this.setState({ data:403 })
      if(localStorage.getItem('isLoggedIn')==='true')
        {  console.log("local strorage")
        localStorage.setItem('isLoggedIn','false')
          this.props.history.go('/')}
      }
      if ( error.toString()==='Error: Request failed with status code 404')
      {
        this.setState({ data:404 })
      }
  })
  .then(()=> {
    // always executed
  });

  /*fetch('api/player/'+ escape(localStorage.getItem('villageId')))
      .then(response => (response.json()))
      .then(data => Error: Request failed with status code 403)
 	 .catch(err=>

    this.setState({ data:404 }))*/
  }

  componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.villageIdToGet !== prevProps.villageIdToGet) {
   console.log("componentDidUpdate")
   this.componentDidMount()
  }
}





getHeroes=(heroes)=>{
  var html=[];
  for (var i = 0; i < heroes.length; i++) {
  if (heroes[i].village==='home')
{

html.push(<tr key={i} ><th>{heroes[i].name}</th><th>{heroes[i].level}</th></tr>)

}


  }
return html;

}
getTroops=(troops)=>{
  var html=[];
  for (var i = 0; i < troops.length; i++) {
  if (troops[i].village==='home')
{

html.push(<tr key={i} ><th>{troops[i].name}</th><th>{troops[i].level}</th></tr>)

}


  }
return html;

}


  render() {
   
   if(this.state.data===404) 
        {return(<p>{localStorage.getItem('villageId')} is a wrong Village ID, you may check it on your account!</p>)
        }
      else if((this.state.data.tag)&&(localStorage.getItem('isLoggedIn')==='true'))
      {
        return (
          <div className="row vw-md-95 vw-sm-100 d-flex justify-content-between">
          <div className="col-md-4 col-sm-12">
          <h2>Information:</h2>
          <table className="table table-dark">
        <tbody >
        <tr><th>Player Tag:</th><th>{this.state.data.tag}</th></tr>
    <tr><th>Player Name:</th><th> {this.state.data.name}</th></tr>
    <tr><th>Town Hall Level:</th><th> {this.state.data.townHallLevel}</th></tr>
    <tr><th>Experience Level:</th><th> {this.state.data.expLevel}</th></tr>
    <tr><th>Trophies:</th><th> {this.state.data.trophies}</th></tr>
    <tr><th>Best Trophies:</th><th> {this.state.data.bestTrophies}</th></tr>
    <tr><th>War Stars:</th><th> {this.state.data.warStars}</th></tr>
    <tr><th>Attack Wins:</th><th> {this.state.data.attackWins}</th></tr>
    <tr><th>Defense Wins:</th><th> {this.state.data.defenseWins}</th></tr>
    <tr><th>Clan Name:</th><th> {this.state.data.clan===undefined?"":this.state.data.clan.name}</th></tr>
    <tr><th>Clan Level:</th><th> {this.state.data.clan===undefined?"":this.state.data.clan.clanLevel}</th></tr>
    <tr><th>Clan Badge:</th><th> {this.state.data.clan===undefined?"":<img src={this.state.data.clan.badgeUrls.small} alt="Clan Badge" height="42" width="42"></img>}</th></tr>
    </tbody>
    </table>
    </div>
    <div className="col-md-4 pl-md-5 col-sm-12">
    <h2>Troops:</h2>
    <table className="table table-dark">
        <tbody >
        {this.getTroops(this.state.data.troops)}
    </tbody>
    </table>
    </div>
    <div className="col-md-4 col-sm-12">
     <h2>Heroes:</h2>
    <table className="table table-dark">
   
        <tbody >
        {this.getHeroes(this.state.data.heroes)}
    </tbody>
    </table>
    </div>
    
</div>
    )
      }

      else if((localStorage.getItem('isLoggedIn')==='false'))
      {
       return( <p>You must be Logged In to see your village information!</p>)
      }
      else if(this.state.data===403)
      {
        return (<p>It seems you have been disconnected. You must be Logged In to see your village information!</p>)
      }
      else  {return(<p>Loading</p>)} 
  }
      
}

export default MyVillage;