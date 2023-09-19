import { useEffect, useState } from 'react';
import { getAdmin } from '../utils/auth';

const AdminDetails = () => {
  const [adminDetails, setAdminDetails] = useState([]);
  useEffect(() => {
    getAdmin(window.sessionStorage.getItem('adminId'), setAdminDetails);
  }, []);

  return (
    <div
      className="h-screen w-screen flex flex-col"
      style={{ borderLeft: '1.5px solid black' }}
    >
      <div>{adminDetails.firstName}</div>
      <div>{adminDetails.lastName}</div>
      <div>{adminDetails.mobileNo}</div>
      <div>{adminDetails.emailId}</div>
      <div>{adminDetails.password}</div>
    </div>
  );
};

export default AdminDetails;
