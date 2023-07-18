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
    } = req.body;
    if(!firstName || !lastName || !email || !password){
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
        country: 'Philippines', 
        state: 'NCR', 
        city: 'Metro Manila', 
        phoneNumber: '09123456789'
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
    throw new BadRequestError(`${error}`);
  }
};
const login = (req: Request, res: Response) => {
  res.send("login user");
};
const updateUser = (req: Request, res: Response) => {
  res.send("updateUser");
};

export { register, login, updateUser };
