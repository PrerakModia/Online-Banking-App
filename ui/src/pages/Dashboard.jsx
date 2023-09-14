import { useEffect, useState } from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [customerId, setCustomerId] = useState(0);

  useEffect(() => {
    setCustomerId(window.sessionStorage.getItem("customerId"));
  }, []);
  return (
    <>
      <div className="Dashboard_container">
        <p>Hello customer with customerId: {customerId}</p>
      </div>
      <button
        onClick={(e) => {
          window.location.assign("/createaccount");
        }}
      >
        Create new Account
      </button>
    </>
  );
};

export default Dashboard;
