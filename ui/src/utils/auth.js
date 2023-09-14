import instance from "./configuration";

export async function signUpCustomer(firstName, lastName, password, mobile, email, aadhar, dob, city, state, salary, occupation, setMessage){
    const path = "/customer";
    console.log("Inside signupcustomer auth func")
    console.log(process.env.REACT_APP_BACKEND_URL);
    const customerDets = {
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
        occupation
    };
    //const jsonCustomerDets = JSON.stringify(customerDets);
    const res = await instance.post(path,customerDets,{
        headers: {
            "Content-Type" : "application/json"
        }
    }).then((resp)=>{
        console.log(resp);
        window.sessionStorage.setItem("customerId", resp.data.customerId);
        setMessage("Customer Registration Successful!");
        window.location.assign("/account");
    }).catch((err)=>{
        console.log(err);
        setMessage("error==="+err);
    });
    setTimeout(()=>{
        setMessage("");
    },5000);
    return;
}

export async function logInCustomer(customerId, password, setMessage){
    const path = "/customer/login";
    const loginDets = {
        customerId,
        password
    };
    //const jsonLoginDets = JSON.stringify(loginDets);
    const res = await instance.post(path,loginDets,{
        headers: {
            "Content-Type" : "application/json"
        }
    }).then((resp)=>{
        console.log(resp);
        setMessage(resp.data);
        window.sessionStorage.setItem("customerId", customerId);
        window.location.assign("/account");
    }).catch((err)=>{
        console.log(err);
        setMessage("error==="+err);
    });
    setTimeout(()=>{
        setMessage("");
    },5000);
    return;
}
