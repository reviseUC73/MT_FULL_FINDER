import React from "react";
import "../body.css";
import "./edit.css";
import { AllInformation } from "../services/AccountApi";
import { useState, useEffect } from "react";

const Body_edit = () => {
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
                <td id="last_e">
                  <button class="btn btn-edit">
                    <span class="mdi mdi-edit mdi-24px"></span>
                    <span class="mdi mdi-edit mdi-24px"></span>
                    <span>Edit</span>
                  </button>
                  <button class="btn btn-delete">
                    <span class="mdi mdi-delete mdi-24px"></span>
                    <span class="mdi mdi-delete-empty mdi-24px"></span>
                    <span>Delete</span>
                  </button>
                </td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Body_edit;
