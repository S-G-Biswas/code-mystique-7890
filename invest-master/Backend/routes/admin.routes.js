const express=require("express")
const { StockModel } = require("../model/stock.model")
const { auth } = require("../middleware/auth")
const { access } = require("../middleware/access")

const adminrouter=express.Router()


//to view all the stocks by the admin
adminrouter.get("/",async(req,res)=>{

// adminrouter.get("/",auth,access("admin"),async(req,res)=>{
    try {
        const stocks=await StockModel.find()
        res.status(200).send({"msg":"The available stocks are",stocks})
    } catch (error) {
        res.status(500).send({"msg":"Error in fetching stocks"})
    }
})


//to post a new stock to the alllstocks page by the admin

// adminrouter.post("/",auth,access("admin"),async(req,res)=>{

adminrouter.post("/",async(req,res)=>{
    try {
        const stock=new StockModel(req.body)
        await stock.save()
        res.status(200).send({"msg":"The new stock added"})
    } catch (error) {
        res.status(500).send({"msg":"Error in adding stock"})
    }

})

//to update a new stock to the alllstocks page by the admin
// adminrouter.patch("/:stockID",auth,access("admin"),async(req,res)=>{
    adminrouter.patch("/:stockID",async(req,res)=>{

    try {
        const {stockID}=req.params
        const updatedstock=await StockModel.findByIdAndUpdate({_id:stockID},req.body)
        res.status(200).send({"msg":"stock got updated",updatedstock})
    } catch (error) {
        res.status(500).send({"msg":"Error in updating stock"})
    }

})

//to delete a stock to the alllstocks page by the admin
// adminrouter.delete("/:stockID",auth,access("admin"),async(req,res)=>{
    adminrouter.delete("/:stockID",async(req,res)=>{

    try {
        const {stockID}=req.params
        const stock= await StockModel.findByIdAndDelete({_id:stockID})
        res.status(200).send({"msg":"stock got deleted"})
    } catch (error) {
        res.status(500).send({"msg":"Error in updating stock"})
    }
})


module.exports={
adminrouter
}

