import bcrypt from "bcryptjs";
import User from "../models/user.models.js";
import { errorHandler } from '../utils/error.js';
import { Listing } from "../models/listing.model.js";

export const test = (req,res) => {
  res.json ({
    message : 'Api route is working',
  });
};

export const  updateUser = async (req, res , next) => {
  if(req.user.id !== req.params.id) return next (errorHandler( 401 , "You can only update you own account!"))
    try{
  if(req.body.password){
    req.body.password= bcrypt.hashSync(req.body.password, 10 )
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id , {
    $set:{
      username:req.body.username, 
      password : req.body.password,
      avatar:req.body.avatar,
    }
  }, {new:true})

  const{password, ...rest} = updatedUser._doc
  
  res.status(200).json(rest) 
  } catch (error) {
    next(error)
  }
} ;


export const deleteUser = async (req,res,next) => {
  if(req.user.id != req.params.id) return next(errorHandler(401,'you can only delete your own account'))
    try{
  await User.findByIdAndDelete(req.params.id);
  res.status(200).json('user has been deleted!').clearCookie('access_token');
  }
  catch(error){
    next(error)
  }
};

export const getUserListings = async (req, res, next) => {

  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, 'you can only view your own listings!!'));
  }

  try {
    const listings = await Listing.find({ userRef: req.params.id });
    res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};