import mongoose from 'mongoose';
import config from './config';

const connectDB = async () => {
    try {
        const db = await mongoose.connect(
            `mongodb://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}:27017/${config.MONGO_DATABASE}`
        );
        console.log('Database is connected to:', db.connection.name);
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1); 
    }
};

export default connectDB;