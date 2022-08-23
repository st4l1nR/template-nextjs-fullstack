import mongoose from 'mongoose';

export default async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('Database ready 🚀');
  } catch (error) {
    console.log(error.message);
  }
}
