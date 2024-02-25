const express = require("express");
const { portfolioModel } = require("../model/portfolio.model");
const portfolioRouter= express.Router()


//get user stocks

portfolioRouter.get("/",async(req,res)=>{
     try {  
        const stock =  await portfolioModel.find();
        res.send({"msg":"Here is your stocks",stock}) 
     } 
     catch (error) {
        res.send({"error":error})
        
     }
})

//Post user
portfolioRouter.post("/",async(req,res)=>{
    const {name,price,returns,user}= req.body

      try {
          
        const stock= new portfolioModel({name,price,returns,user})
        await stock.save();
        res.send({"msg":"New stock has been added"})
      } 
      catch (error) {
         res.send({"error":error})
         
      }
 })

 //Delete byb shyam
 portfolioRouter.delete("/:stockID",async(req,res)=>{
    try {
        const {stockID}= req.params;
        const stock= await portfolioModel.findByIdAndDelete({_id:stockID})
        res.status(200).send({"msg":"stock got deleted"})
    } catch (error) {
        res.status(500).send({"msg":"Error in deleting stock"})
    }
})






module.exports={
    portfolioRouter
}