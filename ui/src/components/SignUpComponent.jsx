import React, {useState} from 'react'
import { signUpCustomer } from '../utils/auth';
import "../styles/SignUpComponent.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const SignUpComponent = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [dob, setDob] = useState('');
    const [city,setCity] = useState('');
    const [state, setState] = useState('');
    const [middleName, setMiddleName] = useState('');

    const submitActionHandler = (event) => {
        event.preventDefault();
        signUpCustomer(name, password, mobile, email, aadhar, dob, city, state, middleName);
    };

  const cancelHandler = () =>{
    //reset the values of TextField id="outlined-basic" sx={{p:2}} variant="outlined" fields
    setName('');
    setPassword('');
    setMobile('');
    setEmail('');
    setAadhar('');
    setDob('');
    setCity('');
    setState('');
    setMiddleName('');
  }


  return (
    <div className='main_container'>
     <form onSubmit={submitActionHandler}>
        <TextField id="outlined-basic" sx={{p:2}} variant="outlined" type="text" value={name} onChange={(event)=>{setName(event.target.value)}} placeholder="Enter your Name" required/><br />
        <TextField id="outlined-basic" sx={{p:2}} variant="outlined" type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}} placeholder="Enter your Password" required/><br />
        <TextField id="outlined-basic" sx={{p:2}} variant="outlined" type="text" value={mobile} onChange={(event)=>{setMobile(event.target.value)}} placeholder="Enter your Phone Number" required/><br />
        <TextField id="outlined-basic" sx={{p:2}} variant="outlined" type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} placeholder="Enter your Email" required/><br />
        <TextField id="outlined-basic" sx={{p:2}} variant="outlined" type="aadhar" value={aadhar} onChange={(event)=>{setAadhar(event.target.value)}} placeholder="Enter your Aadhar Number" required/><br />
        <TextField id="outlined-basic" sx={{p:2}} variant="outlined" type="text" value={dob} onChange={(event)=>{setDob(event.target.value)}} placeholder="Enter your DOB - DD/MM/YYYY" required/><br />
        <TextField id="outlined-basic" sx={{p:2}} variant="outlined" type="text" value={city} onChange={(event)=>{setCity(event.target.value)}} placeholder="Enter your Current City" required/><br />
        <TextField id="outlined-basic" sx={{p:2}} variant="outlined" type="text" value={state} onChange={(event)=>{setState(event.target.value)}} placeholder="Enter your Current State" required/><br />
        <TextField id="outlined-basic" sx={{p:2}} variant="outlined" type="text" value={middleName} onChange={(event)=>{setMiddleName(event.target.value)}} placeholder="Enter your Middle Name"/><br />
        <br></br>
        <Button variant="contained">Signup</Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="contained" onClick={()=>cancelHandler()}>Reset</Button>
      </form>
      </div>
  );
}

export default SignUpComponent;
