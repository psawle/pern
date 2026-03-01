
import {Schema, model} from "mongoose";

const userScehma = new Schema({
     name : {type: String},
     email :{type: String, unique :true},
    //  password : {type : String},
},{
    timestamps :true
 })

 const User = model("user",userScehma);

 export default User;