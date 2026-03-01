import { Router } from "express";
import {
  createUser,
  deleteUserById,
  getUser,
  getUserById,
  updateUserById,
} from "../controller/userController.js";

const userRouter = Router();

userRouter.route("/").post(createUser).get(getUser);
userRouter
  .route("/:id")
  .get(getUserById)
  .delete(deleteUserById)
  .put(updateUserById);
// userRouter.route("/:id").delete(deleteUserById)
// userRouter.route("/:id").put(updateUserById)

export default userRouter;