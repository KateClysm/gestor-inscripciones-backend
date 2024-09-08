import mongoose from 'mongoose';
import config from './config';

const connectDB = async () => {
    try {
        const db = await mongoose.connect(
            `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,
            {
                user: config.MONGO_USER,
                pass: config.MONGO_PASSWORD,
            }
        );
        console.log("se conecto a la base de datos");
        
        console.log('Database is connected to:', db.connection.name);
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1); 
    }
};

export default connectDB;