const express = require('express');
const passport= require("passport");
const app = express();
const LocalStrategy = require("passport-local");
const mongoose = require("mongoose");
const User = require("./models/user");
const path = require('path');
const Config= require("./config.js");
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
var httpProxy = require('http-proxy');

const bodyParser = require("body-parser");
var cors = require('cors')
const router = require('./Routes/router');
app.use(cors())

mongoose.connect(Config.MongoDBconfig, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
        console.log("Unable to connect to MongoDB Atlas!");
        console.error(error);
    });
app.use(express.static(path.join(__dirname, 'clashofclanwebsite/build')));
app.use(require("express-session")({
secret: Config.Secret,
resave: false,
saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

var userSchema = new mongoose.Schema({})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin","http://192.168.0.22:3001")
  res.header('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Content-Type', 'application/json');
  next();
});

app.use("/api",router)

module.exports = app;




