// dbConnect.ts

import dotenv from 'dotenv';

dotenv.config();

const dbConnect = async (): Promise<void> => {
  try {
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
};

export default dbConnect;
