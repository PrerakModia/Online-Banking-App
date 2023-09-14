import React, {useState, useEffect} from 'react';
//import SignupComponent from "../components/SignUpComponent";
import LoginComponent from "../components/LoginComponent";
import "../styles/HomePage.css";
import SignUpComponent from '../components/SignUpComponent';

const HomePage = () => {
useEffect(()=>{
  if(window.sessionStorage.getItem("customerId")!=null){
    window.location.assign("/account");
  }
},[]);

  const [accExists,setAccExists] = useState(false); //if accExists then show login or else signup
  const [message,setMessage] = useState("");
  return (
    <div className='HomePage_container'>
      <div className='left_side'>
      {accExists?<div>
        <p>{message}</p>
        <LoginComponent setMessage={setMessage}/>
        <p>Don't have an account? <span className='link' onClick={()=>setAccExists(!accExists)}>Signup</span> instead</p>
      </div>:<div>
        <p>{message}</p>
        <SignUpComponent setMessage={setMessage}/>  
        <p>Already have an account? <span className='link' onClick={()=>setAccExists(!accExists)}>Login</span> instead</p>
      </div>}
      </div>
      <div className='right_side'>
      
      </div>
    </div>
  );
};

export default HomePage;
