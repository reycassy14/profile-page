import mongoose, { Document } from "mongoose";
import { STATUS } from "../src/services/constants"
import bcrypt from 'bcryptjs'

export interface IUser extends Document {
    username?: string,
    password: string,
    email?: string,
    displayNameValue(displayName: string): string,
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
            default: STATUS.ACTIVE
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
  if (!this.displayName) {
      this.displayName = this.username;
    }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.displayNameValue = async function (displayName:string): Promise<void> {
return displayName = this.username;
}

// Method to compare password for login
userSchema.methods.comparePassword = async function (userPassword: string): Promise<boolean> {
  return await bcrypt.compare(userPassword, this.password);
};

export default mongoose.model<IUser>('User', userSchema)
//export const profilePage = mongoose.model<IUser>('profilePage', userSchema)