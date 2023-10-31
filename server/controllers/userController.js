import { catchAsynError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import User from "../models/User.js"
import { sendToken } from "../utils/sendToken.js";
import {sendMail} from "../utils/sendEmail.js";
import { Course } from "../models/Course.js";

export const register = catchAsynError(async (req,res,next)=>{
    const {name,email,password} = req.body;
    // const file = req.file
    if(!name || !email || !password) return next(new ErrorHandler("Please Enter All Fields",400));
    let user = await User.findOne({email})
    if(user) return next(new ErrorHandler("User Already Registered",409));
    //upload file on cloudinary
    user = await User.create({
        name,
        email,
        password,
        avatar : {
            public_id : "tempId",
            url : "tempurl"
        }
    });
    sendToken(res,user,"Register Successfully",201)
});

export const login = catchAsynError(async (req,res,next)=>{
    const {email,password} = req.body;
    // const file = req.file
    if(!email || !password) return next(new ErrorHandler("Please Enter All Fields",400));
    const user = await User.findOne({email}).select("+password");
    if(!user) return next(new ErrorHandler("Incorrect Email or Password",401));
    //upload file on cloudinary
    const isMatch = await user.comparePassword(password);
    if(!isMatch) return next(new ErrorHandler("Incorrect Email or Password",401));
    sendToken(res,user,`Welcome back, ${user.name}`,200)
});

export const logout = catchAsynError(async (req,res,next)=>{
    res.status(200).cookie("token",null,{
        expires : new Date(Date.now()),
        httpOnly : true,
        // secure:true,
        sameSite : "none"
    }).json({
        success:true,
        message: "Logged Out Successfully"
    });
});

export const getMyProfile = catchAsynError(async (req,res,next)=>{
    const user = await User.findById(req.user._id);
    res.status(200).json({
        success:true,
        user
    });
});

export const changePassword = catchAsynError(async (req,res,next)=>{
    const {oldPassword,newPassword} = req.body;
    if(!oldPassword || !newPassword) return next(new ErrorHandler("Please Enter All Fields",400));
    const user = await User.findById(req.user._id).select("+password");
    const isMatch = await user.comparePassword(oldPassword);
    if(!isMatch) return next(new ErrorHandler("Incorrect old password",400));
    user.password = newPassword;
    await user.save();
    res.status(200).json({
        success:true,
        message: "Password Changed Successfully"
    });
});

export const updateProfile = catchAsynError(async (req,res,next)=>{
    const {name,email} = req.body;
    const user = await User.findById(req.user._id);
    if(name) user.name = name;
    if(email) user.email = email;
    await user.save();
    res.status(200).json({
        success:true,
        message: "Profile Updated Successfully"
    });
});

export const updateProfilePicture = catchAsynError(async (req,res,next)=>{
    res.status(200).json({
        success:true,
        message: "Profile Picture Updated Successfully"
    });
});


export const addToPlaylist = catchAsynError(async (req,res,next)=>{
    const user = await User.findById(req.user._id);
    const course = await Course.findById(req.body.id);
    if(!course) return next(new ErrorHandler("Invalid Course Id",404));
    const itemExists = user.playlist.find((item)=>{
        if(item.course.toString()===course._id.toString())
        return true;
    });
    if(itemExists) return next(new ErrorHandler("Item Already Exists",409));
    user.playlist.push({
        course : course._id,
        poster : course.poster.url
    });
    await user.save();
    res.status(200).json({
        success:true,
        message: "Added To Playlist"
    });
});

export const removeFromPlaylist = catchAsynError(async (req,res,next)=>{
    const user = await User.findById(req.user._id);
    const course = await Course.findById(req.query.id);
    if(!course) return next(new ErrorHandler("Invalid Course Id",404));
    const newPlaylist = user.playlist.filter((item)=>{
        if(item.course.toString()!==course._id.toString()) return item;
    });
    user.playlist = newPlaylist;
    await user.save();
    res.status(200).json({
        success:true,
        message: "Removed From Playlist"
    });
});

// export const forgetPassword = catchAsynError(async (req,res,next)=>{
//     const {email} = req.body;
//     const user = await User.findOne({email});
//     if(!user) return next(new ErrorHandler("No User with this email",400));
//     const resetToken = await user.getResetToken();
//     const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;
//     const message = `Click on the link to reset your password ${url}. If you have not requested please ignore`
//     sendMail(user.email,"Edustack Reset Password",message)
//     res.status(200).json({
//         success:true,
//         message: `Reset Token has been sent to ${user.email}`
//     });
// });

// export const resetPassword = catchAsynError(async (req,res,next)=>{
//     res.status(200).json({
//         success:true,
//         message: "Profile Picture Updated Successfully"
//     });
// });

