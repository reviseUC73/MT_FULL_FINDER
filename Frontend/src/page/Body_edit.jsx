import React from "react";
import { useState, useEffect } from "react";

import "../body.css";
import "./Form.css";

import Swal from "sweetalert2/src/sweetalert2.js";

// Service
import {
  AllInformation,
  DeleteInformation,
  EditInformation,
} from "../services/AccountApi";
import { ConvertDateTimeFormat, GetCurrentTime } from "../services/Time";

//mui
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

//icon
import Button from "@mui/material/Button";
import Status_icon from "./Status_icon";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// selectin bar
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchBar from "../component/SearchBar";

// az
import { useMsal } from "@azure/msal-react";

const Body_edit = () => {
  const { instance } = useMsal();

  let activeAccount = "error login";

  if (instance) {
    // bool or undefine
    activeAccount = instance.getActiveAccount();
    console.log(activeAccount);
  }

  //base input
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

  // change data selector dor get data
  const SelectChange = (event) => {
    console.log(input.AccountStatus);
    setInput({ ...input, AccountStatus: event.target.value });
    // console.log(input);
  };
  function SelectStatus() {
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Account Status </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={input.AccountStatus}
            label="Account Status"
            onChange={SelectChange}
          >
            <MenuItem value={1}>Active</MenuItem>
            <MenuItem value={0}> Inactive</MenuItem>i
          </Select>
        </FormControl>
      </Box>
    );
  }
  const [result, setResult] = useState([]);

  const [editMode, setEditMode] = useState(false);
  // function that use in use effect when user insite to this page

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
        console.log(account_id);
        try {
          const deleted = await DeleteInformation(account_id);
          if (deleted) {
            console.log("Delete_data done");
            Swal.fire({
              icon: "success",
              title: `Account ID : ${account_id} <br/>been deleted`,
              timer: 1500,
            }).then(() => window.location.reload());
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

  // change input textarea value
  const handleChange = async (e) => {
    const { target } = e; //  target = e.target is thing that changed state
    const { name } = target; // name = e.target.name
    const value = e.target.value;
    setInput({
      ...input, // another field that you is inputed(old)
      [name]: value,
    });
    // console.log(ConvertDateTimeFormat(time));
    console.log(input);
  };

  const Hide_popup = () => {
    let create_popup = document.getElementsByClassName(
      "container_form_popup_edit"
    )[0];
    create_popup.style.display = "none";
    setEditMode(false);
  };

  const Load_data = async (data) => {
    const Show_popup = () => {
      // setButtonDisabled(!isButtonDisabled);
      let create_popup = document.getElementsByClassName(
        "container_form_popup_edit"
      )[0];
      create_popup.style.display = "block";
      // setButtonDisabled(!isButtonDisabled);
      console.log("ShowPopup_ready_use_and_ready_creating_form");
    };
    // console.log(editMode);
    // e.preventDefault();
    if (!editMode) {
      Show_popup();
      setEditMode(true);
      setInput(data);
    }

    // console.log(input);
  };
  const Edit_data = async (e, account_id) => {
    e.preventDefault();

    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, edit it!",
      });

      // console.log(account_id);
      try {
        const editedData = {
          ...input,
          DateModify: ConvertDateTimeFormat(input.DateCreated),
          ModifiedBy: activeAccount.name,
          DateCreated: GetCurrentTime(),
          // CreatedBy: "ME",
        };
        const trimmedData = {
          AccountID: editedData.AccountID.trim(),
          CustomerCode: editedData.CustomerCode.trim(),
          CompanyName: editedData.CompanyName.trim(),
          CompanyAddress1: editedData.CompanyAddress1.trim(),
          CompanyAddress2: editedData.CompanyAddress2.trim(),
          ContactPerson: editedData.ContactPerson.trim(),
          Mobile: editedData.Mobile.trim(),
          Email: editedData.Email.trim(),
          TaxID: editedData.TaxID.trim(),
          BillingCharge: editedData.BillingCharge,
          AccountStatus: editedData.AccountStatus,
          DateModify: editedData.DateModify.trim(),
          ModifiedBy: editedData.ModifiedBy.trim(),
          DateCreated: editedData.DateCreated.trim(),
          CreatedBy: editedData.CreatedBy.trim(),
        };
        if (result.isConfirmed) {
          const edited = await EditInformation(account_id, trimmedData);
          setEditMode(false);

          if (edited) {
            console.log("Edit done successfully!");
            Swal.fire({
              icon: "success",
              title: `Account ID : ${account_id} <br/>has been Changed`,
              timer: 1500,
            }).then(() => window.location.reload());
          } else {
            console.log("Failed to edit information.");
            // Handle edit failure
          }
        }
      } catch (err) {
        console.log("Error, " + err.message);
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

  const theme = createTheme({
    palette: {
      del: {
        main: "#ef5350",
        contrastText: "#fff",
      },
      edit: {
        main: "#ed6c02",

        contrastText: "#fff",
      },
    },
  });

  return (
    <div>
      <div id="table_top">
        <div className="name_page"> Edit Data </div>
      </div>
      <SearchBar setResult={setResult} />

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
          {result.map((row, index) => (
            <tr key={index}>
              {/* {console.log(row)} */}
              <td>{row.AccountID}</td>
              <td>{row.CustomerCode}</td>
              <td>{row.CompanyName}</td>
              <td>{row.Email}</td>
              <td>{row.BillingCharge}</td>
              <td>
                <Status_icon account_status={Boolean(row.AccountStatus)} />
              </td>
              <td>
                <Stack direction="row" spacing={2}>
                  <ThemeProvider theme={theme}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<EditIcon />}
                      color="edit"
                      onClick={() => Load_data(row)}
                      disabled={editMode}
                    >
                      Edit
                    </Button>
                  </ThemeProvider>

                  <ThemeProvider theme={theme}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<DeleteIcon />}
                      color="del"
                      onClick={() => Delete_data(row.AccountID)}
                      disabled={editMode}
                    >
                      Delete
                    </Button>
                  </ThemeProvider>
                </Stack>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div class="container_form_popup_edit">
        <form onSubmit={(e) => Edit_data(e, input.AccountID)}>
          {/* <!-- row 2 --> */}
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
              <label>Contact Person</label>
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
                type="email"
                required
                name="Email"
                onChange={handleChange}
                value={input.Email}
              />
              <div class="underline"></div>

              <label for="">Email Address</label>
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
              <label>Mobile Number</label>
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

              <label>Tax ID</label>
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
              <label>Billing Charge %</label>
            </div>
          </div>

          {/* <!-- row 6  --> */}
          <div class="form-row">
            <div class="input-data">
              <SelectStatus />
            </div>
          </div>

          <Stack id="edit_buttom" spacing={2} direction="row">
            <Button variant="text" size="large" onClick={Hide_popup}>
              Close
            </Button>
            <Button size="large" type="submit" variant="contained">
              Save
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
};

export default Body_edit;
