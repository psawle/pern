import {Router} from "express";
import { createBlog, deleteBlog, getAllBlog, getBlogById, updateBlog } from "../controller/blogController.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const blogRouter = Router();

blogRouter.route("/").post(createBlog).get(authMiddleware,getAllBlog);

blogRouter.route("/:id").delete(deleteBlog).get(getBlogById).put(updateBlog);

export default blogRouter;