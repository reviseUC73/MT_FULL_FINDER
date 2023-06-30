import axios from "axios";

export const AllInformation = async () => {
  const baseURL = "http://localhost:3002/read";

  try {
    const response = await axios.get(baseURL);
    console.log(response.data);
    return response.data;
  } catch (err) {
    return null;
  }
};

export const CreateInformation = async (data) => {
  // Define the data to be sent in the request body

  const baseURL = "http://localhost:3002/create";
  var data_format = JSON.stringify(data);

  console.log(data);
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
    }
    return false;
  } catch (e) {
    console.log("Failed to submit data", e);
    return false;
  }
};
