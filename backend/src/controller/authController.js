import User from "../models/userSchema.js";

export const createUser = async (req,res) => {
    const {name,email,password,role} = req.body;
    console.log("res body",req?.body);

    if (req?.body){
        const userCreated = await User.create(req.body)
        res.status(200).json({
            message : "user created successfully",
            data : req?.body
        })
    } else {
        res.status(500).json({
            message : "internal server error",
        })
    }

}