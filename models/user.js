var mongoose = require("mongoose");
var passportLocalMongoose= require("passport-local-mongoose");
var UserSchema = new mongoose.Schema({
email:String,
password:String,
dateOfBirth:Date,
gender:String,
villageId:String,
pseudo:String,
clanId:String

})
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",UserSchema);