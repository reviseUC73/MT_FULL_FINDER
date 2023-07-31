import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useEffect, useState } from "react";
import { AllInformation } from "../services/AccountApi";
import { Button, Collapse } from "@mui/material";
export default function FilterStaus({ setResult }) {
  
  const [StatusShow, setStatusShow] = useState("both");
  useEffect(() => {
    fetchData();
  }, [StatusShow]);

  const [advance, setAdvance] = useState(false);
  const [color_advance, setColor_Advance] = useState("#7687FD");

  function filterStaus(data, key) {
    if (key === "both") {
      return data;
    } else if (key === "active") {
      return data.filter((value) => value.AccountStatus === 1);
    } else {
      return data.filter((value) => value.AccountStatus === 0);
    }
  }



  
  async function fetchData() {
    try {
      const data = await AllInformation();
      let result = data;
      result = filterStaus(data, StatusShow);
      setResult(result);
      
      function parseDateCreated(item) {
        return new Date(item.DateCreated);
      }
      
      // Sorting function for "DateCreated"
      function compareDateCreated(item1, item2) {
        const date1 = parseDateCreated(item1);
        const date2 = parseDateCreated(item2);
        return date1 - date2;
      }
      result.sort(compareDateCreated);
     

      // Sort the data by "DateCreated"

    } catch (error) {
      console.error(error);
    }
  }
  const handleAdvance = () => {
    setAdvance(!advance);
    if (advance) {
      setColor_Advance("#7b9af7");
    } else {
      {
        setColor_Advance("gray");
      }
    }
  };
  const handleChange = (event) => {
    setStatusShow(event.target.value);
  };
  return (
    <div style={{ marginBottom: "1rem" }}>
      <Button
        sx={{ color: color_advance }}
        size="large"
        onClick={handleAdvance}
      >
        Status setting
      </Button>
      <Collapse in={advance} timeout="auto" unmountOnExit>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={handleChange}
            defaultValue="both"
            value={StatusShow}
            // hidden={true}
          >
            <FormControlLabel
              sx={{ color: "#414141" }}
              value="both"
              control={<Radio />}
              label="Both"
            />
            <FormControlLabel
              sx={{ color: "#414141" }}
              value="active"
              control={<Radio />}
              label="Active"
            />
            <FormControlLabel
              sx={{ color: "#414141" }}
              value="non-active"
              control={<Radio />}
              label="Deactivate"
            />
          </RadioGroup>
        </FormControl>
      </Collapse>
    </div>
  );
}
