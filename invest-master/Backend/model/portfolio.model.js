const mongoose = require("mongoose");

const portfolioSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  returns: { type: Number, required: true },
  // userID:{type: Number, required: true},
  // username: {type: Number, required: true}
})


const portfolioModel = mongoose.model( "portfolio", portfolioSchema );

module.exports={
  portfolioModel
}