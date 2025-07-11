import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Thanu2002:<db_password>@cluster0.j1prris.mongodb.net/proorder?retryWrites=true&w=majority&appName=Cluster0');
    console.log('MongoDB connected.');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
  }
};

module.exports = connectDB;