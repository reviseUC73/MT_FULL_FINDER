import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { AllInformation } from "../services/AccountApi";
import { useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css"

export default function SearchBar({ setResult }) {
  const [keySearch, setKeySearch] = useState("");
  useEffect(() => {
    fetchData();
  }, [keySearch]);

  const handleChange = (event) => {
    setKeySearch(event.target.value);
  };

  // return obj that filtered the search
  const SearchInData = (data, keySearch) => {
    const filteredData = data.filter(
      (val_item) =>
        val_item.AccountID.toLowerCase().includes(keySearch) ||
        val_item.CustomerCode.toLowerCase().includes(keySearch) ||
        val_item.CompanyName.toLowerCase().includes(keySearch)
    );
    return filteredData;
  };

  async function fetchData() {
    try {
      const data = await AllInformation();
      let searchResult = data;
      if (keySearch.trim() !== "") {
        searchResult = SearchInData(data, keySearch.toLowerCase());
      }
      setResult(searchResult);
      // console.log(searchResult);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    // <Container maxWidth="md" sx={{ mt: 5 }}>
    <Paper id="SearchBar"
      component="form"
      sx={{ p: "2px 3px", display: "flex", alignItems: "center", width: 550 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search From AccountID, CustomerCode, CompanyName"
        inputProps={{ "aria-label": "search google maps" }}
        id="search"
        type="search"
        label=""
        value={keySearch}
        onChange={handleChange}
      />

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
    // </Container>
  );
}
