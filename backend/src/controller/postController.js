import postSchema from "../models/post.model.js";
import { generateCaption } from "../service/ai.service.js";
import uploadImage from "../service/storage.service.js";

export const createPost = async (req,res) => {
    console.log("sdjjdjjjjj",req?.file)
try {
    if(!req.file){
        return res.status(401).json({ message : "image url is missing"})
    }

    const base64Image = new Buffer.from(req.file?.buffer).toString('base64')
    const caption = await generateCaption(req.file,base64Image)

    const imageUrl = await uploadImage(req.file.buffer,req.file?.originalname)
     console.log("image repon",imageUrl)

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