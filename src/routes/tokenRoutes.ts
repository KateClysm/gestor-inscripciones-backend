import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config'; 

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    const payload = {
        userId: 1, 
        role: 'alumno',
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'password123',  
        avatar: 'https://example.com/avatar.jpg',
        phone: '1234567890',
        country: 'USA',
        city: 'New York',
    };

    const token = jwt.sign(payload, config.JWT_SECRET, { expiresIn: '1h' });

    console.log('Generated Token:', token);

    res.json({ token });
});

export default router;
