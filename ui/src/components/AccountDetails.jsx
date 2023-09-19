import { useEffect, useState } from 'react';
import { getAccounts } from '../utils/auth';

const AccountDetails = (props) => {
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    getAccounts(window.sessionStorage.getItem('customerId'), setAccounts);
  }, []);

  return (
    <div
      className="h-screen w-screen flex flex-col"
      style={{ borderLeft: '1.5px solid black' }}
    >
      <div className="font-semibold p-5 text-xl">Current Balance</div>
      <div className="flex flex-row gap-3 items-center">
        <div className="font-bold text-6xl px-5 py-2 font-serif">
          $132,281.15
        </div>
        <button
          className="text-black rounded-md hover:scale-105 duration-300 py-1 px-3"
          style={{ border: '1px solid black', borderRadius: '0.375rem' }}
          onClick={() => {
            props.changeView('withdraw');
          }}
        >
          Withdraw
        </button>
        <button
          className="bg-black text-white rounded-md hover:scale-105 duration-300 py-1 px-3"
          onClick={() => {
            props.changeView('deposit');
          }}
        >
          Deposit
        </button>
        <button
          className="text-black rounded-md hover:scale-105 duration-300 py-1 px-3"
          style={{ border: '1px solid black', borderRadius: '0.375rem' }}
          onClick={() => {
            props.changeView('fundTransfer');
          }}
        >
          Fund Transfer
        </button>
      </div>
      <hr className="m-5" />
      <div className="px-5 text-xl font-semibold">{`Welcome ${props.customer.firstName} ${props.customer.lastName},`}</div>

      <div className="flex flex-row">
        <div>
          <div className="px-5 pt-5 text-base font-normal">
            Approval Pending Accounts:
          </div>

          <div class="relative overflow-x-hidden pt-5 border">
            <table class="table-fixed text-sm text-left text-gray-500">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Account Number
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Opening Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((item) => {
                  return item.isDisabled ? (
                    <tr class="bg-white border-b  hover:bg-gray-50 ">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.accNumber}
                      </th>
                      <td class="px-6 py-4">
                        {item.accType !== '' ? item.accType : 'savings'}
                      </td>
                      <td class="px-6 py-4">18-09-2023</td>
                    </tr>
                  ) : null;
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div className="px-5 pt-5 text-base font-normal">
            Approved Accounts:
          </div>

          <div class="relative overflow-x-hidden pt-5 border">
            <table class="table-fixed text-sm text-left text-gray-500">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Account Number
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Opening Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((item) => {
                  return !item.isDisabled ? (
                    <tr class="bg-white border-b  hover:bg-gray-50 ">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.accNumber}
                      </th>
                      <td class="px-6 py-4">
                        {item.accType !== '' ? item.accType : 'savings'}
                      </td>
                      <td class="px-6 py-4">18-09-2023</td>
                    </tr>
                  ) : null;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
