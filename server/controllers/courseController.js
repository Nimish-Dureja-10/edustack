import { catchAsynError } from "../middlewares/catchAsyncError.js";
import {Course} from  "../models/Course.js";

export const getAllCourses = catchAsynError(async (req,res,next) => {
    const courses = await Course.find();
    res.status(200).json({
        success:true,
        courses,
    });
});