import React from "react";
import Nav from '../components/NavBarComponent';
import '../styles/withdraw.css';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Sidebar from './Sidebar';
function Withdraw() {
    return (
      <div>
        <Nav/>
        <div className='admin_container' style={{display:'flex'}}>
            <Sidebar/>
            
      <div className="withdraw_body" style={{    width: '100%'
}}>
        <Nav/>
        <div className="form_container" align="left">
        <TextField
          id="outlined-basic"
          sx={{ p: 2 }}
          variant="outlined"
          placeholder="Enter Account number of user"
          required
        /><br/>
       <Button variant="contained" size="small" style={{alignSelf:"center"}}>
          Add User
        </Button>
        </div>
      </div>

        </div>
    </div>    );
  }

  export default Withdraw;