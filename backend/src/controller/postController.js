import postSchema from "../models/post.model.js";
import { generateCaption } from "../service/ai.service.js";
import uploadImage from "../service/storage.service.js";

export const createPost = async (req,res) => {
try {
    if(!req.file){
        return res.status(401).json({ message : "image url is missing"})
    }

    const base64Image = new Buffer.from(req.file?.buffer).toString('base64')
    const caption = await generateCaption(req.file,base64Image)

    const imageUrl = await uploadImage(req.file.buffer,req.file?.originalname)

    const postCreated = await postSchema.create({
        image  : imageUrl,
        caption : caption?.text,
        user : req.user?._id
    });

    if(!postCreated){
        return res.status(500).json({
            message: "internal server error",
            data : postCreated
        })
    } else {
        return res.status(200).json({
            message: "post created successfully",
            data : postCreated
        })
    } 
} catch (error) {
    console.log("error",error)
    return res.json({
        message :" message from catch ",
        data : error
    })
}
}

export const deletePost = async (req,res) => {

}

export const getpost = async (req,res) => {

}

export const updatePost = async (req,res) => {

}

export const getAllPost = async (req,res) => {

   try {
    const response = await postSchema.find()
    if(!res){
        return res.status(400).json({
            message : "no data to show"
        })
    }
    res.status(200).json({
        message : "list of all data",
        data : response
    })
   } catch (error) {
    console.log("error from catch",error)
   }

}