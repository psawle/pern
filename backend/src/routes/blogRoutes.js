import {Router} from "express";
import { createBlog } from "../controller/blogController.js";

const blogRouter = Router();

blogRouter.route("/").post(createBlog);

export default blogRouter;