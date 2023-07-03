import React from "react";
import "../body.css";
// import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import "./edit.css";
import Swal from "sweetalert2/src/sweetalert2.js";

import {
  AllInformation,
  DeleteInformation,
  EditInformation,
} from "../services/AccountApi";
import { useState, useEffect } from "react";
import { ConvertDateTimeFormat, GetCurrentTime } from "../services/Time";
const time = "2023-06-30T08:41:55.000Z";
const Body_edit = () => {
  const [input, setInput] = useState({
    AccountID: "",
    CustomerCode: "",
    CompanyName: "",
    CompanyAddress1: "",
    CompanyAddress2: "",
    ContactPerson: "",
    Mobile: "",
    Email: "",
    TaxID: "",
    BillingCharge: "",
    AccountStatus: "",
    DateModify: "",
    ModifiedBy: "ME",
    DateCreated: "",
    CreatedBy: "ME",
  });
  const [data, setData] = useState([]);
  // function that use in use effect when user insite to this page
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await AllInformation();
      setData(response);
    } catch (error) {
      console.error(error);
    }
  }
  // const Delete_data = async (account_id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire("Deleted!", "Your data has been deleted.", "success");
  //       console.log(account_id);
  //       try {
  //         const deleted = await DeleteInformation(account_id);
  //         if (deleted) {
  //           console.log("Delete_data done");
  //         } else {
  //           console.log("Delete_data false");
  //         }
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //   });
  // };
  const Delete_data = async (account_id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        Swal.fire(
          "Deleted!",
          `Account ID : ${account_id} <br/>has been deleted.`,
          "success"
        );
        console.log(account_id);
        try {
          const deleted = await DeleteInformation(account_id);
          if (deleted) {
            console.log("Delete_data done");
            const response = await AllInformation();
            setData(response);
          } else {
            console.log("Delete_data false");
          }
        } catch (err) {
          console.log(err);
          Swal.fire(
            "Error",
            "An error occurred while deleting the data.",
            "error"
          );
        }
      }
    } catch (err) {
      console.log(err);
      Swal.fire(
        "Error",
        "An error occurred while displaying the confirmation dialog.",
        "error"
      );
    }
  };

  const handleChange = async (e) => {
    const { target } = e; //  target = e.target is thing that changed state
    const { name } = target; // name = e.target.name
    const value = e.target.value;
    setInput({
      ...input, // another field that you is inputed(old)
      [name]: value,
    });
    console.log(ConvertDateTimeFormat(time));
    console.log(input);
  };
  const Load_data = async (data) => {
    setInput(data);
    console.log(input);
  };
  // const Edit_data = async (e, account_id) => {
  //   // e.preventDefault();
  //   // setInput(data);
  //   const edited = await EditInformation(account_id, input);
  //   console.log(input);
  //   if (edited) {
  //     console.log("edit done");
  //   }
  // };

  const Edit_data = async (e, account_id) => {
    // e.preventDefault();
    const editedData = {
      ...input,
      DateModify: ConvertDateTimeFormat(input.DateCreated),
      ModifiedBy: "ME",
      DateCreated: GetCurrentTime(),
      CreatedBy: "ME",
    };
    console.log(account_id);
    try {
      const edited = await EditInformation(account_id, editedData);

      if (edited) {
        console.log("Edit done successfully!");
        // Handle successful edit
      } else {
        console.log("Failed to edit information.");
        // Handle edit failure
      }
    } catch (err) {
      console.log("Error, " + err.message);
    }
  };

  return (
    <div>
      <table className="order-list">
        {/* Main colum */}
        <thead>
          <tr>
            <th>AccountID</th>
            <th>CostomerCode</th>
            <th>CompanyName</th>

            <th>Email</th>
            <th>Billing Charge (%)</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>

        {/* Information each row */}
        <tbody>
          {/* row account 3 <api> */}
          {data.map((row, index) => (
            <tr key={index}>
              {/* {console.log(row)} */}
              <td>{row.AccountID}</td>
              <td>{row.CustomerCode}</td>
              <td>{row.CompanyName}</td>
              <td>{row.Email}</td>
              <td>{row.BillingCharge}</td>
              <td>{row.AccountStatus}</td>
              <td>
                <button className="btn btn-edit" onClick={() => Load_data(row)}>
                  {/* <span className="mdi mdi-edit mdi-24px"></span> */}
                  {/* <span className="mdi mdi-edit mdi-24px"></span> */}
                  <span>Edit</span>
                </button>
                <button
                  className="btn btn-delete"
                  onClick={() => Delete_data(row.AccountID)}
                >
                  {/* <span className="mdi mdi-delete mdi-24px"></span> */}
                  {/* <span className="mdi mdi-delete-empty mdi-24px"></span> */}
                  <span>Delete</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={(e) => Edit_data(e, input.AccountID)}>
        {/* <!-- row 2 --> */}
        {console.log("Edit")}
        {/* {console.log({row.AccountID})} */}

        <div class="form-row">
          <div class="input-data">
            <input
              type="text"
              required
              name="CompanyName"
              onChange={handleChange}
              value={input.CompanyName}
            />
            <div class="underline"></div>
            <label for="">Company Name</label>
          </div>
          <div class="input-data">
            <input
              type="text"
              required
              name="ContactPerson"
              onChange={handleChange}
              value={input.ContactPerson}
            />

            <div class="underline"></div>
            <label for="">Contact Person</label>
          </div>
        </div>

        {/* <!-- row 3  --> */}
        <div class="form-row">
          <div class="input-data">
            <input
              type="text"
              required
              name="CompanyAddress1"
              onChange={handleChange}
              value={input.CompanyAddress1}
            />
            <div class="underline"></div>
            <label for="">Company Address 1</label>
          </div>
          <div class="input-data">
            <input
              type="text"
              required
              name="CompanyAddress2"
              onChange={handleChange}
              value={input.CompanyAddress2}
            />
            <div class="underline"></div>
            <label for="">Company Address 2</label>
          </div>
        </div>

        {/* <!-- row 4  --> */}
        <div class="form-row">
          <div class="input-data">
            <input
              type="text"
              required
              name="AccountStatus"
              onChange={handleChange}
              value={input.AccountStatus}
            />
            <div class="underline"></div>
            <label for="">Account Status</label>
          </div>
          <div class="input-data">
            <input
              type="tel"
              required
              name="Mobile"
              pattern="[0]{1}[0-9]{9}"
              onChange={handleChange}
              value={input.Mobile}
            />
            <div class="underline"></div>
            <label for="">Mobile Number</label>
          </div>
        </div>

        {/* <!-- row 5  --> */}
        <div class="form-row">
          <div class="input-data">
            <input
              type="text"
              name="TaxID"
              required
              onChange={handleChange}
              value={input.TaxID}
            />
            <div class="underline"></div>

            <label for="">Tax ID</label>
          </div>
          <div class="input-data">
            <input
              type="number"
              min="0"
              step="0.01"
              required
              name="BillingCharge"
              onChange={handleChange}
              value={input.BillingCharge}
            />
            <div class="underline"></div>
            <label for="">Billing Charge %</label>
          </div>
        </div>

        {/* <!-- row 6  --> */}
        <div class="form-row">
          <div class="input-data">
            <input
              type="email"
              required
              name="Email"
              onChange={handleChange}
              value={input.Email}
            />
            <div class="underline"></div>

            <label for="">Email Address</label>
          </div>
        </div>

        {/* <button size="large" type="submit">
          Cre
        </button> */}
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Body_edit;
