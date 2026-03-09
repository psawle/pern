import User from "../models/userSchema.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req,res) => {
    const {name,email,password,role,}= req.body;
    console.log("res body",req?.body);
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
        name : req?.body?.name,
        email : req?.body?.email,
        password : hashedPassword,
        role : req?.body?.role
    }

    if (req?.body){
        const userCreated = await User.create(newUser)
        const token = userCreated.generateToken(userCreated?._id);
        res.status(200).json({
            message : "user created successfully",
            token,
            data : userCreated
        })
    } else {
        res.status(401).json({
            message : "user can not be created",
        })
    }
}

export const userLogin = async (req,res) => {
  const { email , password} = req?.body;
    console.log("login router")

 
   try {
     const userDetails = await User.findOne({email});

    let isPassword = bcrypt.compareSync(password,userDetails?.password)
     if(isPassword){
        const token =  await userDetails.generateToken(userDetails?._id);
        console.log("token",token);
        return res.status(200).json({
             message : "login successfull",
             token,
         })
     } 
   } catch (error) {
    console.log(error)
    res.status(400).json({ message : "user not found " })
   }
    
}

export const userLogout = async (req,res) => {
    
}
