// impoort
const express = require("express");
const mysql = require("mysql");
require("dotenv").config(); // Load environment variables from .env file

// initialize
const app = express();
app.use(express.json()); // change json to javascript

// My sql connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
  });
// Connecting to database
db.connect((err) => {
  if (err) {
    console.log("Connecting error to my sql database", err);
    return;
  }
  console.log("Connecting successfull");
});


// Listen server
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
  });