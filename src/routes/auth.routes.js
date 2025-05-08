import { Router } from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  getCurrentUser,
} from "../controllers/auth.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.post("/logout", verifyJWT, logoutUser);
authRouter.get("/me", verifyJWT, getCurrentUser);

export default authRouter;
