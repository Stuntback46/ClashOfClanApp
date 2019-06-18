    
const mongoose = require("mongoose");
const ClanWarSchema = mongoose.Schema({
 
  createdAt: { type: Date, default: Date.now },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    pseudo: String
  },
  teamMate: Array,
  opponent:Array,
  hdvOppLvl:Array,
  hdvLvl: Array,
  defStars: Array,
  offStars:Array,
  instructions:Array,
  participant:Number,
  active: Boolean
});

module.exports = mongoose.model("ClanWar", ClanWarSchema);



