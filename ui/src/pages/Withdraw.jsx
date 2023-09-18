import React from "react";
import Nav from '../components/NavBarComponent';
import '../styles/withdraw.css';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Withdraw() {
    return (
      <div className="withdraw_body">
        <Nav/>
        <div className="form_container" align="center">
        <TextField
          id="outlined-basic"
          sx={{ p: 2 }}
          variant="outlined"
          placeholder="Enter your the amount you want to withdraw"
          required
        /><br/>
       <Button variant="contained" size="small" style={{maxWidth:"20em" , alignSelf:"center"}}>
          Withdraw
        </Button>
        </div>
      </div>
    );
  }

  export default Withdraw;