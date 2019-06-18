import React from 'react';
import Freeze from '../Images/spells/Freeze_icon.png';
import Heal from '../Images/spells/Heal_icon.png';
import Jump from '../Images/spells/Jump_icon.png';
import Lightning from '../Images/spells/Lightning_icon.png';
import Rage from '../Images/spells/Rage_icon.png';

import Archer from '../Images/Troops/icon_archer.png';
import Babydragon from '../Images/Troops/icon_babydragon.png';
import Balloon from '../Images/Troops/icon_balloon.png';
import Barbarian from '../Images/Troops/icon_barbarian.png';
import Bowler from '../Images/Troops/icon_bowler.png';
import Dragon from '../Images/Troops/icon_dragon.png';
import Giant from '../Images/Troops/icon_giant.png';
import Goblin from '../Images/Troops/icon_goblin.png';
import Golem from '../Images/Troops/icon_golem.png';
import Healer from '../Images/Troops/icon_healer.png';
import HogRider from '../Images/Troops/icon_hogrider.png';
import LavaHound from '../Images/Troops/icon_lavahound.png';
import Minion from '../Images/Troops/icon_minion.png';
import Pekka from '../Images/Troops/icon_pekka.png';
import Valkyrie from '../Images/Troops/icon_valkyrie.png';
import WallBreaker from '../Images/Troops/icon_wallbreaker.png';
import Witch from '../Images/Troops/icon_witch.png';
import Wizard from '../Images/Troops/icon_wizard.png';

import King from '../Images/Heroes/icon_king.png';
import Queen from '../Images/Heroes/icon_queen.png';
import Warden from '../Images/Heroes/icon_warden.png';


class DrawTool extends React.Component {
constructor(props) {
  super(props);
  this.handleClick=this.handleClick.bind(this);
  this.handleBlur=this.handleBlur.bind(this);
  

}

handleClick(e){
  console.log(e)
let selected = e.target.value;
this.props.onSelected(selected);

}
handleBlur(e){
  console.log("blur")
let selected = "";
this.props.onSelected(selected);

}

  componentDidMount() {

  
  }

 

  render() {
   
    return (
      <div className="Tool">
      <div className="Spells">
     <input type="image" src={Freeze} alt="Freeze Spell Icon" height="42" width="42" value="0" onClick={this.handleClick}  onBlur={this.handleBlur} ></input>
     <input type="image" src={Heal} alt="Freeze Spell Icon" height="42" width="42" value="1" onClick={this.handleClick}></input>
     <input type="image" src={Jump} alt="Freeze Spell Icon" height="42" width="42" value="2" onClick={this.handleClick}></input>
     <input type="image" src={Lightning} alt="Freeze Spell Icon" height="42" width="42" value="3" onClick={this.handleClick}></input>
     <input type="image" src={Rage} alt="Freeze Spell Icon" height="42" width="42" value="4" onMouseDown={this.handleClick} onTouchStart={this.handleClick}></input>
	    </div>	
      <div className='Troops'>
     <input type="image" src={Archer} alt="Archer Icon" height="42" width="42" value="5" onClick={this.handleClick}></input>
     <input type="image" src={Babydragon} alt="Babydragon Icon" height="42" width="42" value="6" onClick={this.handleClick}></input>
     <input type="image" src={Balloon} alt="Ballon Icon" height="42" width="42" value="7" onClick={this.handleClick}></input>
    <input type="image" src={Barbarian} alt="Babydragon Icon" height="42" width="42" value="8" onClick={this.handleClick}></input>
    <input type="image" src={Bowler} alt="Babydragon Icon" height="42" width="42" value="9" onClick={this.handleClick}></input>
     <input type="image" src={Dragon} alt="Ballon Icon" height="42" width="42" value="10" onClick={this.handleClick}></input>
     <input type="image" src={Giant} alt="Ballon Icon" height="42" width="42" value="11" onClick={this.handleClick}></input>
     <input type="image" src={Goblin} alt="Ballon Icon" height="42" width="42" value="12" onClick={this.handleClick}></input>
     <input type="image" src={Golem} alt="Ballon Icon" height="42" width="42" value="13" onClick={this.handleClick}></input>
     <input type="image" src={Healer} alt="Ballon Icon" height="42" width="42" value="14" onClick={this.handleClick}></input>
      <input type="image" src={HogRider} alt="Ballon Icon" height="42" width="42" value="15" onClick={this.handleClick}></input>
     <input type="image" src={LavaHound} alt="Ballon Icon" height="42" width="42" value="16" onClick={this.handleClick}></input>
    
     <input type="image" src={Minion} alt="Ballon Icon" height="42" width="42" value="17" onClick={this.handleClick}></input>
     <input type="image" src={Pekka} alt="Ballon Icon" height="42" width="42" value="18" onClick={this.handleClick}></input>
     <input type="image" src={Valkyrie} alt="Ballon Icon" height="42" width="42" value="19" onClick={this.handleClick}></input>
     <input type="image" src={WallBreaker} alt="Ballon Icon" height="42" width="42" value="20" onClick={this.handleClick}></input>
     <input type="image" src={Witch} alt="Ballon Icon" height="42" width="42" value="21" onClick={this.handleClick}></input>
     <input type="image" src={Wizard} alt="Ballon Icon" height="42" width="42" value="22" onClick={this.handleClick}></input> 
      </div>
      <div ClassName="Heroes">
      <input type="image" src={King} alt="Archer Icon" height="42" width="42" value="23" onClick={this.handleClick}></input>
     <input type="image" src={Queen} alt="Babydragon Icon" height="42" width="42" value="24" onClick={this.handleClick}></input>
     <input type="image" src={Warden} alt="Babydragon Icon" height="42" width="42" value="25" onClick={this.handleClick}></input>
      </div> 
      </div> 
    );
  }
      
}

export default DrawTool;