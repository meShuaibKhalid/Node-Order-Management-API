import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const dataBaseConfig = () => {
    
    const URI: string = process.env.MONGO_URI || '';
    mongoose.connect(URI).then(() => {
        console.log("Connected to database");
    }).catch((error) => {
        console.log("Error: ", error);
    });
}

export default dataBaseConfig;

