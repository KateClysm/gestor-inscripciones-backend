import mongoose from 'mongoose';
import config from './config';

(async () => {
    try {
        const db = await mongoose.connect(
            `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`
        );
        console.log('Database is connected to:', db.connection.name);
    } catch (error) {
        console.error('Database connection error:', error);
    }
})();