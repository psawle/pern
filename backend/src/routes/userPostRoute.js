import {Router} from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { createPost, deletePost, getAllPost, getpost, updatePost } from "../controller/postController.js";
import multer from "multer";

const userPostRouter = Router();
const upload = multer({storage: multer.memoryStorage()});

userPostRouter.route("/").post(authMiddleware,upload.single("image"),createPost).get(authMiddleware,getAllPost);

userPostRouter.route("/:id").put(authMiddleware,updatePost).get(authMiddleware,getpost).delete(authMiddleware,deletePost)

export default userPostRouter;