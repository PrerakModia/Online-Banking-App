import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { getCustomerTransactions } from '../utils/auth';

const AllTransactions = (props) => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    getCustomerTransactions(
      window.sessionStorage.getItem('customerId'),
      setTransactions
    );
  }, []);
  return (
    <div
      className="h-screen w-screen flex flex-col"
      style={{ borderLeft: '1.5px solid black' }}
    >
      <div className="mx-5 my-7 flex flex-row gap-2">
        <AiOutlineArrowLeft
          className="mt-2 hover:scale-150"
          onClick={() => {
            props.changeView('accountDetails');
          }}
        />
        <div className="font-semibold text-xl">All Transactions</div>
      </div>

      <div className="mx-5">
        <div class="relative overflow-x-hidden">
          <table class="text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Credit Account Number
                </th>
                <th scope="col" class="px-6 py-3">
                  Debit Acccount Number
                </th>
                <th scope="col" class="px-6 py-3">
                  Transaction Type
                </th>
                <th scope="col" class="px-6 py-3">
                  Amount
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((item) => {
                console.log(item);
                return (
                  <tr class="bg-white border-b">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.creditAccount}
                    </th>
                    <td class="px-6 py-4">{item.debitAccount}</td>
                    <td class="px-6 py-4">{item.txnType}</td>
                    <td class="px-6 py-4">{item.amount}</td>
                    <td class="px-6 py-4">{item.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllTransactions;
