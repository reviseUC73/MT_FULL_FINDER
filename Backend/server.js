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



// Create Routes
app.post("/create", async (req, res) => {
    const {
      AccountID,
      CustomerCode,
      CompanyName,
      CompanyAddress1,
      CompanyAddress2,
      ContactPerson,
      Mobile,
      Email,
      TaxID,
      BillingCharge,
      AccountStatus,
      DateModify,
      ModifiedBy,
      DateCreated,
      CreatedBy,
    } = req.body;
    try {
      db.query(
        "INSERT INTO Accounts (AccountID, CustomerCode, CompanyName, CompanyAddress1, CompanyAddress2, ContactPerson, Mobile, Email, TaxID, BillingCharge, AccountStatus, DateModify, ModifiedBy, DateCreated, CreatedBy) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,? )",
        [
          AccountID,
          CustomerCode,
          CompanyName,
          CompanyAddress1,
          CompanyAddress2,
          ContactPerson,
          Mobile,
          Email,
          TaxID,
          BillingCharge,
          AccountStatus,
          DateModify,
          ModifiedBy,
          DateCreated,
          CreatedBy,
        ],
        (err, result, fields) => {
          if (err) {
            console.log("Error inserting into database", err);
            return res.status(400).send();
          }
          return res
            .status(201)
            .json({ message: "Inserting into database is successful" });
        }
      );
    } catch (err) {
      console.log("Error inserting into database", err);
      return res.status(500).send();
    }
  });
  