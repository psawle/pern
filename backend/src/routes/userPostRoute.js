import {Router} from "express";
import postSchema from "../models/post.model.js";


const userPostRouter = Router();

userPostRouter.route("/").post(async (req,res) => {
    const {image_Url} = req?.body

    if(!image_Url){
        return res.status(401).json({
            message : "imahe ur is missing"
        })
    }

    const payload = {
        title : req.body?.title,
        caption : req.body?.caption,
        image  : req.body?.image
    }
    const postCreated = await postSchema.create();

    res.status(200).json({
        message: "post created successfully",
        data : postCreated
    })
})


export default userPostRouter;