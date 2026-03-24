import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

export const authMiddleware = async (req,res,next) => {
     const {authorization} = req.headers;
     const token = authorization?.split(" ")[1]
    if(!authorization){
        res.status(400).json({
            message :"token is not valid"
        })
    } 
   const decodedToken = jwt.verify(token,process.env.JWT_SECRET)

   const user = await User.findById(decodedToken?.id)
   req.user = user;
  next();
}