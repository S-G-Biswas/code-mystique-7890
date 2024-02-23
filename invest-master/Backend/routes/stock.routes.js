const express=require("express")
const { StockModel } = require("../model/stock.model")
const { auth } = require("../middleware/auth")

const stockrouter=express.Router()


//to view all the stocks by the admin
stockrouter.get("/",auth,async(req,res)=>{
    try {
        const stocks=await StockModel.find()
        res.status(200).send({"msg":"The available stocks are",stocks})
    } catch (error) {
        res.status(500).send({"msg":"Error in fetching stocks"})
    }
})


//to post a new stock to the alllstocks page by the admin
stockrouter.post("/",auth,async(req,res)=>{
    try {
        const stock=new StockModel(req.body)
        await stock.save()
        res.status(200).send({"msg":"The new stock added"})
    } catch (error) {
        res.status(500).send({"msg":"Error in adding stock"})
    }

})

//to update a new stock to the alllstocks page by the admin
stockrouter.patch("/:stockID",auth,async(req,res)=>{
    try {
        const {stockID}=req.params
        const updatedstock=await StockModel.findByIdAndUpdate({_id:stockID},req.body)
        res.status(200).send({"msg":"stock got updated",updatedstock})
    } catch (error) {
        res.status(500).send({"msg":"Error in updating stock"})
    }

})

//to delete a stock to the alllstocks page by the admin
stockrouter.delete("/:stockID",auth,async(req,res)=>{
    try {
        const {stockID}=req.params
        const stock= await StockModel.findByIdAndUpdate({_id:stockID})
        res.status(200).send({"msg":"stock got deleted"})
    } catch (error) {
        res.status(500).send({"msg":"Error in updating stock"})
    }
})


module.exports={
stockrouter
}

