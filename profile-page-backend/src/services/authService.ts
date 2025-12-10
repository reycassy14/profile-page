import jwt from 'jsonwebtoken';
import User, { IUser } from '../user.model';

class AuthService {
  
  // Generate JWT token
  private generateToken(userId: string): string {
    return jwt.sign(
      { userId }, // Payload (minimal data)
      process.env.JWT_SECRET as string, // Secret key
      { expiresIn: '7d' } // Token expires in 7 days
    );
  }

  async getAllUsers(){
    
    return await User.find().sort({createdAt: -1}).lean()
  }

  // Register new user
  async register(
    email: string,
    username: string,
    password: string
  ): Promise<{ user: Partial<IUser>; token: string }> {

    // Check if user already exists
    const existingUser = await User.findOne({ email, username });
    if (existingUser) {
      throw new Error('User with this email or username already exists');
    }

    // Create new user (password automatically hashed by pre-save hook)
    const user = await User.create({
      email,
      username,
      password
    });

    // Generate token
    const token = this.generateToken(user._id.toString());

    // Return user data (without password) and token
    return {
      user: {
        _id: user._id,
        email: user.email,
        username: user.username,
        createdAt: user.createdAt
      },
      token
    };
  }

  // Login existing user
  async login(
    email: string | undefined,
    username: string | undefined, 
    password: string
  ): Promise<{ user: Partial<IUser>; token: string }> {

    const field = username ? "username" : "email"
    const value = username ?? email

    const user = await User.findOne({ [field]:value }).select('+password');
    
    if (!user) {
        console.log('User Data: ', user, value)
      throw new Error(`Invalid User`);
      
    }
    if (user) {
        console.log('User Data: ', user, value)
    }

    // Verify password
    const isPasswordValid = await user.comparePassword(password);
    
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    // Generate token
    const token = this.generateToken(user._id.toString());

    return {
      user: {
        _id: user._id,
        email: user.email,
        username: user.username,
        createdAt: user.createdAt
      },
      token
    };
  }

  // Get user profile by ID
  async getProfile(userId: string): Promise<Partial<IUser>> {
    const user = await User.findById(userId);
    
    if (!user) {
      throw new Error('User not found');
    }

    return {
      _id: user._id,
      email: user.email,
      username: user.username,
      createdAt: user.createdAt
    };
  }
}

export default new AuthService();