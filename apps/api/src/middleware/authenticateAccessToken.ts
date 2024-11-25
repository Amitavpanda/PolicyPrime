import { Request, Response, NextFunction } from 'express';
import { generateAccessToken, verifyAccessToken, verifyRefreshToken } from '../utils/index.js';

export function authenticateAccessToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access token missing or invalid' });
    }

    const token : any = authHeader.split(' ')[1];

    try {
        // Try to verify access token
        const user = verifyAccessToken(token);
        (req as any).user = user; // Attach user info to request object
        return next(); // Proceed to protected route
    } catch (err : any) {
        // If the access token is expired, attempt to refresh it
        if (err.name === 'TokenExpiredError') {
            const refreshToken = req.cookies?.refreshToken;
            if (!refreshToken) {
                return res.status(401).json({ message: 'Refresh token missing' });
            }

            try {
                // Validate the refresh token
                const refreshPayload = verifyRefreshToken(refreshToken);

                // Generate new access token
                const accessToken = generateAccessToken({ userId: (refreshPayload as any).userId });

                // Send the new access token to the client
                return res.json({ accessToken });
            } catch (refreshError) {
                return res.status(403).json({ message: 'Invalid or expired refresh token' });
            }
        }

        // Handle any other errors (e.g., invalid token)
        return res.status(403).json({ message: 'Invalid or expired access token' });
    }
}
