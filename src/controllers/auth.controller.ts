import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User'; 
import config from '../config';

interface JwtPayload {
    id: string;
    role: 'admin' | 'mentor' | 'student';
}

// Controlador de inicio de sesión (login)
export const login: RequestHandler = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verificar si el usuario existe
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Verificar la contraseña (hash con bcrypt)
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generar el token JWT
        const token = jwt.sign(
            { id: user._id, role: user.role } as JwtPayload,
            config.JWT_SECRET,
            { expiresIn: '1h' } // Token expira en 1 hora
        );

        // Enviar el token como respuesta
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};