// impoort
const express = require("express");
const mysql = require("mysql");

// initialize
const app = express();
app.use(express.json()); // change json to javascript

// My sql connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mysql_metro",
  port: "8889",
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
app.listen(3001, () => console.log("Server is running on port 3001"));