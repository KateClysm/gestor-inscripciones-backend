import { RequestHandler } from 'express';

export const authorizeAdmin: RequestHandler = (req, res, next) => {
    if (req.user?.role === 'admin') {
        next(); 
    } else {
        return res.status(403).json({ message: 'Admin role required' });
    }
};