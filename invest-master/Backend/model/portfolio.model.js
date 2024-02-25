const mongoose = require("mongoose");

const portfolioSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  returns: { type: Number, required: true },
  user:{type: String, required: true}
})


const portfolioModel = mongoose.model( "portfolio", portfolioSchema );

module.exports={
  portfolioModel
}