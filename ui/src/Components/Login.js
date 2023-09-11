import React, {useState} from 'react'
import axios from 'axios';

const Login = () => {
    const url = "http://localhost:8080/customer/login";
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
    axios
      .post(url, {
        customerId: customerid,
        password: password
      })
      .then((response) => {
        alert(response.data);
      }).catch(error => {
        alert("error==="+error);
      });

  };

  const cancelHandler = () =>{
    //reset the values of input fields
    setcustomerid('');
    setpassword('');

  }


  return (
     <form onSubmit={submitActionHandler}>
        
            Customer Id:
            <input type="text" value={customerid} onChange={customeridChangeHandler} placeholder="Enter your Customer id" required/><br></br>
        
            Passsword :
        <input type="text" value={password} onChange={passwordChangeHandler} placeholder="Enter Password" required/><br></br>
    
        <br></br>
        <button type='submit'>Login</button>
        &nbsp;&nbsp;&nbsp;
        <button type='reset' onClick={()=>cancelHandler()}>Cancel</button>
      </form>
  );
}

export default Login;
