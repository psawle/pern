import {Router }from "express";

import { registerUser, userLogin,userLogout } from "../controller/authController.js";

const authRoutes = Router();

authRoutes.route("/register").post(registerUser);
authRoutes.route("/login").post(userLogin)
authRoutes.route("/logout").post(userLogout)

export default authRoutes;