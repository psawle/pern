import {Schema, model} from "mongoose";

const userScehma = new Schema({
     name : {type: String},
     email :{type: String, unique :true},
     password : {type : String},
     role :{ type :String }
},{
    timestamps :true
 },)
 
 userScehma.methods.generateToken = function () {
     return jwt.sign(
       { id: this._id },
       process.env.JWT_SECRET,
       { expiresIn: process.env.JWT_EXPIRE }
     );
   };

 const User = model("user",userScehma);

 export default User;