import React, { useEffect, useState } from 'react';
import '../styles/Dashboard.css';
import SideBar from '../components/SideBar';
import AccountDetails from '../components/AccountDetails';
import { getCustomer } from '../utils/auth';
import Withdraw from './Withdraw';
import Deposit from './Deposit';
import FundTransfer from './FundTransfer';
import Transactions from './Transactions';

const Dashboard = () => {
  const [customerDetails, getCustomerDetails] = useState([]);
  const [renderView, setRenderView] = useState('accountDetails');

  useEffect(() => {
    console.log(window.sessionStorage.getItem('customerId'));
    getCustomer(
      window.sessionStorage.getItem('customerId'),
      getCustomerDetails
    );
  }, []);
  return (
    <>
      <div className="flex flex-row w-screen h-screen">
        <SideBar changeView={setRenderView} />
        <div className="max-w-3xl">
          {renderView === 'accountDetails' && (
            <AccountDetails
              customer={customerDetails}
              changeView={setRenderView}
            />
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
