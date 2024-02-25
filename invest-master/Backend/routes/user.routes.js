const express = require("express")
const {UserModel} = require("../model/user.model")
const bcrypt = require("bcrypt")
const userRouter= express.Router()
const jwt = require("jsonwebtoken")
const { auth } = require("../middleware/auth")
const { access } = require("../middleware/access")
const { StockModel } = require("../model/stock.model")

//Adding new user

userRouter.post("/register",async(req,res)=>{
   const {username,email,password,role}= req.body
     try {
         bcrypt.hash(password, 8, async(err, hash) => {
             if(err){
                  res.send({"error":err})
             }
             else{
               const user= new UserModel({username,email,password:hash,role})
               await user.save();
               res.send({"msg":"New user has been added"})
             }
         })
     } 
     catch (error) {
        res.send({"error":error})
        
     }
})


//Authenticating the existing user -->  Login

userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body
    try {
         const user =  await UserModel.findOne({email})
         if(!user){
          res.send({"Error":"User Not Found"})
         }
         
         bcrypt.compare(password, user.password, (err, result) => {
               if(result){
                 const accessToken = jwt.sign({ userID:user._id,author:user.username }, 'masai')
                  res.send({"msg":"Login Successful",accessToken})
               }
               else{
                  res.send({"msg":"User Not Found.."})
                }
         });       
     } 
    catch (error) {
       res.send({"error":error})
       
    }
})

//user can see alll stocks page
// User can see all stocks page
// userRouter.get("/allstocks", auth, access("user"), async (req, res) => {

userRouter.get("/allstocks", async (req, res) => {
  try {
    const stocks = await StockModel.find();
    res.status(200).send({ "msg": "The available stocks are", stocks });
  } catch (error) {
    console.error("Error fetching stocks:", error);
    res.status(500).send({ "msg": "Error fetching stocks", error: error.message });
  }
});




module.exports={
    userRouter
}