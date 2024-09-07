import 'express';
import { JwtPayload } from './jwt'; // Importa el tipo JwtPayload

declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload; // Usa el tipo JwtPayload
        }
    }
}