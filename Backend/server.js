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

// Read data from database
app.get("/read", (res) => {
  const sql_command = "SELECT * FROM Accounts;";
  try {
    {
      db.query(sql_command, (err, result) => {
        if (err) {
          console.log(err);
          return res.status(400).send();
        }
        return res.status(200).json(result);
      });
    }
  } catch {
    return res.status(500).send();
  }
});

// Search data from AccountID
app.get("/read/find_id/:AccountID", (req, res) => {
  find_id = req.params.AccountID;
  sql_command = "SELECT * FROM Accounts  WHERE AccountID = ?;";
  try {
    db.query(sql_command, [find_id], (err, result, fields) => {
      if (err) {
        console.log(err);
        return res.status(400).send();
      }
      return res.status(200).json(result);
      //  console.log(result[0].TaxID); => x.TaxID or taxID number
      // console.log(result[0] => if don't found item that you search you will get []
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

// Search data from CustomerCode
app.get("/read/find_code/:CustomerCode", (req, res) => {
  find_code = req.params.CustomerCode;
  sql_command = "SELECT * FROM Accounts  WHERE CustomerCode = ?;";
  try {
    db.query(sql_command, [find_id], (err, result, fields) => {
      if (err) {
        console.log(err);
        return res.status(400).send();
      }
      return res.status(200).json(result);
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

// Search data from CompanyName
app.get("/read/find_company/:CompanyName", (req, res) => {
  const find_company = req.params.CompanyName;
  const sql_command = "SELECT * FROM Accounts  WHERE CompanyName = ?;";
  try {
    db.query(sql_command, [find_company], (err, result, fields) => {
      if (err) {
        console.log(err);
        return res.status(400).send();
      }
      return res.status(200).json(result);
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

// Update data in the database
app.post("/edit/:AccountID", async (req, res) => {
  const account_id = req.params.AccountID;
  const {
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
      "UPDATE Accounts SET  CompanyName = ?, CompanyAddress1 = ?, CompanyAddress2 = ?, ContactPerson = ?, Mobile = ?, Email = ?, TaxID = ?, BillingCharge = ?, AccountStatus = ?, DateModify = ?, ModifiedBy = ?, DateCreated = ?, CreatedBy = ? WHERE AccountID = ?",
      [
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
        account_id,
      ],
      (err, result) => {
        if (err) {
          console.log("Error updating database", err);
          return res.status(400).send();
        }
        return res.status(200).json({
          message: "Updating database is successful",
          affectedRows: result.affectedRows,
        });
      }
    );
  } catch (err) {
    console.log("Error updating database", err);
    return res.status(500).send();
  }
});

// Delete data 
app.delete("/delete/:AccountID", (req, res) => {
  const accountID = req.params.AccountID;

  try {
    db.query(
      "DELETE FROM Accounts WHERE AccountID = ?",
      [accountID],
      (err, result) => {
        if (err) {
          console.log("Error deleting from database", err);
          return res.status(400).send();
        }
        return res.status(200).json({
          message: "Deleting from database is successful",
          affectedRows: result.affectedRows,
        });
      }
    );
  } catch (err) {
    console.log("Error deleting from database", err);
    return res.status(500).send();
  }
});

// Listen server
app.listen(3001, () => console.log("Server is running on port 3001"));
