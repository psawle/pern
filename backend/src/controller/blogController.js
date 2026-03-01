import mongoose from "mongoose";

import blog from "../models/blog.model.js";

export const createBlog = async (req,res) => {
    const blogDetails = {
        title : req.body?.title,
        image : req.body?.image,
        caption : req.body?.caption
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
