import {Router} from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { createPost, getAllPost } from "../controller/postController.js";
import multer from "multer";

const userPostRouter = Router();
const upload = multer({storage: multer.memoryStorage()});

userPostRouter.route("/").post(authMiddleware,upload.single("image"),createPost).get(authMiddleware,getAllPost);

export default userPostRouter;