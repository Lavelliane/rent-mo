import { Request, Response } from "express";
import User from "../models/User";
import { BadRequestError, UnAuthenticatedError } from "../errors";
import { StatusCodes } from "http-status-codes";
import attachCookies from "../utils/attachCookies";

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
    attachCookies({res, token})

    //---- return response
    res
      .status(StatusCodes.CREATED)
      .json({ 
        user: { 
          email: user.email,
          name: user.name,
          location: `${user.city}, ${user.state}, ${user.country}`
        },  
      });

  } catch (error) {
    throw new BadRequestError(`${error}`);
  }
};



/////////////////////////////////////////////////////////////////////////////////
const login = async (req: Request, res: Response) => {
  const { email, password } = req.body
  if(!email || !password){
    throw new BadRequestError("Please provide all values")
  }
    //find user and get password
    const user = await User.findOne({email}).select("+password")

    if(!user){
      throw new UnAuthenticatedError("Invalid credentials")
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
      throw new UnAuthenticatedError('Invalid Credentials');
    }
    const token = user.createJWT()
    user.password = ''
    attachCookies({res, token})

    res.status(StatusCodes.OK).json({user, location: `${user.city}, ${user.state}, ${user.country}`})

};





//////////////////////////////////////////////////////////////////////////////////////////
const updateUser = (req: Request, res: Response) => {
  res.send("updateUser");
};

export { register, login, updateUser };
