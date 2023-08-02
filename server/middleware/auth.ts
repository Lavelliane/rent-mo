import { NextFunction, Request, Response } from "express";
import { UnAuthenticatedError } from "../errors/index.js";
import jwt from 'jsonwebtoken'

declare const process : {
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
        const err = new UnAuthenticatedError("Authentication Invalid")
        err.statusCode = 400
        next(err)
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET) as Payload;
        req.user = { userId: payload?.userId }
        next();
    } catch (error) {
        const err = new UnAuthenticatedError("Authentication Invalid");
        err.statusCode = 400
        next(err)
    }
}
export default authenticateUser