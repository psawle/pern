import mongoose from "mongoose";
import blog from "../models/blog.model.js";

export const createBlog = async (req,res) => {
    console.log("user in controller",req.user)
    const blogDetails = {
        title : req.body?.title,
        caption : req.body?.caption,
        image: {
          url: req.body?.url,
          fileId: req.body?.fileId,
        },
        userId : req.user._id      
}
    const blogcreated = await blog.create(blogDetails)
    if(blogcreated){
        res.status(201).json({
            message : "blog created",
            data : blogcreated,
        })
    } else {
        res.status(400).json({
            message: "error creating blog"
        })
    }
}

export const getAllBlog = async (req,res) => {
    const listOfBlog = await blog.find({userId: req.user._id}).populate("userId","name email");
     console.log("listOfBlog",req.user);
    if(!listOfBlog){
        res.status(400).json({
            message : "no data to show"
        })
    } else {
        res.status(200).json({
            message: "list of all blog",
            data : listOfBlog
        })
    }
}

export const getBlogById = async (req,res) => {
    const {id} = req.params;

    if(!id){
        res.status(400).json({
            message : "id not present"
        })
    } else {
        const singleblog = await blog.findById(id);
        res.status(200).json({
            message:"blog details",
            data : singleblog
        })
    }
}

export const updateBlog = async (req,res) => {
    const {id} = req.params;
    const newTitle  = req.body.title;
    const newCaption = req.body.caption;
    if(!id){
        res.status(400).json({
            message: "id is not present",
        })
    } else {
        const updatedBlog = await blog.findByIdAndUpdate(id,{title :newTitle,caption : newCaption},{
            new: true,
          })
        res.status(200).json({
            message: "blog updated successfully",
            data : updatedBlog
        })
    }
}

export const deleteBlog = async (req,res) => {
    const {id} = req.params;
    if(!id) {
        res.status(400).json({
            message : "Is is not present"
        })
    } else {
        const deleteItem = await blog.findByIdAndDelete(id);
        if(!deleteItem){
            res.status(400).json({
                message : "internal server error"
            })
        } else {
            res.status(200).json({
                message : "blog deleted successfully",
                data : deleteItem
            })
        }
    }
}






















































// import mongoose from "mongoose";
// import Blog from "../models/blog.model.js";

// export const createBlog = async (req, res) => {
//   try {
//     const { title, caption, image } = req.body;

//     // Basic validation
//     if (!title || !image?.url || !image?.fileId) {
//       return res.status(400).json({
//         message: "Title and image (url + fileId) are required",
//       });
//     }

//     const blogCreated = await Blog.create({
//       title,
//       caption,
//       image: {
//         url: image.url,
//         fileId: image.fileId,
//       },
//     });

//     return res.status(201).json({
//       message: "Blog created successfully",
//       data: blogCreated,
//     });

//   } catch (error) {
//     return res.status(500).json({
//       message: error.message,
//     });
//   }
// };
