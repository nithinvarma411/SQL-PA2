const dotenv = require('dotenv');
const express = require('express');
const mysql2 = require('mysql2');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;


const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL database');
});


app.get('/', (req, res) => {
    try {
        return res.status(200).json({message: "Express server with MySQL connected successfully!"});
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
    
});


app.listen(PORT, () => {
    try {
        console.log(`Server is listening on http://localhost:${PORT}`)
    } catch (err) {
        console.error(err.message);
    }
    
});
