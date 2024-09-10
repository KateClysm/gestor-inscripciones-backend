import express from 'express';
import config from './config';
import morgan from 'morgan';
import cors from 'cors';
import projectRoutes from './routes/projectRoutes';
import userRoutes from './routes/userRoutes'
import entityRoutes from './routes/entityRoutes';
import authRoutes from './routes/auth.routes';
// import User from './models/User';
// import bcrypt from 'bcryptjs';
import connectDB from './database';

connectDB();  // Conectar a la base de datos antes de que arranque el servidor
const app = express();

app.set('port', config.PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/projects', projectRoutes);
app.use('/api/entities', entityRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Función temporal para hashear la contraseña del administrador
// const hashAdminPassword = async () => {
//     try {
//         const admin = await User.findOne({ email: 'admin@example.com' }); 

//         if (!admin) {
//             console.log('Admin not found');
//             return;
//         }

//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash('example', salt); 

//         admin.password = hashedPassword;
//         await admin.save();

//         console.log('Admin password has been updated');
//     } catch (err) {
//         console.error('Error updating admin password', err);
//     }
// };

// Llama a la función para que se ejecute cuando inicies la app
// hashAdminPassword();

export default app;