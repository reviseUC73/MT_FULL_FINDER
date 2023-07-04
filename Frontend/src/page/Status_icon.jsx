// efec
// rfec
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

function Status_icon({account_status}) {
  console.log((account_status))
  if (account_status === true) 
    return (
      <>
        <FontAwesomeIcon
          icon={faCheckCircle}
          size="lg"
          style={{ color: "#52c77f" }}
        />
      </>
    );
  else {
    return (
      <>
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="lg"
          style={{ color: "#df6262" }}
        />
      </>
    );
  }
}

export default Status_icon;
