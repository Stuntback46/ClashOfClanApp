import React from 'react';
import axios from 'axios';
import MyVillage from '../../MyVillage/Components/MyVillage.js'
class MyClan extends React.Component {
  constructor(props) {
    super(props);
    this.state={data:Number,
      showPopup:false,
      villageIdToGet:""}
    
}

  componentDidMount() {
console.log(localStorage.getItem('clanId'))
axios.get('api/clan/'+ escape(localStorage.getItem('clanId')))
  .then((response)=> {
    // handle success
   this.setState({data:response.data})

    
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

  }

togglePopup=(e)=> {
  console.log(e.target.value)
    this.setState({
      villageIdToGet:e.target.value
    });   
e.preventDefault();
  }

getMembersList=(MembersList)=>{
  var html=[];
  for (var i = 0; i < MembersList.length; i++) {
{
  let id=MembersList[i].tag;
html.push(

  <option key={i} value={MembersList[i].tag}>{MembersList[i].name}</option>
)
  }}
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
          <div className="col-md-6 col-sm-12">
          <h2>Information:</h2>
          <table className="table table-dark">
        <tbody >
        <tr><th>Clan Name:</th><th>{this.state.data.name}</th></tr>
        <tr><th>Clan Points:</th><th>{this.state.data.clanPoints}</th></tr>
        <tr><th>Clan Versus Points:</th><th>{this.state.data.clanVersusPoints}</th></tr>
        <tr><th>War Wins</th><th>{this.state.data.warWins}</th></tr>
        

    </tbody>
    </table>
    </div>
    <div className="col-md-6 pl-md-5 col-sm-12">
    <h2>Member List</h2>
    <select onChange={this.togglePopup}>
    <option value="">Chose a Team Mate</option>
    {this.getMembersList(this.state.data.memberList)}
    </select>
    </div>
          <MyVillage 
            villageIdToGet={this.state.villageIdToGet}  className="col-12 pb-6"
          />
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

export default MyClan;