const jwt = require( 'jsonwebtoken' );
const { UserModel } = require('../model/user.model');


const auth=(req,res,next)=>{
    const token=req.headers.authorization.split(" ")[1]
    if(token){
        jwt.verify(token,"masai",async(err,decoded)=>{

            if(decoded){
                const {userID}=decoded;
                const user=await UserModel.findOne({_id:userID})
                const required_role=user.role;
                req.role=required_role
                next();

            }
            else{
                res.status(500).send({"msg":"Please login"})
            }
        })
    }
    else{
        res.status(500).send({"msg":"Please login"})
    }
}


module.exports={
    auth
}