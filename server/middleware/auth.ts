import { NextFunction, Request, Response } from "express";
import { UnAuthenticatedError } from "../errors/index.js";
import jwt from 'jsonwebtoken'

declare var process : {
    env: {
      JWT_SECRET: string,
    }
}
interface Payload {
    userId: string; // Replace 'string' with the actual type of your userId
}

const authenticateUser = async (req: Request, res: Response<any>, next: NextFunction) => {
    
    const token = req.cookies.token
    
    if(!token){
        throw new UnAuthenticatedError("Authentication Invalid")
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET) as Payload;
        req.user = { userId: payload?.userId }
        next();
    } catch (error) {
        throw new UnAuthenticatedError("Authentication Invalid");
    }
}
export default authenticateUser