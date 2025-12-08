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
                res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
                    success: StatusCodes.UNPROCESSABLE_ENTITY,
                    message:'Email, Password, Username Are Required!'
                })
                return
            }

            if(password.length < 8){
                res.status(StatusCodes.BAD_REQUEST).json({
                    success: StatusCodes.BAD_REQUEST,
                    message: 'password should have atleast 8 characters!'
                })
                return
            }

            const result = await authService.register(email, username, password)
            res.status(StatusCodes.CREATED).json({
                    success: StatusCodes.CREATED,
                    message: 'Successfully Registered',
                    data: result
                })
        } catch (error: any) {
            res.status(StatusCodes.BAD_REQUEST).json({
                success: StatusCodes.BAD_REQUEST,
                message: error.message
            })
        }
    }

    async login(req:Request, res:Response): Promise<void>{
        const {username, password} = req.body as IUser
        try {
            if(!username || !password){
                 res.status(StatusCodes.BAD_REQUEST).json({
                    success: StatusCodes.BAD_REQUEST,
                    message:'Password, Username Are Required!'
                })
                return
            }
            const result = await authService.login(username ,password)
            res.status(StatusCodes.OK).json({
                    success: StatusCodes.OK,
                    message: 'Successfully Login',
                    data: result
                })
        } catch (error: any) {
            res.status(StatusCodes.BAD_REQUEST).json({
                success: StatusCodes.BAD_REQUEST,
                message: error.message
            })
        }
    }

    async getUserProfile(req:Request, res: Response): Promise<void>{
        try {
            const userId = req.userId as string

            const user = await authService.getProfile(userId);

            res.status(StatusCodes.OK).json({
                    success: StatusCodes.OK,
                    message: 'Success',
                    data: { user }
                })
        } catch (error: any) {
            res.status(StatusCodes.BAD_REQUEST).json({
                success: StatusCodes.BAD_REQUEST,
                message: error.message
            })
        }
    }
}
export default new AuthController();