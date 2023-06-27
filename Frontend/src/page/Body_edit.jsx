import React from "react";
import "../body.css";
import "./edit.css";
const Body_edit = () => {
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
              <button class="btn btn-edit">
                <span class="mdi mdi-edit mdi-24px"></span>
                <span class="mdi mdi-edit mdi-24px"></span>
                <span>Edit</span>
              </button>
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
          
        </tbody>
      </table>
    </div>
  );
};

export default Body_edit;