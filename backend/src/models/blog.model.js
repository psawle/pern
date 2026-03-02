import mongoose, { model } from "mongoose";

const blogSchema = new mongoose.Schema({
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
  }
}
})

const blog = model("blog",blogSchema)

export default blog;