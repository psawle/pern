import mongoose, { model } from "mongoose";

const post = new mongoose.Schema({
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
  user: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "user",
    // required : true
  }
}
})

const postSchema = model("post",post)

export default postSchema;