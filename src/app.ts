import express from 'express';
import config from './config';
import morgan from 'morgan';
import cors from 'cors';
import projectRoutes from './routes/projectRoutes';
import userRoutes from './routes/userRoutes';

const app = express();  //app es la ejecución de la función express(), por lo tanto app es en sí la aplicación del backend.

app.set('port', config.PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);
// app.use('/api/entities', entityRoutes);

export default app;