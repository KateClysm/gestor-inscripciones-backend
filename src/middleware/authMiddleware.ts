import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import { JwtPayload } from '../types/jwt'; // Importa el tipo JwtPayload

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Obtener el token del encabezado

    if (token == null) return res.status(401).json({ message: 'No token provided' });

    jwt.verify(token, config.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Forbidden' });

        // Asegúrate de que `user` es del tipo `JwtPayload`
        req.user = user as JwtPayload; 
        next();
    });
};