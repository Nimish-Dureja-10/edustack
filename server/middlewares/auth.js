import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import ErrorHandler from '../utils/errorHandler.js';
import { catchAsynError } from './catchAsyncError.js';

export const isAuthenticated = catchAsynError(async(req,res,next)=>{
    const {token} = req.cookies;

    if(!token) return next(new ErrorHandler("Need To Login In First",401));

    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    req.user = await User.findById(decoded._id);

    next();
})