const express = require('express');
const router = express.Router();
const passport= require("passport");
const LocalStrategy = require("passport-local");
const ctrl=require('../controllers/controller.js');


function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.send(403).end(403);
}


router.post('/signup',ctrl.signup);

router.post("/login",passport.authenticate('local'),ctrl.login); 

router.get("/logout",ctrl.logout);

router.get("/user",isLoggedIn,ctrl.getUser)

router.get('/player/:playertag',isLoggedIn, ctrl.getPlayer);

router.get('/clan/:clantag',isLoggedIn, ctrl.getClan);

//router.get('/clan/war/:id',isLoggedIn, ctrl.getWar);

router.post('/clanwar/',isLoggedIn, ctrl.addNewWar);

router.put('/clanwar/',isLoggedIn, ctrl.updateWar);

router.get('/clanwar/',isLoggedIn, ctrl.getWar);

//router.delete('/clan/war/:id',isLoggedIn, ctrl.editWar);

module.exports = router;