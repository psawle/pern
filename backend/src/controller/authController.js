import User from "../models/userSchema.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req,res) => {
    const {name,email,password,role} = req.body;
    console.log("res body",req?.body);
    const newUser = {
        name : req?.body?.name,
        email : req?.body?.email,
        password : req?.body?.password,
        role : req?.body?.role
    }

    if (req?.body){
        const userCreated = await User.create(newUser)
        const token = User.generateToken();
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
  const {name , email , password} = req?.body;
 
    const name1 = await User.findOne({name: name});
    console.log("user name ",name1)

    if(name == name1?.name && password == name1?.password){
       return res.status(200).json({
            message : "login successfull",
            data : name1
        })
    } 
       res.status(400).json({ message : "user not found " })
    
}

export const userLogout = async (req,res) => {
    
}
