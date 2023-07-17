import { Request, Response } from "express";
import User from "../models/User";
import { BadRequestError } from "../errors";
import { StatusCodes } from "http-status-codes";

const register = async (req: Request, res: Response) => {
  try {
    const { 
        firstName,
        lastName, 
        email, 
        password,
        country, 
        state, 
        city, 
        phoneNumber 
    } = req.body;
    if(!firstName || !lastName || !email || !password || !country || !state || !city  || !phoneNumber){
        throw new BadRequestError("Please provide all values")
    }
    const userAlreadyExists = await User.findOne({email})
    
    if(userAlreadyExists){
        throw new BadRequestError("User already exists")
    }
    const user = await User.create({ 
        firstName,
        lastName, 
        email, 
        password,
        country, 
        state, 
        city, 
        phoneNumber 
    })
    const token = user.createJWT()
    res
    .status(StatusCodes.CREATED)
    .json({ 
      user: { 
        email: user.email,
        name: user.name,
        location: `${user.city}, ${user.state}, ${user.country}`
      }, 
      token, 
    });

  } catch (error) {
    throw new BadRequestError("Invalid credentials. Please try again");
  }
};
const login = (req: Request, res: Response) => {
  res.send("login user");
};
const updateUser = (req: Request, res: Response) => {
  res.send("updateUser");
};

export { register, login, updateUser };
