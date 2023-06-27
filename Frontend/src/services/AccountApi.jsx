import axios from "axios";

export const AllInformation = async () => {
  const baseURL = "http://localhost:3002/read";

  try {
    const response = await axios.get(baseURL);
    console.log(response.data)
    return response.data;
  } catch (err) {
    return null;
  }
};