import React from "react";
import "./Form_create.css";
// import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
function Form_create() {
  return (
    <>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      {/* <Button variant="outline-primary">Primary</Button>{' '} */}
      {/* <Button variant="contained" disableElevation> */}
      {/* Disable elevation */}
      {/* </Button> */}
    </>
    // <div class="container_form">
    //   <div class="text">Creating Form</div>
    //   <form action="#">
    //     {/* <!-- row 1 --> */}
    //     <div class="form-row">
    //       <div class="input-data">
    //         <input type="text" required />
    //         <div class="underline"></div>
    //         <label for="">Account ID</label>
    //       </div>
    //       <div class="input-data">
    //         <input type="text" required />
    //         <div class="underline"></div>
    //         <label for="">Customer Code</label>
    //       </div>
    //     </div>

    //     {/* <!-- row 2 --> */}
    //     <div class="form-row">
    //       <div class="input-data">
    //         <input type="text" required />
    //         <div class="underline"></div>
    //         <label for="">Company Name</label>
    //       </div>
    //       <div class="input-data">
    //         <input type="text" required />
    //         <div class="underline"></div>
    //         <label for="">Contact Person</label>
    //       </div>
    //     </div>

    //     {/* <!-- row 3  --> */}
    //     <div class="form-row">
    //       <div class="input-data">
    //         <input type="text" required />
    //         <div class="underline"></div>
    //         <label for="">Company Address 1</label>
    //       </div>
    //       <div class="input-data">
    //         <input type="text" required />
    //         <div class="underline"></div>
    //         <label for="">Company Address 2</label>
    //       </div>
    //     </div>

    //     {/* <!-- row 4  --> */}
    //     <div class="form-row">
    //       <div class="input-data">
    //         <input type="text" required />
    //         <div class="underline"></div>
    //         <label for="">Account Status</label>
    //       </div>
    //       <div class="input-data">
    //         <input type="text" required />
    //         <div class="underline"></div>
    //         <label for="">Mobile Number</label>
    //       </div>
    //     </div>

    //     {/* <!-- row 5  --> */}
    //     <div class="form-row">
    //       <div class="input-data">
    //         <input type="text" required />
    //         <div class="underline"></div>
    //         <label for="">Tax ID</label>
    //       </div>
    //       <div class="input-data">
    //         <input type="text" required />
    //         <div class="underline"></div>
    //         <label for="">Billing Charge %</label>
    //       </div>
    //     </div>

    //     {/* <!-- row 6  --> */}
    //     <div class="form-row">
    //       <div class="input-data">
    //         <input type="text" required />
    //         <div class="underline"></div>
    //         <label for="">Email Address</label>
    //       </div>
    //     </div>

    //     {/* <!-- <div class="form-row">
    //        <div class="input-data textarea">
    //           <textarea rows="8" cols="80" required></textarea>
    //           <br />
    //           <div class="underline"></div>
    //           <label for="">Write your message</label>
    //           <br /> --> */}

    //     {/* <!-- submit form  --> */}
    //     <div class="form-row submit-btn">
    //       <div class="input-data">
    //         <div class="inner"></div>
    //         <input type="submit" value="submit" />
    //       </div>
    //     </div>

    //   </form>
    // </div>
  );
}

export default Form_create;
