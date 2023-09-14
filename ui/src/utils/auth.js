import instance from "./configuration";

export async function signUpCustomer(
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
) {
  const path = "/customer";
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
    occupation,
    accounts: [],
  };
  //const jsonCustomerDets = JSON.stringify(customerDets);
  const res = await instance
    .post(path, customerDets, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((resp) => {
      console.log(resp);
      window.sessionStorage.setItem("customerId", resp.data.customerId);
      window.location.assign("/dashboard");
    })
    .catch((err) => {
      console.log(err);
    });
  return;
}

export async function logInCustomer(customerId, password) {
  const path = "/customer/login";
  const loginDets = {
    customerId,
    password,
  };
  //const jsonLoginDets = JSON.stringify(loginDets);
  const res = await instance
    .post(path, loginDets, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((resp) => {
      console.log(resp);
      // setMessage(resp.data);
      window.sessionStorage.setItem("customerId", customerId);
      window.location.assign("/dashboard");
    })
    .catch((err) => {
      console.log(err);
      // setMessage("error===" + err);
    });
  // setTimeout(() => {
  //   setMessage("");
  // }, 5000);
  return;
}

export async function getCustomer(customerId, setFormData) {
  const path = `customer/${customerId}`;
  console.log(path);
  const res = await instance
    .get(path, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let currentDate = `${day}-${month}-${year}`;
      setFormData({
        name: res.data.firstName,
        customerId: customerId,
        date: currentDate,
        address: "",
        ifsc: "",
        branch: "",
        type: "",
        credit: false,
        debit: false,
        netBanking: false,
      });
    })
    .catch((err) => console.log(err));
}

export async function getIFSC(address, setFormData) {
  const path = `account/${address}`;
  const res = await instance
    .get(path, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
      setFormData((prev) => ({
        ...prev,
        ifsc: res.data.ifsc,
        branch: res.data.branch,
      }));
    })
    .catch((err) => console.log(err));
}

export async function createAccount(formData) {
  const path = `account/create/1`;
  console.log(path);
  const accountDetails = {
    accNumber: "",
    accType: formData.type,
    balance: 0,
    ifscCode: formData.ifsc,
    branch: formData.branch,
    openingDate: formData.date,
    isCreditCard: formData.credit,
    isDebitCard: formData.debit,
    isNetBanking: formData.netBanking,
  };
  console.log(accountDetails);
  const res = await instance
    .post(path, accountDetails, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
