import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JWTPayload {
    userId: string,
    iat: number,
    exp: number
}

declare global {
    namespace Express {
        interface Request {
            userId?: string;
        }
    }
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    // 1. Extract token from Authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // "Bearer TOKEN"

    // 2. Check if token exists
    if (!token) {
      res.status(401).json({ 
        success: false,
        message: 'Access token is required' 
      });
      return;
    }

    // 3. Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JWTPayload;

    // 4. Attach userId to request object
    req.userId = decoded.userId;

    // 5. Continue to next middleware/route handler
    next();

  } catch (error: any) {
    // Token invalid, expired, or wrong secret
    if (error.name === 'TokenExpiredError') {
      res.status(401).json({ 
        success: false,
        message: 'Token has expired' 
      });
      return;
    }

    res.status(403).json({ 
      success: false,
      message: 'Invalid token' 
    });
  }
};