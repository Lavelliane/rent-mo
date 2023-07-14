import { Request, Response } from "express"
import User from "../models/User"

const register = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body)
        return res.status(200).json(user)
    } catch (error) {
        res.status(500).json({msg: 'There was an error creating the user'})
    }
}
const login = (req: Request, res: Response) => {
    res.send('login user')
}
const updateUser = (req: Request, res: Response) => {
    res.send('updateUser')
}

export { register , login , updateUser }