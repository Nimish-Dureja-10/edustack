import { catchAsynError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import User from "../models/User.js"
import { sendToken } from "../utils/sendToken.js";

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

export const login = catchAsynError(async (req,res,next)=> {

});