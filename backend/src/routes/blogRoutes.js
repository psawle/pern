import {Router} from "express";
import { createBlog, deleteBlog, getAllBlog, getBlogById, updateBlog } from "../controller/blogController.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const blogRouter = Router();

blogRouter.route("/").post(authMiddleware,createBlog).get(authMiddleware,getAllBlog);

blogRouter.route("/:id").delete(authMiddleware,deleteBlog).get(authMiddleware,getBlogById).put(authMiddleware,updateBlog);

export default blogRouter;