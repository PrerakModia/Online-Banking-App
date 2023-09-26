import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { deposit } from '../utils/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Deposit(props) {
  const [accounts, setAccounts] = useState([]);
  const [display, setDisplay] = useState(false);
  const [depositDetails, setDepositDetails] = useState({
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
        <div className="font-semibold text-xl">Deposit Money</div>
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
                setDepositDetails((prev) => ({
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
              setDepositDetails((prev) => ({
                ...prev,
                amount: parseInt(e.target.value),
              }))
            }
          />
        </div>
      )}
      <button
        className="bg-[#6E6D64] text-white py-2 hover:scale-105 duration-300 mb-4 mx-5"
        onClick={(e) => {
          e.preventDefault();
          if (depositDetails.accNumber === '') {
            toast.warn('Please select a account to deposit money into.');
          } else if (depositDetails.amount === 0) {
            toast.warn('Please enter an amount to deposit');
          } else {
            deposit(depositDetails, props.changeView);
          }
        }}
      >
        Deposit
      </button>
    </div>
  );
}

export default Deposit;
