import React from "react";
import "../body.css";
import Button from "@mui/material/Button";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";
import {
  AllInformation,
  CheckDuplicateData,
  CreateInformation,
} from "../services/AccountApi";
import { useState, useEffect } from "react";
import { GetCurrentTime } from "../services/Time";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Table_data = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [isDuplicate, setDuplicate] = useState(false);
  const Close_popup = () => {
    let create_popup = document.getElementsByClassName(
      "container_form_popup"
    )[0];
    create_popup.style.display = "none";
    setButtonDisabled(!isButtonDisabled);
    setDuplicate(false);
  };
  const Show_popup = () => {
    // setButtonDisabled(!isButtonDisabled);
    let create_popup = document.getElementsByClassName(
      "container_form_popup"
    )[0];
    create_popup.style.display = "block";
    setButtonDisabled(!isButtonDisabled);
    console.log("ShowPopup_ready_use_and_ready_creating_form");
  };

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
    DateModify: GetCurrentTime(),
    ModifiedBy: "ME",
    DateCreated: GetCurrentTime(),
    CreatedBy: "ME",
  });

  // target state that changed from user
  const handleChange = async (e) => {
    const { target } = e; //  target = e.target is thing that changed state
    const { name } = target; // name = e.target.name
    const value = e.target.value;
    setInput({
      ...input, // another field that you is inputed(old)
      [name]: value,
    });
    console.log(isDuplicate);
  };

  const OnSubmit = async (e) => {
    e.preventDefault();
    console.log("start submit");
    const isDuplicate = await CheckDuplicateData(input);

    if (isDuplicate) {
      // Handle duplicate case
      console.log("Duplicate data found!");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Duplicate data found!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      setDuplicate(true);
      return;
    }
    try {
      setDuplicate(false);
      const success = await CreateInformation(input);
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
          showCancelButton: false,
          showCloseButton: false,
          timer: 1500,
        }).then(() => window.location.reload());
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
        console.log("Failed to submit form");
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      console.log("Error submitting form", err);
    }

    //   try {
    //     const response = await fetch("/create", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formData),
    //     });
    //     if (response.ok) {
    //       // Handle success
    //       console.log("Data submitted successfully");
    //       // Reset the form
    //       setFormData({
    //         accountId: "",
    //         customerCode: "",
    //         companyName: "",
    //         companyAddress1: "",
    //         companyAddress2: "",
    //         contactPerson: "",
    //         mobile: "",
    //         email: "",
    //         taxId: "",
    //         billingCharge: "",
    //         accountStatus: "",
    //         dateModified: "",
    //         modifiedBy: "",
    //         dateCreated: "",
    //         createdBy: "",
    //       });
    //     } else {
    //       // Handle error
    //       console.error("Failed to submit data");
    //     }
    //   } catch (error) {
    //     console.error("Failed to submit data", error);
    // }
    // console.log(e);
  };

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

  return (
    <div>
      {/* name this path or page */}
      <div id="table_top">
        <div class="name_page"> Table </div>
        <Button
          id="create_bottom"
          variant="contained"
          onClick={Show_popup}
          disabled={isButtonDisabled}
          size="large"
        >
          Creating Form
        </Button>
      </div>

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
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.AccountID}</td>
              <td>{row.CustomerCode}</td>
              <td>{row.CompanyName}</td>
              <td>{row.Email}</td>
              <td>{row.BillingCharge}</td>
              <td>{row.AccountStatus}</td>
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
                    <li>DateModify: {row.DateModify}</li>
                    <li>ModifiedBy: {row.ModifiedBy}</li>
                    <li>CreatedBy: {row.CreatedBy}</li>
                    <li>DateCreated: {row.DateCreated}</li>
                  </ul>
                </details>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Create data popup */}
      <div class="container_form_popup">
        <IconButton id="close_form" name="details" onClick={Close_popup}>
          <HighlightOffIcon />
        </IconButton>
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
                type="text"
                required
                name="AccountStatus"
                onChange={handleChange}
              />
              <div class="underline"></div>
              <label for="">Account Status</label>
            </div>
            <div class="input-data">
              <input
                type="text"
                required
                name="Mobile"
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
                type="text"
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
              <input
                type="email"
                required
                name="Email"
                onChange={handleChange}
              />
              <div class="underline"></div>
              <label for="">Email Address</label>
            </div>
          </div>

          <Stack id="group_bottom_popup" spacing={2} direction="row">
            <Button variant="text" size="large" onClick={Close_popup}>
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
