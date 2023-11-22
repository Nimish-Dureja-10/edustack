import { catchAsynError } from "../middlewares/catchAsyncError.js";
import {Course} from  "../models/Course.js";
import getDataUri from "../utils/dataUri.js";
import ErrorHandler from "../utils/errorHandler.js";
import cloudinary from "cloudinary";

export const getAllCourses = catchAsynError(async (req,res,next) => {
    const courses = await Course.find().select("-lectures");
    res.status(200).json({
        success:true,
        courses,
    });
});

export const createCourse = catchAsynError(async (req,res,next)=> {
    const {title,description,category,createdBy} = req.body;
    if(!title || !description || !category || !createdBy) return next(new ErrorHandler("Please Enter All The Fields",400))
    const file = req.file;
    const fileUri = getDataUri(file);
    const mycloud = await cloudinary.v2.uploader.upload(fileUri.content)
    await Course.create({
        title,
        description,
        category,
        createdBy,
        poster :{
            public_id : mycloud.public_id,
            url : mycloud.secure_url
        }
    })
    res.status(201).json({
        success:true,
        message: "Course Created Successfully, You can add lectures now",
    });
});

export const getCourseLectures = catchAsynError(async (req,res,next) => {
    const course = await Course.findById(req.params.id);
    if(!course) return next(new ErrorHandler("Course Not found",404));
    course.views+=1;
    await course.save();
    res.status(200).json({
        success:true,
        lectures:course.lectures,
    });
});

export const addLectures = catchAsynError(async (req,res,next) => {
    const {id} = req.params
    const {title,description} = req.body;
    const file = req.file;
    
    const course = await Course.findById(id);
    if(!course) return next(new ErrorHandler("Course Not found",404));
    course.lectures.push({
        title,description,
        video : {
            public_url : "url",
            url : "url"
        }
    })
    course.numOfVideos = course.lectures.length;
    await course.save();
    res.status(200).json({
        success:true,
        message : "Lectures added in course",
    });
});