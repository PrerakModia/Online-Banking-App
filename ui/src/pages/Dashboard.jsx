import React from 'react';
import '../styles/Dashboard.css';
import SideBar from '../components/SideBar';
import AccountDetails from '../components/AccountDetails';
const Dashboard = () => {
  return (
    <>
      <div className="flex flex-row w-screen h-screen">
        <SideBar />
        <AccountDetails />
      </div>
    </>
  );
};

export default Dashboard;
