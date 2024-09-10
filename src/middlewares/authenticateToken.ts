import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

interface JwtPayload {
    id: string;
    role: 'admin' | 'mentor' | 'student';
}

export const authenticateToken: RequestHandler = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, config.JWT_SECRET) as JwtPayload;
        req.user = decoded; 
        next(); 
    } catch (err) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};