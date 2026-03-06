

import mongoose from "mongoose";

const authScehma = new mongoose.Schema({
    name : {
        type : String,
        trim : true,
        maxlength : 200
    },
    email : {
        type : String,
        unique :true
    },
    password : {
        type : String
    }
})

export default authScehma;