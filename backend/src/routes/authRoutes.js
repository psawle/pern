import {Router }from "express";
import User from "../models/userSchema.js";
import { createUser } from "../controller/authController.js";

const authRoutes = Router();

authRoutes.route("/").post(createUser);

export default authRoutes;