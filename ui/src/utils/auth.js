import instance from './configuration';
import axios from 'axios';

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
  isDisabled,
  occupation
) {
  const path = '/customer';
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
    isDisabled,
    accounts: [],
  };
  console.log(customerDets);
  const res = await axios({
    url: 'http://localhost:8080/customer',
    method: 'post',
    data: customerDets,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => {
      window.sessionStorage.setItem('customerId', resp.data.customerId);
      window.location.assign('/dashboard');
    })
    .catch((err) => {
      console.log(err);
    });
  return;
}

export async function registerAdmin(adminDetails) {
  const path = '/admin';
  const res = await instance
    .post(path, adminDetails, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      window.sessionStorage.setItem('adminId', res.data.adminId);
      window.location.assign('/dashboard');
    })
    .catch((err) => console.log(err));
}

export async function logInCustomer(customerId, password) {
  const path = '/customer/login';
  const loginDets = {
    customerId,
    password,
  };
  const res = await instance
    .post(path, loginDets, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((resp) => {
      console.log(resp);
      window.sessionStorage.setItem('customerId', customerId);
      window.location.assign('/dashboard');
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function logInAdmin(adminId, password) {
  const path = '/admin/login';
  const loginDets = {
    adminId,
    password,
  };
  const res = await instance
    .post(path, loginDets, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((resp) => {
      console.log(resp);
      window.sessionStorage.setItem('adminId', adminId);
      window.location.assign('/dashboard');
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getCustomer(customerId, setFormData) {
  const path = `customer/${customerId}`;
  // console.log(path);
  const res = await instance
    .get(path, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => {
      setFormData(res.data);
    })
    .catch((err) => console.log(err));
}

export async function getAdmin(adminId, setFormData) {
  const path = `admin/${adminId}`;
  const res = await instance
    .get(path, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => {
      setFormData(res.data);
    })
    .catch((err) => console.log(err));
}

export async function getAccounts(custId, setAccounts) {
  const path = `customer/accounts/${custId}`;
  const res = await instance
    .get(path, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => {
      var accNumbers = [];
      var accounts = [];
      for (var i = 0; i < res.data.length; i++) {
        if (!accNumbers.includes(res.data[i].accNumber)) {
          accNumbers.push(res.data[i].accNumber);
          accounts.push(res.data[i]);
        }
      }
      setAccounts(accounts);
    });
}

export async function getPendingAccounts(setAccounts) {
  const path = `admin/pendingAccounts`;
  const res = await instance
    .get(path, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => {
      var accNumbers = [];
      var accounts = [];
      for (var i = 0; i < res.data.length; i++) {
        if (!accNumbers.includes(res.data[i].accNumber)) {
          accNumbers.push(res.data[i].accNumber);
          accounts.push(res.data[i]);
        }
      }
      console.log(accounts);
      setAccounts(accounts);
    });
}

export async function getCustomerTransactions(customerId, setForm) {
  const path = `customer/allTransactions/${customerId}`;
  const res = await instance
    .get(path, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => {
      console.log(res);
      setForm(res.data);
    })
    .catch((err) => console.log(err));
}

export async function getTransactions(accId, setTransactions) {
  const path = `account/transactions/${accId}`;
  const res = await instance
    .get(path, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => {
      setTransactions(res.data);
      console.log(res);
    });
}

export async function getIFSC(address, setFormData) {
  const path = `account/${address}`;
  const res = await instance
    .get(path, {
      headers: { 'Content-Type': 'application/json' },
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
    accNumber: '',
    accType: formData.type,
    balance: 0,
    ifscCode: formData.ifsc,
    branch: formData.branch,
    openingDate: formData.date,
    isCreditCard: formData.credit,
    isDebitCard: formData.debit,
    isNetBanking: formData.netBanking,
    isDisabled: true,
  };
  console.log(accountDetails);
  const res = await instance
    .post(path, accountDetails, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

export const approveAccount = async (accNo, refresh) => {
  const res = await axios({
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    url: `http://localhost:8080/admin/toggleAccount/${accNo}`,
  })
    .then((res) => {
      console.log(res);
      refresh(Math.random());
    })
    .catch((err) => console.log(err));
};

export const withdraw = async (withdraw, changeView) => {
  console.log(withdraw);
  const res = await axios({
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    url: 'http://localhost:8080/account/withdraw',
    data: withdraw,
  })
    .then((res) => {
      console.log(res);
      changeView('accountDetails');
    })
    .catch((err) => console.log(err));
};

export const deposit = async (deposit, changeView) => {
  console.log(deposit);
  const res = await axios({
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    url: 'http://localhost:8080/account/deposit',
    data: deposit,
  })
    .then((res) => {
      console.log(res);
      changeView('accountDetails');
    })
    .catch((err) => console.log(err));
};

export const transfer = async (fundTransfer, changeView) => {
  console.log(deposit);
  const res = await axios({
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    url: 'http://localhost:8080/account/fundTransfer',
    data: fundTransfer,
  })
    .then((res) => {
      console.log(res);
      changeView('accountDetails');
    })
    .catch((err) => console.log(err));
};

export const resetPassword = async (otp, customerId, password) => {
  const res = await axios({
    method: 'put',
    url: `http://localhost:8080/customer/resetPassword/${otp}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      customerId,
      password,
    },
  })
    .then((res) => {
      console.log(res);
      window.location.assign('/');
    })
    .catch((err) => console.log(err));
};
