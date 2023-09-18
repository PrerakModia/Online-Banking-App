import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { withdraw } from '../utils/auth';

function Withdraw(props) {
  const [accounts, setAccounts] = useState([]);
  const [balance, setBalance] = useState(0);
  const [display, setDisplay] = useState(false);
  const [withdrawDetails, setWithdrawDetails] = useState({
    accNumber: '',
    amount: 0,
  });

  useEffect(() => {
    console.log(props.customer.accounts);
    setAccounts([...props.customer.accounts]);
  }, []);

  return (
    <div
      className="flex flex-col h-screen"
      style={{ borderLeft: '1.5px solid black' }}
    >
      <div className="mx-5 my-7 flex flex-row gap-2">
        <AiOutlineArrowLeft
          className="mt-2 hover:scale-150"
          onClick={() => {
            props.changeView('accountDetails');
          }}
        />
        <div className="font-semibold text-xl">Withdraw Money</div>
      </div>
      <div className="mx-5 my-2">
        <label
          for="accounts"
          class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
        >
          Select an Account
        </label>
        <select
          onChange={(e) => {
            accounts.forEach((item) => {
              if (item.accNumber == e.target.value) {
                setBalance(item.balance);
                setWithdrawDetails((prev) => ({
                  ...prev,
                  accNumber: item.accNumber,
                }));
                setDisplay(true);
              }
            });
          }}
          id="accounts"
          class="border border-black text-gray-900 text-sm focus:border-blue-500 block w-full p-2.5"
        >
          <option>Choose an Account</option>
          {accounts.map((item) => (
            <option value={item.accNumber}>{item.accNumber}</option>
          ))}
        </select>
      </div>
      {display && (
        <div className="mx-5 my-2 font-semibold">{`Balance Remaing: $${balance}`}</div>
      )}
      {display && (
        <div className="mx-5 my-2">
          <label
            for="amount"
            class="block mb-2 text-base font-semibold text-gray-900 dark:text-white"
          >
            Enter the Amount:
          </label>
          <input
            id="amount"
            className="border border-gray-500 w-full p-2.5"
            onChange={(e) =>
              setWithdrawDetails((prev) => ({
                ...prev,
                amount: parseInt(e.target.value),
              }))
            }
          />
        </div>
      )}
      <button
        className="bg-[#6E6D64] text-white py-2 hover:scale-105 duration-300 mb-4 mx-5"
        onClick={() => {
          withdraw(withdrawDetails, props.changeView);
        }}
      >
        Withdraw
      </button>
    </div>
  );
}

export default Withdraw;
