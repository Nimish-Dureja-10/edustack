import express from 'express';
import { register,login } from '../controllers/userController.js';

const router = express.Router();

// Register a new User
router.route("/register").post(register);

// Login User
router.route("/login").post(login);

export default router;