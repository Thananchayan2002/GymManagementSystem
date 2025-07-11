import mongoose from "mongoose";
import express from "express";
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import uploadCloud from './routes/upload.js';

dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());

app.use(
    cors({
        origin: ["http://localhost:5173",  , "https://res.cloudinary.com"],
        methods : ['POST', 'GET', 'PUT', 'DELETE'],
        allowedHeaders : [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        credentials : true
    }
));

connectDB();
mongoose.connection.on('connected', () => {
    console.log("MongoDB connected successfully");
});
app.get('/', (req, res) => {
    res.json({ message: "Gym Management API is running" });
});

app.use('/upload', uploadCloud)

app.listen(PORT, () => {
    console.log("Server is running on "+PORT)
})