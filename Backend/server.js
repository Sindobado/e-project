// Import important modules
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Create MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT 
});

// Attempt to connect and log success/error
db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL: ", err);
        return;
    }
    console.log("Connected to MySQL database");
});

// API route sample
// This route queries the database and returns all rows from the table
app.get('/api/data', (req, res) => {  // Fixed route and parameter name
    db.query('SELECT * FROM Users', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });  // Fixed syntax errors
            return;
        }
        res.json(results);
    });
});

// Set port for server (.env)
const PORT = process.env.PORT || 3000; // Default to 3000 if not defined

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);  // Fixed interpolation
});