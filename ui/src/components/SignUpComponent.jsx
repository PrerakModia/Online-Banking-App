import React, { useState } from "react";
import { signUpCustomer } from "../utils/auth";
import "../styles/SignUpComponent.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const SignUpComponent = ({ setMessage }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [dob, setDob] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [salary, setSalary] = useState(0);
  const [occupation, setOccupation] = useState("");

  const submitActionHandler = (event) => {
    console.log("Inside signup aciton handler");
    event.preventDefault();
    signUpCustomer(
      firstName,
      lastName,
      password,
      mobile,
      email,
      aadhar,
      dob,
      city,
      state,
      salary,
      occupation,
      setMessage
    );
  };

  const cancelHandler = () => {
    //reset the values of input fields
    setFirstName("");
    setLastName("");
    setPassword("");
    setMobile("");
    setEmail("");
    setAadhar("");
    setDob("");
    setCity("");
    setState("");
    setSalary(0);
    setOccupation("");
  };

  return (
    <div className="main_container">
      <form onSubmit={submitActionHandler}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          sx={{ p: 2 }}
          variant="outlined"
          type="text"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
          placeholder="Enter your First Name"
          required
        />
        <br />
        <TextField
          id="outlined-basic"
          sx={{ p: 2 }}
          variant="outlined"
          type="text"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
          placeholder="Enter your Last Name"
          required
        />
        <br />
        <TextField
          id="outlined-basic"
          sx={{ p: 2 }}
          variant="outlined"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="Enter your Password"
          required
        />
        <br />
        <TextField
          id="outlined-basic"
          sx={{ p: 2 }}
          variant="outlined"
          type="text"
          value={mobile}
          onChange={(event) => {
            setMobile(event.target.value);
          }}
          placeholder="Enter your Phone Number"
          required
        />
        <br />
        <TextField
          id="outlined-basic"
          sx={{ p: 2 }}
          variant="outlined"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="Enter your Email"
          required
        />
        <br />
        <TextField
          id="outlined-basic"
          sx={{ p: 2 }}
          variant="outlined"
          type="aadhar"
          value={aadhar}
          onChange={(event) => {
            setAadhar(event.target.value);
          }}
          placeholder="Enter your Aadhar Number"
          required
        />
        <br />
        <TextField
          id="outlined-basic"
          sx={{ p: 2 }}
          variant="outlined"
          type="text"
          value={dob}
          onChange={(event) => {
            setDob(event.target.value);
          }}
          placeholder="Enter your DOB - DD-MM-YYYY"
          required
        />
        <br />
        <TextField
          id="outlined-basic"
          sx={{ p: 2 }}
          variant="outlined"
          type="text"
          value={city}
          onChange={(event) => {
            setCity(event.target.value);
          }}
          placeholder="Enter your Current City"
          required
        />
        <br />
        <TextField
          id="outlined-basic"
          sx={{ p: 2 }}
          variant="outlined"
          type="text"
          value={state}
          onChange={(event) => {
            setState(event.target.value);
          }}
          placeholder="Enter your Current State"
          required
        />
        <br />
        <TextField
          id="outlined-basic"
          sx={{ p: 2 }}
          variant="outlined"
          type="number"
          value={salary}
          onChange={(event) => {
            setSalary(event.target.value);
          }}
          placeholder="Enter your Salary"
          required
        />
        <br />
        <TextField
          id="outlined-basic"
          sx={{ p: 2 }}
          variant="outlined"
          type="text"
          value={occupation}
          onChange={(event) => {
            setOccupation(event.target.value);
          }}
          placeholder="Enter your Occupation"
          required
        />
        <br />
        <br></br>
        <Button
          variant="contained"
          onClick={(event) => submitActionHandler(event)}
        >
          Signup
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="contained" onClick={() => cancelHandler()}>
          Reset
        </Button>
      </form>
    </div>
  );
};

export default SignUpComponent;
