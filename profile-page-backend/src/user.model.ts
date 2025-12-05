import mongoose, { Document } from "mongoose";
import { STATUS } from "../src/services/constants"
import bcrypt from 'bcryptjs'

export interface IUser extends Document {
    username: string,
    password: string,
    email: string | null,
    displayName?: string | null,
    status: string;
    comparePassword(userPassword: string): Promise<boolean>,
    createdAt: Date,
    UpdatedAt: Date,

}

export const userSchema = new mongoose.Schema(
    {
       
        username: {
            type: String, 
            required: true, 
            unique: true,
            trim: true
        },
        password: { 
            type: String, 
            required: true,
            minLength: [8, 'Password must have atleast 8 characters'],
            select: false
        },
        email: {
            type: String, 
            unique: true,
            required: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
        },
        displayName: {
            type: String, 
            default: ''
        },
        status: {
            type: String, 
            default: Object.values(STATUS.ACTIVE)
        }
    },
    {
        timestamps: true
    }
);

// Pre-save hook: Hash password before saving
userSchema.pre('save', async function () {
  // Only hash if password is new or modified
  if (!this.isModified('password')) {
    return;
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Method to compare password for login
userSchema.methods.comparePassword = async function (userPassword: string): Promise<boolean> {
  return await bcrypt.compare(userPassword, this.password);
};

export default mongoose.model<IUser>('User', userSchema)
//export const profilePage = mongoose.model<IUser>('profilePage', userSchema)