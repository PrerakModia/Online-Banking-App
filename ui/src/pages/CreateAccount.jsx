import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function CreateAccount() {
  return  <div className='main_container'>
    <h1>Please Fill the Below Fields to Create Account</h1>
  <form>
     <TextField id="outlined-basic" sx={{p:2}} variant="outlined" type="text"  placeholder="Enter your Name" required/><br />
     <TextField id="outlined-basic" sx={{p:2}} variant="outlined" type="text"  placeholder="Enter your balance" required/><br />
     <TextField id="outlined-basic" sx={{p:2}} variant="outlined" type="text" placeholder="Enter your Customer_ID" required/><br />
     <TextField id="outlined-basic" sx={{p:2}} variant="outlined" type="text"  placeholder="Enter your IFSC_Code" required/><br />
     <TextField id="outlined-basic" sx={{p:2}} variant="outlined" type="text"  placeholder="Enter your Branch" required/><br />
     <TextField id="outlined-basic" sx={{p:2}} variant="outlined" type="text"  placeholder="Enter Opening Date" required/><br />
  <FormControlLabel control={<Checkbox  />} label="Salary Account" />
  <FormControlLabel control={<Checkbox  />} label="Current Account" />
  <FormControlLabel control={<Checkbox  />} label="Savings Account" />
<br/>
  <FormControlLabel control={<Checkbox  />} label="Credit Card" />
  <FormControlLabel control={<Checkbox  />} label="Debit Card" />
  <FormControlLabel control={<Checkbox  />} label="NetBanking " /><br/>
<TextField size="large" id="outlined-basic" sx={{p:2}} variant="outlined" type="text"  placeholder="Enter Address" required/><br />
<FormControlLabel control={<Checkbox  />} label="I have read the terms and conditions" />
<br/>
     <Button variant="contained">Submit</Button>
   </form>
   </div>;
}
