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

export const CreateInformation = async (
  AccountID,
  CustomerCode,
  CompanyName,
  CompanyAddress1,
  CompanyAddress2,
  ContactPerson,
  Mobile,
  Email,
  TaxID,
  BillingCharge,
  AccountStatus,
  DateModify,
  ModifiedBy,
  DateCreated,
  CreateBy
) => {
  // Define the data to be sent in the request body
  const data = {
    AccountId: AccountID,
    CustomerCode: CustomerCode,
    CompanyName: CompanyName,
    CompanyAddress1: CompanyAddress1,
    CompanyAddress2: CompanyAddress2,
    ContactPerson: ContactPerson,
    Mobile: Mobile,
    Email: Email,
    TaxID: TaxID,
    BillingCharge: BillingCharge,
    AccountStatus: AccountStatus,
    DateModify: DateModify,
    ModifiedBy: ModifiedBy,
    DateCreated: DateCreated,
    CreateBy: CreateBy,
  };

  const baseURL = "http://localhost:3002/create";
  // Send the PUT request
  axios
    .put(baseURL, data)
    .then((response) => {
      console.log("Successfully updated:", response.data);
    })
    .catch((error) => {
      console.error("Error updating:", error);
    });
};
