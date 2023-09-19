import { useEffect, useState } from 'react';
import { getPendingAccounts, approveAccount } from '../utils/auth';

const ToggleAccounts = () => {
  const [pendingAccounts, setPendingAccounts] = useState([]);
  const [number, setNumber] = useState(0);
  useEffect(() => {
    getPendingAccounts(setPendingAccounts);
  }, [number]);
  return (
    <div
      className="h-screen w-screen flex flex-col"
      style={{ borderLeft: '1.5px solid black' }}
    >
      <div className="mx-5 my-7 font-semibold text-xl">Approve Accounts</div>
      <div className="mx-5">
        <div class="relative overflow-x-hidden">
          <table class="text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Account Number
                </th>
                <th scope="col" class="px-6 py-3">
                  Acccount Type
                </th>
                <th scope="col" class="px-6 py-3">
                  Branch
                </th>
                <th scope="col" class="px-6 py-3">
                  IFSC
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {pendingAccounts.map((item) => {
                console.log(item);
                return (
                  <tr class="bg-white border-b">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.accNumber}
                    </th>
                    <td class="px-6 py-4">
                      {item.accType === '' ? 'salary' : item.accType}
                    </td>
                    <td class="px-6 py-4">{item.branch}</td>
                    <td class="px-6 py-4">{item.ifscCode}</td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() =>
                          approveAccount(item.accNumber, setNumber)
                        }
                      >
                        Approve
                      </a>
                    </td>
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

export default ToggleAccounts;
