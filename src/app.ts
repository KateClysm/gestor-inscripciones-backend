import express from 'express';
import config from './config';
import morgan from 'morgan';
import cors from 'cors';
import exampleRoutes from './routes/example.routes';

const app = express();  //app es la ejecución de la función express(), por lo tanto app es en sí la aplicación del backend.

app.set('port', config.PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(exampleRoutes);

export default app;