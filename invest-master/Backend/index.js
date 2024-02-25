const express = require("express");
require("dotenv").config()
const {connection} =require("./config/db")
const {userRouter} = require("./routes/user.routes")
const {StockModel} = require("./model/stock.model")
const cors=require("cors");
const { adminrouter } = require("./routes/admin.routes");
const { portfolioRouter } = require("./routes/portfolio.routes");
const app = express();
app.use(express.json());
app.use(cors())


app.use("/users",userRouter)
app.use("/adminstocks",adminrouter)
app.use("/portfolio",portfolioRouter)

//Public Routes

app.get("/", async(req,res)=>{
  try {
    const topStocks = await StockModel.find().sort({price:-1}).limit(10);
    res.status(200).send({"msg":"topStocks are",topStocks})
  } catch (error) {
    res.send({"error":error})
  }
})

app.get("/about",(req,res)=>{
    res.send({"msg":"This is the about page"})
})



///Server connection

app.listen(process.env.port,async ()=>{
    try {
         await connection
         console.log("connected to DB")
         console.log(`Server is ruuning at port ${process.env.PORT}`);
    } catch (error) {
        console.log(error)
    }
    
})