import {Request, Response } from 'express'
import authService from '../services/authService'
import { IUser } from '../user.model'
import { StatusCodes } from 'http-status-codes'


class AuthController {
    async register(req: Request, res: Response): Promise<void>{
        const { email, password, username } = req.body as IUser

        //const userEmail = await IUser.findOne({ email })

        try {
            if(!email || !password || !username){
                res.status(StatusCodes.BAD_REQUEST).json({
                    success: StatusCodes.BAD_REQUEST,
                    message:'Email, Password, Username Are Required!'
                })
            }
        } catch (error) {
            
        }
    }
}