import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { getCustomer, getIFSC, createAccount } from "../utils/auth";

export default function CreateAccount() {
  const [formData, setFormData] = useState({
    name: "",
    customerId: "",
    date: "",
    address: "",
    ifsc: "",
    branch: "",
    type: "",
    credit: false,
    debit: false,
    netBanking: false,
  });

  useEffect(() => {
    const data = window.sessionStorage.getItem("customerId");
    getCustomer(data, setFormData);
  }, []);

  const changeAccountType = (e, name) => {
    console.log(e.target.checked);
    console.log(name);
    if (e.target.checked) setFormData((prev) => ({ ...prev, type: name }));
    else setFormData((prev) => ({ ...prev, type: "" }));
  };

  const handleCardOptions = (e, option) => {
    setFormData((prev) => ({ ...prev, [option]: e.target.checked }));
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, address: e.target.value }));
  };

  const handleBlur = (e) => {
    getIFSC(e.target.value, setFormData);
  };

  return (
    <div className="main_container">
      <h1>Please Fill the Below Fields to Create Account</h1>
      <form>
        <TextField
          id="outlined-basic"
          sx={{ p: 2 }}
          variant="outlined"
          type="text"
          value={formData.name}
          placeholder="Enter your Name"
          required
          // disabled={true}
        />
        <br />
        <TextField
          // disabled={true}
          id="outlined-basic"
          sx={{ p: 2 }}
          variant="outlined"
          type="text"
          value={formData.customerId}
          placeholder="Enter your Customer_ID"
          required
        />
        <br />
        <TextField
          size="large"
          id="outlined-basic"
          sx={{ p: 2 }}
          variant="outlined"
          type="text"
          placeholder="Enter Address"
          required
          onChange={(e) => handleChange(e)}
          onBlur={handleBlur}
        />
        <br />
        <TextField
          id="outlined-basic"
          sx={{ p: 2 }}
          variant="outlined"
          type="text"
          placeholder="Enter your IFSC_Code"
          required
          value={formData.ifsc}
        />
        <br />
        <TextField
          id="outlined-basic"
          sx={{ p: 2 }}
          variant="outlined"
          type="text"
          placeholder="Enter your Branch"
          required
          value={formData.branch}
        />
        <br />
        <TextField
          id="outlined-basic"
          sx={{ p: 2 }}
          variant="outlined"
          type="text"
          placeholder="Enter Opening Date"
          required
          value={formData.date}
        />
        <br />
        <FormControlLabel
          control={<Checkbox />}
          label="Salary Account"
          onChange={(e) => {
            changeAccountType(e, "salary");
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Current Account"
          onChange={(e) => {
            changeAccountType(e, "current");
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Savings Account"
          onChange={(e) => {
            changeAccountType(e, "savings");
          }}
        />
        <br />
        <FormControlLabel
          control={<Checkbox />}
          label="Credit Card"
          onChange={(e) => {
            handleCardOptions(e, "credit");
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Debit Card"
          onChange={(e) => {
            handleCardOptions(e, "debit");
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="NetBanking"
          onChange={(e) => {
            handleCardOptions(e, "netBanking");
          }}
        />
        <br />
        <FormControlLabel
          control={<Checkbox />}
          label="I have read the terms and conditions"
        />
        <br />
        <Button
          variant="contained"
          onClick={() => {
            createAccount(formData);
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
