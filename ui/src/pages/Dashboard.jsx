import React from 'react';
import '../styles/Dashboard.css';
import SideBar from '../components/SideBar';
const Dashboard = () => {
  return (
    <>
      <div className="flex flex-row h-screen w-screen overflow-hidden">
        <SideBar />
        <div>
          <div>Header</div>
          <div>Body Content</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
