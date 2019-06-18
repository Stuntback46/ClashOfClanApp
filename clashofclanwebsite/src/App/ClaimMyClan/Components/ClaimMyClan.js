import React from 'react';
import axios from 'axios';
class ClaimMyClan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clanId:"",
    villageIdValid:false,
    isLeader:false
    };
    
}
handleUserInput = (e) => {

   let value= e.target.value;
    this.setState({clanId: value}, () => { this.validateField(value) });
  }
handleUserPasswordInput = (e) => {

   let value= e.target.value;
    this.setState({clanPassword: value});
  }


validateField=(value)=>{
	let villageIdValid = (value.length === 8 && value.match(/^[/#][a-zA-Z0-9.,$;]+$/i)); 
	console.log(villageIdValid)
        if (typeof villageIdValid==='object')
        {this.setState({villageIdValid:true});
        this.setState({error:""})}
        else {this.setState({villageIdValid:false})
        this.setState({error:"Village Id is invalid! Must be like: #XXXXXXXXX"})}
         //#UJ8R89Q   
}
  onSubmit=(e)=>{
e.preventDefault();
axios.get('api/clan/'+escape(this.state.clanId))
.then((response) => {
	console.log(response.data.tag)
response.data.memberList.map((member)=>{
	
if ((member.tag===localStorage.getItem('villageId'))&&(member.role==='member'))
{
	this.setState({clanId:this.state.clanId})
}

})

})                          
.catch(error => {
   if ( error.toString()==='Error: Request failed with status code 403')
      {localStorage.setItem('isLoggedIn','false')
        this.setState({ error:403 })
        
      }
      if ( error.toString()==='Error: Request failed with status code 404')
      {
        this.setState({ error:404 })
      }
  
}
)
  
 
}

  render() {
    
    	if (localStorage.getItem('isLoggedIn')==='false')
    	{return(<p>You must be Logged In to claim on join your clan!</p>)}
    	else{return(<div>
      <form className="demoForm" onSubmit={this.onSubmit} method="post" action="api/login/">
        <div className={`form-group`}>
          <label htmlFor="email">Clan Id</label>
          <input type="text"  className="form-control" name="clanId"
            placeholder="Clan ID"
            value={this.state.clanId}
            onChange={this.handleUserInput} 
            autoComplete='off'
             />
            
        </div>
        <button type="submit" className="btn btn-primary" disabled={!this.state.villageIdValid}>Claim</button>
      </form>
      <div className="panel panel-default">
         <p className='text-danger'>{this.state.error}</p>
           <form className="demoForm" onSubmit={this.onSubmit} method="post" action="api/login/">
        <div className={`form-group`}>
          <label htmlFor="email">Join a Clan</label>
         <input type="text"  className="form-control" name="clanPassword"
            placeholder="Clan Password"
            value={this.state.clanPassword}
            onChange={this.handleUserInput} 
            autoComplete='off'
             />
            
        </div>
        <button type="submit" className="btn btn-primary" disabled={!this.state.villageIdValid}>Join</button>
      </form>
        </div>
        </div>)}	
  }

}
export default ClaimMyClan;