const mongoose = require("mongoose");

const stockSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  return: { type: Number,required: true},
  userID:{type:String,required:true},
  username:{type:String,required:true}
});

const StockModel=mongoose.model("stock",stockSchema)

module.exports={
    StockModel
}
