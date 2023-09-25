import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { getAccounts, approveAccount } from '../utils/auth';

const CustomerAccounts = (props) => {
  const [accountDetails, setAccountDetails] = useState([]);
  const [searchCustomer, setSearchCustomer] = useState('');
  const [number, setNumber] = useState(0);
  useEffect(() => {
    const customerId = window.sessionStorage.getItem('customerSearch');
    if (customerId) {
      getAccounts(customerId, setAccountDetails);
      setSearchCustomer(customerId);
    }
  });

  return (
    <div
      className="flex flex-col h-screen"
      style={{ borderLeft: '1.5px solid black' }}
    >
      <div className="mx-5 my-7 flex flex-row gap-2">
        <AiOutlineArrowLeft
          className="mt-2 hover:scale-150"
          onClick={() => {
            window.sessionStorage.removeItem('customerSearch');
            props.changeView('adminDetails');
          }}
        />
        <div className="font-semibold text-xl">Customer Accounts</div>
      </div>
      <div className="mx-5">
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
              onChange={(e) => setSearchCustomer(e.target.value)}
              value={searchCustomer}
            />
          </div>
          <div class="w-full md:w-1/2 px-3 py-2.5 mb-6 md:mb-0">
            <button
              class="bg-transparent hover:bg-black hover:text-white text-black font-semibold mt-4 py-2 px-4 border border-black hover:border-transparent rounded"
              onClick={() => {
                getAccounts(searchCustomer, setAccountDetails);
              }}
            >
              Search Accounts
            </button>
          </div>
        </div>
        {accountDetails.length > 0 ? (
          <>
            <div className="pt-5 text-base font-normal">Customer Accounts</div>
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
                    <th scope="col" className="px-6 py-3">
                      Balance
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {accountDetails.map((item) => {
                    return (
                      <tr class="bg-white border-b  hover:bg-gray-50 ">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.accNumber}
                        </th>
                        <td class="px-6 py-4">{item.accType}</td>
                        <td class="px-6 py-4">{item.openingDate}</td>
                        <td class="px-6 py-4">{item.balance}</td>
                        <td class="px-6 py-4">
                          <a
                            href="#"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            onClick={() =>
                              approveAccount(item.accNumber, setNumber)
                            }
                          >
                            {item.isDisabled ? 'Approve' : 'Block'}
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default CustomerAccounts;
