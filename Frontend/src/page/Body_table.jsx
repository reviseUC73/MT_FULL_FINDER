import React from "react";
import "../body.css";
import Button from "@mui/material/Button";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";
import { AllInformation } from "../services/AccountApi";
import { useState, useEffect } from "react";


const Table_data = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const Close_popup = () => {
    let create_popup = document.getElementsByClassName(
      "container_form_popup"
    )[0];
    create_popup.style.display = "none";
    setButtonDisabled(!isButtonDisabled);
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

  const [formData, setFormData] = useState({
    AccountId: "",
    CustomerCode: "",
    CompanyName: "",
    CompanyAddress1: "",
    CompanyAddress2: "",
    ContactPerson: "",
    mobile: "",
    Email: "",
    TaxId: "",
    BillingCharge: "",
    AccountStatus: "",
    DateModify: "",
    ModifyBy: "",
    DateCreated: "",
    CreatedBy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Handle success
        console.log("Data submitted successfully");
        // Reset the form
        setFormData({
          accountId: "",
          customerCode: "",
          companyName: "",
          companyAddress1: "",
          companyAddress2: "",
          contactPerson: "",
          mobile: "",
          email: "",
          taxId: "",
          billingCharge: "",
          accountStatus: "",
          dateModified: "",
          modifiedBy: "",
          dateCreated: "",
          createdBy: "",
        });
      } else {
        // Handle error
        console.error("Failed to submit data");
      }
    } catch (error) {
      console.error("Failed to submit data", error);
    }
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
        <form action="#">
          {/* <!-- row 1 --> */}
          <div class="form-row">
            <div class="input-data">
              <input type="text" required />
              <div class="underline"></div>
              <label for="">Account ID</label>
            </div>
            <div class="input-data">
              <input type="text" required />
              <div class="underline"></div>
              <label for="">Customer Code</label>
            </div>
          </div>

          {/* <!-- row 2 --> */}
          <div class="form-row">
            <div class="input-data">
              <input type="text" required />
              <div class="underline"></div>
              <label for="">Company Name</label>
            </div>
            <div class="input-data">
              <input type="text" required />
              <div class="underline"></div>
              <label for="">Contact Person</label>
            </div>
          </div>

          {/* <!-- row 3  --> */}
          <div class="form-row">
            <div class="input-data">
              <input type="text" required />
              <div class="underline"></div>
              <label for="">Company Address 1</label>
            </div>
            <div class="input-data">
              <input type="text" required />
              <div class="underline"></div>
              <label for="">Company Address 2</label>
            </div>
          </div>

          {/* <!-- row 4  --> */}
          <div class="form-row">
            <div class="input-data">
              <input type="text" required />
              <div class="underline"></div>
              <label for="">Account Status</label>
            </div>
            <div class="input-data">
              <input type="text" required />
              <div class="underline"></div>
              <label for="">Mobile Number</label>
            </div>
          </div>

          {/* <!-- row 5  --> */}
          <div class="form-row">
            <div class="input-data">
              <input type="text" required />
              <div class="underline"></div>
              <label for="">Tax ID</label>
            </div>
            <div class="input-data">
              <input type="text" required />
              <div class="underline"></div>
              <label for="">Billing Charge %</label>
            </div>
          </div>

          {/* <!-- row 6  --> */}
          <div class="form-row">
            <div class="input-data">
              <input type="text" required />
              <div class="underline"></div>
              <label for="">Email Address</label>
            </div>
          </div>

          <Stack id="group_bottom_popup" spacing={2} direction="row">
            <Button variant="text" onClick={Close_popup}>
              Close
            </Button>
            <Button variant="contained">Create</Button>
          </Stack>
        </form>
      </div>
    </div>
  );
};

export default Table_data;
