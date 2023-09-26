import React, { useEffect, useState } from 'react';
import { getCustomer, getIFSC, createAccount } from '../utils/auth';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export default function CreateAccount(props) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    customerId: '',
    date: '',
    address: '',
    ifsc: '',
    branch: '',
    type: 'current',
    credit: false,
    debit: false,
    netBanking: false,
  });

  useEffect(() => {
    const data = window.sessionStorage.getItem('customerId');
    getCustomer(data, setFormData);
  }, []);

  const changeAccountType = (name) => {
    console.log(name);
    setFormData((prev) => ({ ...prev, type: name }));
  };

  const handleBlur = (e) => {
    setFormData((prev) => ({ ...prev, address: e.target.value }));
    getIFSC(e.target.value, setFormData);
  };

  return (
    <div
      className="h-screen w-screen flex flex-row"
      style={{ borderLeft: '1.5px solid black' }}
    >
      <div className="px-5">
        <div className="my-7 flex flex-row gap-2">
          <AiOutlineArrowLeft
            className="mt-2 hover:scale-150"
            onClick={() => {
              props.changeView('accountDetails');
            }}
          />
          <div className="font-semibold text-xl">Create Account</div>
        </div>
        <form class="w-full max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-3 mt-7">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                value={formData.firstName}
              />
              {/* <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                value={formData.lastName}
                placeholder="Doe"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-3">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Address
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-address"
                type="text"
                placeholder="Address"
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-customerId"
              >
                Customer ID
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-customerId"
                type="number"
                placeholder="CustomerId"
                value={formData.customerId}
              />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-branch"
              >
                Branch
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-branch"
                type="text"
                placeholder="Ex. ETV"
                value={formData.branch}
              />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-IFSC"
              >
                IFSC
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-IFSC"
                type="text"
                placeholder="Ex. SBIN0000544"
                value={formData.ifsc}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-accType"
              >
                Select Account Type
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-accType"
                  onChange={(e) => changeAccountType(e.target.value)}
                  value={formData.type}
                >
                  <option value="current">Current</option>
                  <option value="savings">Savings</option>
                  <option value="salary">Salary</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-openingDate"
              >
                Opening Date
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-openingDate"
                type="text"
                placeholder="Ex. 12-03-2000"
                value={formData.date}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, date: e.target.value }))
                }
              />
            </div>
          </div>
          <div></div>
        </form>
        <button
          class="bg-transparent hover:bg-black hover:text-white text-black font-semibold mt-4 py-2 px-4 border border-black hover:border-transparent rounded"
          onClick={() => {
            createAccount(formData, props.changeView);
          }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
