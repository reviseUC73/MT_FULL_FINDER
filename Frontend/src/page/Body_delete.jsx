import React from "react";
import "../body.css";
import "./edit_del.css";
const Body_delete = () => {
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
              <button class="btn btn-delete">
                <span class="mdi mdi-delete mdi-24px"></span>
                <span class="mdi mdi-delete-empty mdi-24px"></span>
                <span>Delete</span>
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
          {/* Add more order items as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Body_delete;
