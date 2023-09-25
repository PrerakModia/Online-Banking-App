import { useEffect, useState } from 'react';
import { getAdmin, getCustomer } from '../utils/auth';
import AdminCustomer from './AdminCustomer';

const AdminDetails = (props) => {
  const [adminDetails, setAdminDetails] = useState({});
  const [customer, setCustomer] = useState({});
  const [customerId, setCustomerId] = useState('');

  useEffect(() => {
    getAdmin(window.sessionStorage.getItem('adminId'), setAdminDetails);
  }, []);

  return (
    <div
      className="h-screen w-screen flex flex-col px-5"
      style={{ borderLeft: '1.5px solid black' }}
    >
      <div className="py-7 text-xl font-semibold">{`Welcome ${adminDetails.firstName} ${adminDetails.lastName},`}</div>
      <div class="flex flex-wrap -mx-3 mb-3 w-full max-w-lg">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Customer ID
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Ex. 1"
            onChange={(e) => setCustomerId(e.target.value)}
            value={customerId}
          />
        </div>
        <div class="w-full md:w-1/2 px-3 py-2.5 mb-6 md:mb-0">
          <button
            class="bg-transparent hover:bg-black hover:text-white text-black font-semibold mt-4 py-2 px-4 border border-black hover:border-transparent rounded"
            onClick={() => {
              getCustomer(customerId, setCustomer);
            }}
          >
            Search Customer
          </button>
        </div>
      </div>
      <hr className="my-5" />
      {customer.firstName && (
        <AdminCustomer
          customerDetails={customer}
          changeView={props.changeView}
        />
      )}
    </div>
  );
};

export default AdminDetails;
