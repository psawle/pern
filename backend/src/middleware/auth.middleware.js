import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

export const authMiddleware = async (req,res,next) => {
     const {authorization} = req.headers;
     const token = authorization.split(" ")[1]
    console.log("Authorization",authorization)
    if(!authorization){
        res.status(400).json({
            message :"token is not valid"
        })
    } 
   const decodedToken = jwt.verify(token,process.env.JWT_SECRET)
   console.log(decodedToken,"decodedToken")

   const user = await User.findById(decodedToken?.id)
   console.log("UU",user)
   req.user = user;
  next();
}