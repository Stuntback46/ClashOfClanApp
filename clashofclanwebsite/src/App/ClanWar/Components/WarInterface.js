import React from 'react';
import PopUpOrder from './PopUpOrder.js'
import '../Css/style.css'
import StarWin from "../Images/starwin.png"
import axios from "axios"

class WarInterface extends React.Component {
  constructor(props) {
    super(props);
console.log(this.props.teamMate,"teammate")
    this.state = {
      showPopup: false,
      instructions:this.props.instructions,
      teamMate:this.props.teamMate,
      hdvLvl:this.props.hdvLvl,
      defStars:this.props.defStars,
      opponent:this.props.opponent,
      hdvOppLvl:this.props.hdvOppLvl,
      offStars:this.props.offStars    
    };
   
}
togglePopup=(e)=> {


    this.setState({
      showPopup: !this.state.showPopup,
      instruction:this.state.instructions[e.target.name],
      num:e.target.name
    });
e.preventDefault();
  }

  onChange=(e)=> {
    let instructions=this.state.instructions;
    instructions[this.state.num]=e.target.value;

    this.setState({
      instructions:instructions,
      instruction:e.target.value
    });


  }

  handleSave=(e)=> {
e.preventDefault();
axios.put('api/clanwar/',
{
  instructions:this.state.instructions,
  teamMate:this.state.teamMate,
  hdvLvl:this.state.hdvLvl,
  defStars:this.state.defStars,
  opponent:this.state.opponent,
  hdvOppLvl:this.state.hdvOppLvl,
  offStars:this.state.offStars
})
.then((response) => {
  console.log(response)
}).catch((err)=>{console.log(err)})          
    

  }
handleCancel=(e)=>{
  e.preventDefault();
  this.props.history.go('/')
}
  handleUserInput = (e) => {

    let name = e.target.name;
    let value = e.target.value;
    name = name.split(/([0-9]+)/)
    let i=name[1]-1
    name = name[0]
    if (name==='teamMate')
    { let teamMate=this.state.teamMate
      teamMate[i]=value
      this.setState({teamMate:teamMate})
    }
    else if(name==='hdvLvl')
    {let hdvLvl=this.state.hdvLvl
       hdvLvl[i]=value
      this.setState({hdvLvl:hdvLvl})
    }
    else if(name==='defStars')
    {let defStars=this.state.defStars
       defStars[i]=value
      this.setState({defStars:defStars})
    }
    else if(name==='opponent')
    {let opponent=this.state.opponent
       opponent[i]=value
      this.setState({opponent:opponent})
    }
    else if(name==='hdvOppLvl')
    {let hdvOppLvl=this.state.hdvOppLvl
       hdvOppLvl[i]=value
      this.setState({hdvOppLvl:hdvOppLvl})
    }
    else if(name==='offStars')
    {let offStars=this.state.offStars
       offStars[i]=value
      this.setState({offStars:offStars})
    }
   
  }

  render() {
  	let warInterface=[]
  	for (var i = 1; i <= this.props.participant; i++) {
  		warInterface.push(<div key={i}>
<table className="table-dark vw-90 mb-3">
<tbody>
<tr>
<td className="display-5">
{i}
</td>
<td>
 <input onChange={this.handleUserInput} className="form-control" type="text" placeholder="Name of Team Mate" name={"teamMate"+i} value={this.state.teamMate[i-1]}></input>
 <input onChange={this.handleUserInput} className="form-control col-7" type="number" placeholder="HDV Level" name={"hdvLvl"+i} value={this.state.hdvLvl[i-1]}step="1" min="1" max="12"></input>
 <div className="d-flex flex-row">
 <select onChange={this.handleUserInput} className="form-control col-4 mr-2" name={"defStars"+i} value={this.state.defStars[i-1]}>
 <option value={null}></option>
  <option value="0">___</option>
  <option className="onestar" value="1">*</option>
  <option className="twostars" value="2">**</option>
  <option className="threestars" value="3">***</option>
</select>
<button name={i-1}className="btn btn-primary" onClick={this.togglePopup}>Instructions</button>
  </div>     
 </td>
 <td className="display-3">
-
</td>
<td >
<input onChange={this.handleUserInput}className="form-control" type="text" placeholder="N°1" name={"opponent"+i} value={this.state.opponent[i-1]}></input>
 <input onChange={this.handleUserInput} className="form-control col-7" type="number" placeholder="HDV Level" name={"hdvOppLvl"+i} value={this.state.hdvOppLvl[i-1]}step="1" min="1" max="12"></input>
 <select onChange={this.handleUserInput} className="form-control col-4" name={"offStars"+i} value={this.state.offStars[i-1]}>
 <option value={null}></option>
  <option value="0">___</option>
  <option className="onestar" value="1">*</option>
  <option className="twostars" value="2">**</option>
  <option className="threestars" value="3">***</option>
</select> 
 </td>
 <td className="display-5 ">
{i}
</td>
 </tr>
 </tbody>
 </table>
</div>


  )
 
  	}
return (
  <div>
  <form method="post">
<div>{warInterface}</div>
<button onClick={this.handleSave} >Save</button><button onClick={this.handleCancel}>Cancel</button>
</form>
{this.state.showPopup ? 
          <PopUpOrder   className="col-12 pb-6"
            text={this.state.instruction}//||"Type your intructions here:"}
            closePopup={this.togglePopup}
            num={this.state.num}
            onChange={this.onChange}
          />
          : null
        } 
        </div>
	)

  }
}

export default WarInterface;