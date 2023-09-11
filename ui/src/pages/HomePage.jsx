import React, {useState} from 'react';
//import SignupComponent from "../components/SignUpComponent";
import LoginComponent from "../components/LoginComponent";
import "../styles/HomePage.css"
import SignUpComponent from '../components/SignUpComponent';

const HomePage = () => {
  const [accExists,setAccExists] = useState(false); //if accExists then show login or else signup
  return (
    <div className='HomePage_container'>
      {accExists?<div>
        <LoginComponent />
        <p>Don't have an account? <span className='link' onClick={()=>setAccExists(!accExists)}>Signup</span> instead</p>
      </div>:<div>
        <SignUpComponent />  
        <p>Already have an account? <span className='link' onClick={()=>setAccExists(!accExists)}>Login</span> instead</p>
      </div>}
    </div>
  );
};

export default HomePage;
