import React from "react";
import "./body.css";
const table = () => {
  return (
    <div>
      <div class="name_page"> Table </div>

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
                <summary data-open="▸ Show Less" data-close="▾ Show More" ></summary>
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
    </div>
  );
};

export default table;
