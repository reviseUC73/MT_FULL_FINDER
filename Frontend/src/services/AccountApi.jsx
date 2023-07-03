import axios from "axios";
let port = 3002;
export const AllInformation = async () => {
  const baseURL = `http://localhost:${port}/read`;

  try {
    const response = await axios.get(baseURL);
    console.log(response.data);
    return response.data;
  } catch (err) {
    return null;
  }
};

// Function to check for duplicate data
export const CheckDuplicateData = async (data) => {
  const duplicateURL = `http://localhost:${port}/check-duplicate`;
  const dataFormat = JSON.stringify(data);

  try {
    const response = await axios.post(duplicateURL, dataFormat, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    return response.data.duplicate;
  } catch (error) {
    console.log("Failed to check duplicate data", error);
    return false;
  }
};

export const CreateInformation = async (data) => {
  // Define the data to be sent in the request body

  const baseURL = `http://localhost:${port}/create`;
  var data_format = JSON.stringify(data);

  if (!data.AccountID || !data.CustomerCode || !data.CompanyName) {
    console.log("Missing required field(s)");
    return false;
  }

  try {
    // Send the PUT request
    const response = await axios.post(baseURL, data_format, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      return true;
    } else if (response.status === 400) {
      console.log(response.data);
    }
    return false;
  } catch (e) {
    console.log("Failed to submit data", e);
    return false;
  }
};

export const EditInformation = async (user_id, data) => {
  const baseURL = `http://localhost:${port}/edit/${user_id}`;
  var data_format = JSON.stringify(data);
  try {
    // Send the PUT request
    const response = await axios.post(baseURL, data_format, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        "Content-Type": "application/json",
      },
    });
    console.log(response.status)
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (e) {
    console.log("Failed to fail data", e);
    return false;
  }
};

export const DeleteInformation = async (user_id) => {
  const baseURL = `http://localhost:${port}/delete/${user_id}`;
  try {
    const response = await axios.delete(baseURL);
    console.log("API response:", response.status, response.data);

    if (response.status === 200) {
      console.log("Delete successful with status 201!");
      return true;
    } else {
      console.log("Delete operation failed!");
      return false;
    }
  } catch (err) {
    console.error("API error:", err.response.status, err.response.data);

    return false;
  }
};
