import express from 'express';
import { addLectures, createCourse, getAllCourses, getCourseLectures } from '../controllers/courseController.js';
import singleUpload from '../middlewares/multer.js';

const router = express.Router();

router.route("/courses").get(getAllCourses);

router.route("/createcourse").post(singleUpload,createCourse);

router.route("/course/:id").get(getCourseLectures).post(singleUpload,addLectures);



export default router;