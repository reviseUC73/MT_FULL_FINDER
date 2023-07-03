import React from "react";
import "./Form.css";
import { AllInformation } from "../services/AccountApi";
import { useEffect, useState } from "react";


const Form_create = () => {
  const [data, setData] = useState([]);

  // function that use in use effect when user insite to this page
  //////////////////////
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
  /////////////////////

  return (
    <div>
      \{" "}
      {data.map((item) => (
        <div key={item.iID}>
          <p>Company Name: {item.CompanyName}</p>
          <p>Contact Person: {item.ContactPerson}</p>
        </div>
      ))}
    </div>
  );
};

export default Form_create;
