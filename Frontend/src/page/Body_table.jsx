import React from "react";
import "../body.css";
import "../component/sel.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import {
  AllInformation,
  CheckDuplicateData,
  CreateInformation,
} from "../services/AccountApi";
import { useState, useEffect } from "react";
import { ConvertDateTimeFormat, GetCurrentTime } from "../services/Time";
import Swal from "sweetalert2";
import Status_icon from "./Status_icon";

// import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchBar from "../component/SearchBar";
import { useMsal } from "@azure/msal-react";
// import TableDataFirst from "../component/TableData_first";

// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";

// import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FilterStaus from "../component/FilterStaus";

// input data that use in bady table to sent input to api ex. create data edit data
// data that show in table view
const Table_data = () => {
  const { instance } = useMsal();

  let activeAccount = "error login";

  if (instance) {
    // bool or undefine
    activeAccount = instance.getActiveAccount();
    // console.log(activeAccount);
  }
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
    AccountStatus: 1,
    DateModify: GetCurrentTime(),
    ModifiedBy: activeAccount ? activeAccount.name : "unknown",
    DateCreated: GetCurrentTime(),
    CreatedBy: activeAccount ? activeAccount.name : "unknown",
  });
  const SelectChange = (event) => {
    setInput({ ...input, AccountStatus: event.target.value });
    console.log(input);
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

  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [isDuplicate, setDuplicate] = useState(false);
  const [StatusShow, setStatusShow] = React.useState("both");

  const Clear_popup = () => {
    let create_popup = document.getElementsByClassName(
      "container_form_popup_create"
    )[0];
    create_popup.style.display = "none";
    setButtonDisabled(!isButtonDisabled);
    setDuplicate(false);
    window.location.reload();
  };
  const Hide_popup = () => {
    let create_popup = document.getElementsByClassName(
      "container_form_popup_create"
    )[0];
    create_popup.style.display = "none";
    setButtonDisabled(!isButtonDisabled);
    setDuplicate(false);
  };
  const Show_popup = () => {
    // setButtonDisabled(!isButtonDisabled);
    let create_popup = document.getElementsByClassName(
      "container_form_popup_create"
    )[0];
    create_popup.style.display = "block";
    setButtonDisabled(!isButtonDisabled);
    console.log("ShowPopup_ready_use_and_ready_creating_form");
  };
  // target state that changed from user
  const handleChange = async (e) => {
    const { target } = e; //  target = e.target is thing that changed state
    const { name } = target; // name = e.target.name
    const value = e.target.value;
    setInput({
      ...input, // another field that you is inputed(old)
      [name]: value,
    });
    // console.log(e.target.name);
    // console.log(isDuplicate);
    // console.log(input);
    // console.log(input.AccountID.trim())
  };
  // function that use in use effect when user insite to this page
  const [result, setResult] = useState([]);

  const OnSubmit = async (e) => {
    e.preventDefault();
    console.log("start submit");
    const trimmedData = {
      AccountID: input.AccountID.trim(),
      CustomerCode: input.CustomerCode.trim(),
      CompanyName: input.CompanyName.trim(),
      CompanyAddress1: input.CompanyAddress1.trim(),
      CompanyAddress2: input.CompanyAddress2.trim(),
      ContactPerson: input.ContactPerson.trim(),
      Mobile: input.Mobile.trim(),
      Email: input.Email.trim(),
      TaxID: input.TaxID.trim(),
      BillingCharge: input.BillingCharge,
      AccountStatus: input.AccountStatus,
      DateModify: input.DateModify.trim(),
      ModifiedBy: input.ModifiedBy.trim(),
      DateCreated: input.DateCreated.trim(),
      CreatedBy: input.CreatedBy.trim(),
    };
    const isDuplicate = await CheckDuplicateData(trimmedData);

    if (isDuplicate) {
      // Handle duplicate case

      console.log("Duplicate data found!");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Duplicate data found!",
      });
      setDuplicate(true);
      return;
    }
    try {
      setDuplicate(false);
      const success = await CreateInformation(trimmedData);
      if (success) {
        console.log("Form submitted successfully");
        setInput({
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
          DateModify: GetCurrentTime(),
          ModifiedBy: "ME",
          DateCreated: GetCurrentTime(),
          CreatedBy: "ME",
        });
        Swal.fire({
          icon: "success",
          title: "The data has been created.",
          // showCancelButton: false,
          // showCloseButton: false,
          timer: 1500,
        }).then(() => window.location.reload());
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        console.log("Failed to submit form");
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error",
      });
      console.log("Error submitting form", err);
    }
  };

  const theme = createTheme({
    palette: {
      del: {
        main: "#7687fd",
        contrastText: "#fff",
      },
      edit: {
        main: "#ed6c02",

        contrastText: "#fff",
      },
    },
  });

  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [expandedRow, setExpandedRow] = useState(null);
  const [accountID, setAccount_ID] = useState(" ⌃˅ AccountID");
  const [customerCode, setCustomerCode] = useState("˅ CustomerCode");
  const [companyName, setAccount_name] = useState("˅ CompanyName");
  const [email, setEmail] = useState("˅ Email");
  const tableCellStyle = {
    fontFamily: "Kanit, sans-serif", // Specify the desired font family
    // fontWeight: 'bold', // Specify the desired font weight
    fontSize: "1rem", // Specify the desired font size
  };
  const getSortIcon = (column) => {
    if (sortedColumn === column) {
      return sortDirection === "asc" ? (
        <KeyboardArrowUpIcon />
      ) : (
        <KeyboardArrowDownIcon />
      );
    }
    return <KeyboardArrowUpIcon />;
  };
  const handleSort = (column) => {
    if (column === sortedColumn) {
      // If the same column is clicked again, toggle the sort direction
      console.log(sortDirection + column);
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // If a new column is clicked, set it as the sorted column with ascending order
      setSortedColumn(column);
      setSortDirection("asc");
    }
  };

  const handleExpandRow = (AccountID) => {
    // console.log(AccountID);
    setExpandedRow(expandedRow === AccountID ? null : AccountID);
  };

  const sortedResult = [...result]; // Create a copy of the original result array
  sortedResult.sort((a, b) => {
    const valueA = a[sortedColumn];
    const valueB = b[sortedColumn];

    if (valueA < valueB) {
      return sortDirection === "asc" ? -1 : 1;
    }
    if (valueA > valueB) {
      return sortDirection === "asc" ? 1 : -1;
    }
    return 0;
  });
  return (
    <div>
      <div id="table_top">
        <div class="name_page"> Table </div>
        <ThemeProvider theme={theme}>
          <Button
            id="create_bottom"
            variant="contained"
            onClick={Show_popup}
            disabled={isButtonDisabled}
            size="large"
            color="del"
          >
            Creating Form
          </Button>
        </ThemeProvider>
      </div>
      <SearchBar setResult={setResult} />
      <FilterStaus setResult={setResult} />

      <div id="overflowX">
        <TableContainer component={Paper}>
          <Table className="order-list">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell
                  id="col_main"
                  onClick={() => handleSort("AccountID")}
                  style={tableCellStyle}
                >
                  AccountID {getSortIcon("AccountID")}
                </TableCell>
                <TableCell
                  id="col_main"
                  onClick={() => handleSort("CustomerCode")}
                  style={tableCellStyle}
                >
                  CustomerCode {getSortIcon("CustomerCode")}
                </TableCell>
                <TableCell
                  id="col_main"
                  onClick={() => handleSort("CompanyName")}
                  style={tableCellStyle}
                >
                  CompanyName {getSortIcon("CompanyName")}
                </TableCell>
                <TableCell
                  id="col_main"
                  onClick={() => handleSort("Email")}
                  style={tableCellStyle}
                >
                  Email {getSortIcon("Email")}
                </TableCell>
                <TableCell
                  id="col_main"
                  onClick={() => handleSort("BillingCharge")}
                >
                  Billing Charge (%) {getSortIcon("BillingCharge")}
                </TableCell>
                <TableCell
                  id="col_main"
                  onClick={() => handleSort("AccountStatus")}
                  style={tableCellStyle}
                >
                  Status {getSortIcon("AccountStatus")}
                </TableCell>
              </TableRow>
            </TableHead>
            {/* <TableBody>
              {result.map((row) => (
                <React.Fragment key={row.id}>
                  <TableRow>
                    <TableCell>
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => handleExpandRow(row.id)}
                      >
                        {expandedRow === row.id ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </IconButton>
                    </TableCell>
                    <TableCell>{row.AccountID}</TableCell>
                    <TableCell>{row.CustomerCode}</TableCell>
                    <TableCell>{row.CompanyName}</TableCell>
                    <TableCell>{row.Email}</TableCell>
                    <TableCell>{row.BillingCharge}</TableCell>
                    <TableCell>{row.AccountStatus}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                      colSpan={7}
                    >
                      <Collapse
                        in={expandedRow === row.id}
                        timeout="auto"
                        unmountOnExit
                      >
                        <Box sx={{ margin: 1 }}>
                          <Typography variant="h6" gutterBottom component="div">
                            Additional Details
                          </Typography>
                          <ul>
                            <li>CompanyAddress1: {row.CompanyAddress1}</li>
                            <li>CompanyAddress2: {row.CompanyAddress2}</li>
                            <li>ContactPerson: {row.ContactPerson}</li>
                            <li>Mobile: {row.Mobile}</li>
                            <li>TaxID: {row.TaxID}</li>
                            <li>BillingCharge: {row.BillingCharge}</li>
                            <li>
                              DateModify:{" "}
                              {ConvertDateTimeFormat(row.DateModify)}


                            </li>
                            <li>ModifiedBy: {row.ModifiedBy}</li>
                            <li>
                              DateCreated:{" "}
                              {ConvertDateTimeFormat(row.DateCreated)}
                            </li>
                            <li>CreatedBy: {row.CreatedBy}</li>
                          </ul>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody> */}

            <TableBody>
              {sortedResult.map((row) => (
                <React.Fragment key={row.AccountID}>
                  <TableRow>
                    <TableCell>
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => handleExpandRow(row.AccountID)}
                      >
                        {expandedRow === row.AccountID ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </IconButton>
                    </TableCell>
                    <TableCell style={tableCellStyle}>
                      {row.AccountID}
                    </TableCell>
                    <TableCell style={tableCellStyle}>
                      {row.CustomerCode}
                    </TableCell>
                    <TableCell style={tableCellStyle}>
                      {row.CompanyName}
                    </TableCell>
                    <TableCell style={tableCellStyle}>{row.Email}</TableCell>
                    <TableCell style={tableCellStyle}>
                      {row.BillingCharge}
                    </TableCell>
                    <TableCell>
                      <Status_icon
                        account_status={Boolean(row.AccountStatus)}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                      colSpan={7}
                    >
                      <Collapse
                        in={expandedRow === row.AccountID}
                        timeout="auto"
                        unmountOnExit
                      >
                        <Box id="table_row" sx={{ margin: "1rem",marginLeft:"1.5rem" }}>
                          <Typography variant="h5" gutterBottom component="div">
                            Additional Details
                          </Typography>
                          <TableContainer>
                            <Table>
                              <TableBody>
                                <TableRow>
                                  <TableCell>CompanyAddress1:</TableCell>
                                  <TableCell>{row.CompanyAddress1}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>CompanyAddress2:</TableCell>
                                  <TableCell>{row.CompanyAddress2}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>ContactPerson:</TableCell>
                                  <TableCell>{row.ContactPerson}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Mobile:</TableCell>
                                  <TableCell>{row.Mobile}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>TaxID:</TableCell>
                                  <TableCell>{row.TaxID}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>BillingCharge:</TableCell>
                                  <TableCell>{row.BillingCharge}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>DateModify:</TableCell>
                                  <TableCell>
                                    {ConvertDateTimeFormat(row.DateModify)}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>ModifiedBy:</TableCell>
                                  <TableCell>{row.ModifiedBy}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>DateCreated:</TableCell>
                                  <TableCell>
                                    {ConvertDateTimeFormat(row.DateCreated)}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>CreatedBy:</TableCell>
                                  <TableCell>{row.CreatedBy}</TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* <table className="order-list">
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

          <tbody>
 
            {result.map((row) => (
              <tr key={row.id}>
                <td>{row.AccountID}</td>
                <td>{row.CustomerCode}</td>
                <td>{row.CompanyName}</td>
                <td>{row.Email}</td>
                <td>{row.BillingCharge}</td>
                <td>
                  <Status_icon account_status={Boolean(row.AccountStatus)} />
                </td>

                <td>
                  <details className="descri">
                    <summary
                      data-open="▸ Show Less"
                      data-close="▾ Show More"
                    ></summary>
                    <ul>
                      <li>CompanyAddress1: {row.CompanyAddress1}</li>
                      <li>CompanyAddress2: {row.CompanyAddress2}</li>
                      <li>ContactPerson: {row.ContactPerson}</li>
                      <li>Mobile: {row.Mobile}</li>
                      <li>TaxID: {row.TaxID}</li>
                      <li>BillingCharge: {row.BillingCharge}</li>
                      <li>
                        DateModify: {ConvertDateTimeFormat(row.DateModify)}
                      </li>
                      <li>ModifiedBy: {row.ModifiedBy}</li>

                      <li>
                        DateCreated: {ConvertDateTimeFormat(row.DateCreated)}
                        <li>CreatedBy: {row.CreatedBy}</li>
                      </li>
                    </ul>
                  </details>
                </td>
              </tr>
            ))}
          </tbody>
        </table> 
 */}
      </div>

      {/* Create data popup */}
      <div class="container_form_popup_create">
        {/* <IconButton id="close_form" name="details" onClick={Hide_popup}>
          <KeyboardHideIcon color="disabled" />
        </IconButton> */}
        <form onSubmit={OnSubmit}>
          {/* <!-- row 1 --> */}
          <div class="form-row">
            <div class="input-data">
              <input
                type="text"
                required
                name="AccountID"
                onChange={handleChange}
                id={isDuplicate ? "dupicate" : ""}
              />
              <div class="underline"></div>
              <label for="">Account ID</label>
            </div>
            <div class="input-data">
              <input
                type="text"
                required
                name="CustomerCode"
                onChange={handleChange}
                id={isDuplicate ? "dupicate" : ""}
              />
              <div class="underline"></div>
              <label for="">Customer Code</label>
            </div>
          </div>

          {/* <!-- row 2 --> */}
          <div class="form-row">
            <div class="input-data">
              <input
                type="text"
                required
                name="CompanyName"
                onChange={handleChange}
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
              />
              <div class="underline"></div>
              <label for="">Billing Charge %</label>
            </div>
          </div>

          {/* <!-- row 6  --> */}

          <div class="form-row">
            <div class="input-data">
              <SelectStatus />
            </div>
          </div>
          <Button variant="text" size="large" onClick={Hide_popup} id="hide">
            Hide
          </Button>
          <Stack id="group_bottom_popup" spacing={2} direction="row">
            <Button variant="text" size="large" onClick={Clear_popup}>
              Close
            </Button>
            <Button size="large" type="submit" variant="contained">
              Create
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
};

export default Table_data;
