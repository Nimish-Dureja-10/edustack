import express from 'express';
import { register,login, logout, getMyProfile, changePassword, updateProfile, updateProfilePicture, addToPlaylist, removeFromPlaylist } from '../controllers/userController.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

// Register a new User
router.route("/register").post(register);

// Login User
router.route("/login").post(login);

// Logout User
router.route("/logout").get(logout);

// Get My Route
router.route("/me").get(isAuthenticated,getMyProfile);

// Change Password
router.route("/changepassword").put(isAuthenticated,changePassword);

// Update Profile
router.route("/updateprofile").put(isAuthenticated,updateProfile);

// Update Profile Picture
router.route("/updateprofile").put(isAuthenticated,updateProfilePicture);

// Add To Playlist
router.route("/addtoplaylist").post(isAuthenticated,addToPlaylist);

// Remove From Playlist
router.route("/removefromplaylist").delete(isAuthenticated,removeFromPlaylist);

export default router;