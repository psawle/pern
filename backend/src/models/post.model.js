import mongoose from "mongoose";
// import User from "./userSchema.js";

const postSchema = new mongoose.Schema({
    title :{
        type : String,
        // required : true,
        trim : true,
        maxlength : 150
    },
    caption  : {
        type : String,
        maxlength :400
    },
    image: {
  url: {
    type: String,
    // required: true
  },
  fileId: {
    type: String,
    // required: true
  },
  userId: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "user",
    required : true
  }
}
})

export default postSchema;