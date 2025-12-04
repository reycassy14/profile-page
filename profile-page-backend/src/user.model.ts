import mongoose, { Document } from "mongoose";
import { STATUS } from "../src/services/constants"

export interface IUser extends Document {
    username: string,
    password: string,
    email?: string | null,
    displayName?: string | null,
    status: string;

}

export const schema = new mongoose.Schema(
    {
        username: {type: String , required: true},
        password: {type: String, required: true},
        email: {type: String, default: ''},
        displayName: {type: String, default: ''},
        status: {type: String, default: Object.values(STATUS.ACTIVE)}
    },
    {
        timestamps: true
    }
)

export const profilePage = mongoose.model<IUser>('profilePage', schema)