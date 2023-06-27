import React from "react";
import "../body.css";
import Button from "@mui/material/Button";
// import CancelIcon from '@material-ui/icons/Cancel';
import { useState } from "react";
// import CancelIcon from '@mui/icons-material/';
// import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";

const Table_data = () => {
  // const [buttonText, setButtonText] = useState("Next"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState
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

  return (
    <div>
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
        <thead>
          <tr>
            <th>AccountID</th>
            <th>CostomerCode</th>
            <th>CompanyName</th>
            <th>รายการสินค้า</th>
            <th>Email</th>
            <th>Billing Charge (%)</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr class="yo">
            <td>สินค้าที่ 1</td>
            <td>2</td>
            <td>500 บาท</td>
            <td>รายการสินค้า</td>
            <td>รายการสินค้า</td>
            <td>รายการสินค้า</td>
            <td>รายการสินค้า</td>
            <td>
              <details className="descri">
                <summary
                  data-open="▸ Show Less"
                  data-close="▾ Show More"
                ></summary>
                <ul>
                  <li>CompanyAddress1 : 456 Oak Street </li>
                  <li>CompanyAddress2 : Suite 789</li>
                  <li>ContactPerson : Jane Smith</li>
                  <li>Mobile : 555-123-4567</li>
                  <li>Email : jane@example.com</li>
                  <li>TaxID : 0987654321</li>
                  <li>BillingCharge : 0.05</li>
                  <li>AccountStatus : Inactive</li>
                  <li>DateModify : 2023-06-18 00:00:00</li>
                  <li>ModifiedBy : User1</li>
                  <li>CreatedBy : User1</li>
                  <li>DateCreated : 2023-06-18</li>
                </ul>
              </details>
            </td>
          </tr>

          <tr>
            <td>สินค้าที่ 2</td>
            <td>2</td>
            <td>500 บาท</td>
            <td>รายการสินค้า</td>
            <td>รายการสินค้า</td>
            <td>รายการสินค้า</td>
            <td>รายการสินค้า</td>
            <td>รายการสินค้า</td>
          </tr>
          {/* Add more order items as needed */}
        </tbody>
      </table>

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

          {/* <!-- <div class="form-row">
      
          {/* <!-- submit form  --> */}
          {/* <div class="form-row submit-btn">
            <div class="input-data">
              <div class="inner"></div>
              <input type="submit" value="Create" />
            </div>
          </div> */}
          <Stack id="group_bottom_popup"spacing={2} direction="row">
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
