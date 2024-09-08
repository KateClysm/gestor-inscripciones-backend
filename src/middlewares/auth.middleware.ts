import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

export const isAdmin: RequestHandler = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, config.JWT_SECRET);
        const { role } = decoded as { role: string };

        if (role !== 'admin') {
            return res.status(403).json({ message: 'Require admin role' });
        }

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
};