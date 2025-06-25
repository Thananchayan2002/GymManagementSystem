const mongoose = require('mongoose');
const express = require('express');
const connectDB = require('./config/dbConfig');
const cors = require('cors');
const uploadCloud = require('./routes/upload');

const PORT = process.env.PORT || 5000;
const app = express();

connectDB();

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

app.use(express.json()); 

app.get('/', (req, res) => {
    res.json({ message: "Gym Management API is running" });
});

app.use('/upload', uploadCloud)

app.listen(PORT, () => {
    console.log("Server is running on "+PORT)
})