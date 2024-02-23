const access=(...roles)=>{
    return(req,res,next)=>{
        if(roles.includes(req.role)){
            next()
        }
        else{
            res.status(500).send({"msg":"You are not authorised to access  allStocks"})
        }
    }
    }
    module.exports={
        access
    }