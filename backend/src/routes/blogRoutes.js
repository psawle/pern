import {Router} from "express";
import { createBlog, deleteBlog, getAllBlog } from "../controller/blogController.js";

const blogRouter = Router();

blogRouter.route("/").post(createBlog).get(getAllBlog);

blogRouter.route("/:id").delete(deleteBlog);

export default blogRouter;