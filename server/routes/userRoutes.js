import express from 'express';
import { register,login, logout } from '../controllers/userController.js';

const router = express.Router();

// Register a new User
router.route("/register").post(register);

// Login User
router.route("/login").post(login);

// Logout User
router.route("/logout").get(logout);

export default router;