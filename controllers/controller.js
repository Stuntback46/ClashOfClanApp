const axios = require('axios');
const User = require("../models/user");
const ClanWar= require("../models/clanwar");
const Config= require("../config.js");


exports.login = function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.status(200).send({username:req.user.username,villageId:req.user.villageId,pseudo:req.user.pseudo,clanId:req.user.clanId});

  }

exports.logout=(req,res)=>{

req.logout();

res.send(200);

}


exports.getUser=function(req,res){
if(req.user)
{ 
  
const user={username:req.user.username,villageId:req.user.villageId}
  res.json(user).end(200)
}

else
{
  res.status(400).send();}

};

exports.signup=function(req,res){

  if (Object.getOwnPropertyNames(req.body).length !== 0
    && typeof req.body.username!=="undefined"
    && typeof req.body.password!=="undefined"
    && typeof req.body.dateOfBirth!=="undefined"
    && typeof req.body.gender!=="undefined"
    && typeof req.body.villageId!=="undefined"
  ) //true)
  {
 
  let emailValid = (req.body.username).match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  emailValid ? emailValid='' : emailValid='Email is invalid!';
  let passwordValid = (req.body.password).length >= 6;
  passwordValid ? passwordValid='': passwordValid='Password is too short!';
  let dateOfBirthValid = (req.body.dateOfBirth).match(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i);
  dateOfBirthValid ? dateOfBirthValid='': dateOfBirthValid='Must be DD/MM/YYYY';
  let genderValid = ((req.body.gender)==='female'||(req.body.gender)==='male'||(req.body.gender)==='other');
  genderValid ? genderValid='': genderValid='Thanks to file your gender!';
  let villageIdValid = ((req.body.villageId).length > 7 && (req.body.villageId).length < 11 && (req.body.villageId).match(/^[/#][a-zA-Z0-9.,$;]+$/i)); 
  villageIdValid ? villageIdValid='': villageIdValid='Village Id is invalid! Must be like: #XXXXXXXXX';
  let formValid= (emailValid + passwordValid + dateOfBirthValid + genderValid+ villageIdValid+('') )
  
  let error={response:{data:{message:"Thanks to fill properly all fields!!"}}}
  if (formValid.length>0){  res.status(400).send(error);}
  else{ 
 
          axios.get('https://api.clashofclans.com/v1/players/'+(escape(req.body.villageId)),
{headers: {
        
      "Authorization" : Config.SupercellApiKey
        }
    })
         .then(response => {

       
       let pseudo=response.data.name;
        let date=req.body.dateOfBirth;
         const month =date[3]+date[4];
         const day=date[0]+date[1];
         const year=date[6]+date[7]+date[8]+date[9]
           date=month+'/'+day+'/'+year;
     
         var newUser = new User({username:req.body.username,dateOfBirth:date,gender:req.body.gender,villageId:req.body.villageId,pseudo:pseudo,clanId:response.data.clan.tag});
        User.register(newUser,req.body.password, function(err, user){
        if(err){
      
          res.status(409).send(err);
     }
         else{ 
    res.status(200).send();
 }  
   
  })

}).catch(e => {
 
  error={message:"Your village Id is Wrong, please check it again. If it is correct the Supercell server seems unaivaible please try again later"};


  res.status(404).send(error);
})

}}
  else{
    res.status(400).send();
  }

}

exports.getClan=(req,res)=>{ 
const clanTag = req.params.clantag;

axios.get('https://api.clashofclans.com/v1/clans/'+(escape(clanTag)),
{headers: {
        "Authorization" : Config.SupercellApiKey
      }
    })
  .then(response => {
  
    res.setHeader('Content-Type', 'application/json');

  res.send(response.data);
   
  })
  .catch(e => {
    res.setHeader('Content-Type', 'application/json');
 let data=(419);

  res.send(data);
  });
}

exports.getPlayer=(req,res)=>{ 
const playerTag = req.params.playertag;

axios.get('https://api.clashofclans.com/v1/players/'+(escape(playerTag)),
{headers: {
        "Authorization" : Config.SupercellApiKey
      }
    })
  .then(response => {
    res.setHeader('Content-Type', 'application/json');

  res.send(response.data);
   
  })
  .catch(e => {
  
    res.setHeader('Content-Type', 'application/json');
 let data=(419);

  res.send(data);
  });
	}


exports.addNewWar=function(req,res){
if (Object.getOwnPropertyNames(req.body).length !== 0
    && typeof req.body.participant!=="undefined"
    && req.body.participant>=5
    && req.body.participant<=50
  ) //true)
{
  ClanWar.findOne( {'author.id' : req.user.id,active:true} ,(err, found) => {
  if (found===null)
    {

    let {author,pseudo,participant,active} = {
    author: {
        id: req.user._id,
        pseudo: req.user.pseudo
      },
      participant:req.body.participant,
      active:true
    }
    let newWar= {author,pseudo,participant,active};
    ClanWar.create(newWar, (err, newlyCreated)=>{

      if (err) {  
      res.send(err);

      }
      else {
          // redirect back to campground page
          res.send(200);
      }

    })
  }
  else{
   let error =""

    res.status(406).send(error)}
  })
}
else {
  res.send(400)
}
}

exports.getWar=function(req,res){
ClanWar.findOne( {'author.id' : req.user.id,active:true} ,(err, found) => {
  
if(err)
{

} 
else if (found===null) 
res.status(404).send();
else
{res.send(found)}

  })
}

exports.updateWar=function(req,res){
    let { instructions, teamMate, hdvLvl, defStars, opponent,hdvOppLvl,offStars } = { 
      instructions: req.body.instructions,
      teamMate:req.body.teamMate,
      hdvLvl:req.body.hdvLvl,
      defStars:req.body.defStars,
      opponent:req.body.opponent,
      hdvOppLvl:req.body.hdvOppLvl,
      offStars:req.body.offStars
      }

   let newData = { instructions, teamMate, hdvLvl, defStars, opponent,hdvOppLvl,offStars}
    
ClanWar.findOneAndUpdate( {'author.id' : req.user.id,active:true},{$set: newData} ,(err, found) => {


  })

}
