import React, {useState} from 'react'
import { logInCustomer } from '../utils/auth';

const Login = () => {
    const [customerid, setcustomerid] = useState('');
    const [password, setpassword] = useState('');

    const customeridChangeHandler = (event) => {
        setcustomerid(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setpassword(event.target.value);
    };

    const submitActionHandler = (event) => {
    event.preventDefault();
    logInCustomer(customerid,password)
  };

  const cancelHandler = () =>{
    //reset the values of input fields
    setcustomerid('');
    setpassword('');

  }


  return (
     <form onSubmit={submitActionHandler}>
            <input type="text" value={customerid} onChange={customeridChangeHandler} placeholder="Enter your Customer id" required/><br />
        <input type="password" value={password} onChange={passwordChangeHandler} placeholder="Enter Password" required/><br></br>
    
        <br></br>
        <button type='submit'>Login</button>
        &nbsp;&nbsp;&nbsp;
        <button type='reset' onClick={()=>cancelHandler()}>Reset</button>
      </form>
  );
}

export default Login;
