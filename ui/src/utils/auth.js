import instance from "./configuration";

export async function signUpCustomer(name, password, mobile, email, aadhar, dob, city, state, middleName){
    const path = "/customer";
    const customerDets = {
        name,
        password,
        mobile,
        email,
        aadhar,
        dob,
        city,
        state,
        middleName
    };
    const jsonCustomerDets = JSON.stringify(customerDets);
    const res = await instance.post(path,jsonCustomerDets,{
        headers: {
            "Content-Type" : "application/json"
        }
    }).then((resp)=>{
        console.log(resp);
        alert(resp.data);
    }).catch((err)=>{
        console.log(err);
        alert("error==="+err);
    });
    return;
}

export async function logInCustomer(customerId, password){
    const path = "/customer/login";
    const loginDets = {
        customerId,
        password
    };
    const jsonLoginDets = JSON.stringify(loginDets);
    const res = await instance.post(path,jsonLoginDets,{
        headers: {
            "Content-Type" : "application/json"
        }
    }).then((resp)=>{
        console.log(resp);
        alert(resp.data);
    }).catch((err)=>{
        console.log(err);
        alert("error==="+err);
    });
    return;
}
