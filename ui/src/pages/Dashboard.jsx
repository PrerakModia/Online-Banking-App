import React, { useEffect, useState } from 'react';
import '../styles/Dashboard.css';
import SideBarMain from '../components/SideBarMain';
import AccountDetails from '../components/AccountDetails';
import { getCustomer, getAdmin } from '../utils/auth';
import Withdraw from './Withdraw';
import Deposit from './Deposit';
import FundTransfer from './FundTransfer';
import Transactions from './Transactions';
import AdminDetails from '../components/AdminDetails';
import ToggleAccounts from '../components/ToggleAccounts';
import CreateAccount from './CreateAccount';
import AllTransactions from '../components/AllTransactions';
import { render } from '@testing-library/react';
import CustomerAccounts from '../components/CustomerAccounts';

const Dashboard = () => {
  const [user, setUser] = useState('');
  const [customerDetails, getCustomerDetails] = useState([]);
  const [adminDetails, setAdminDetails] = useState([]);

  const [renderView, setRenderView] = useState('');

  useEffect(() => {
    const customer = window.sessionStorage.getItem('customerId');
    const admin = window.sessionStorage.getItem('adminId');
    if (admin == undefined) {
      setUser('customer');
      setRenderView('accountDetails');
      getCustomer(customer, getCustomerDetails);
    } else {
      setUser('admin');
      getAdmin(admin, setAdminDetails);
      setRenderView('adminDetails');
    }
  }, []);
  return (
    <>
      <div className="flex flex-row w-screen h-screen">
        <SideBarMain changeView={setRenderView} user={user} />
        <div className="max-w-3xl">
          {renderView === 'allTransactions' && (
            <AllTransactions changeView={setRenderView} />
          )}
          {renderView === 'createAccount' && (
            <CreateAccount changeView={setRenderView} />
          )}
          {renderView === 'adminDetails' && (
            <AdminDetails changeView={setRenderView} />
          )}
          {renderView === 'toggleAccounts' && <ToggleAccounts />}
          {renderView === 'accountDetails' && (
            <AccountDetails
              customer={customerDetails}
              changeView={setRenderView}
            />
          )}
          {renderView === 'customerAccounts' && (
            <CustomerAccounts changeView={setRenderView} />
          )}
          {renderView === 'withdraw' && (
            <Withdraw customer={customerDetails} changeView={setRenderView} />
          )}
          {renderView === 'deposit' && (
            <Deposit customer={customerDetails} changeView={setRenderView} />
          )}
          {renderView === 'fundTransfer' && (
            <FundTransfer
              customer={customerDetails}
              changeView={setRenderView}
            />
          )}
          {renderView === 'accStatement' && <Transactions />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
