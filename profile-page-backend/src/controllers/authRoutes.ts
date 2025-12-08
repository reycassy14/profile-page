import authController from "./authController";
import { authenticateToken } from "../middleware/auth";
import { Router } from "express";

const authRouter = Router()

// Public routes (no authentication required)
authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);


// Protected route (authentication required)
authRouter.get('/profile', authenticateToken, authController.getUserProfile);

export default authRouter;