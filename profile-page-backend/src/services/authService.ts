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

  // Register new user
  async register(
    email: string,
    password: string,
    username: string
  ): Promise<{ user: Partial<IUser>; token: string }> {

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Create new user (password automatically hashed by pre-save hook)
    const user = await User.create({
      email,
      password,
      username
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
    username: string, 
    password: string
  ): Promise<{ user: Partial<IUser>; token: string }> {
    
    // Find user by email (include password field)
    const user = await User.findOne({ username }).select('+password');
    
    if (!user) {
      throw new Error('Invalid email or password');
    }

    // Verify password
    const isPasswordValid = await user.comparePassword(password);
    
    if (!isPasswordValid) {
      throw new Error('Invalid email or password');
    }

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