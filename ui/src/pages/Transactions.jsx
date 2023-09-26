import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAccounts, getTransactions, getStatement } from '../utils/auth';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Datepicker from 'react-tailwindcss-datepicker';

const Transactions = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log('newValue:', newValue);
    setValue(newValue);
  };

  const [accounts, setAccounts] = useState([]);
  const [selectedAccNo, setSelectedAccNo] = useState(-1);
  const [transactions, setTransactions] = useState([]);

  const handleChange = (event) => {
    setSelectedAccNo(event.target.value);
    // getTransactions(event.target.value, setTransactions);
    getStatement(
      event.target.value,
      value.startDate,
      value.endDate,
      setTransactions
    );
  };

  useEffect(()=>{
    if(selectedAccNo!=-1)
      getStatement(
        selectedAccNo,
        value.startDate,
        value.endDate,
        setTransactions
      );
  },[value]);

  useEffect(() => {
    getAccounts(window.sessionStorage.getItem('customerId'), setAccounts);
  }, []);

  return (
    <>
      <div
        className="flex flex-col h-screen"
        style={{ borderLeft: '1.5px solid black' }}
      >
        <div className="mx-5 my-7">
          <label
            for="account"
            class="block mb-2 text-base font-semibold text-gray-900"
          >
            Select an Account:
          </label>
          <select
            onChange={handleChange}
            id="account"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Choose an Account</option>
            {accounts.map((item) => {
              return <option value={item.accNumber}>{item.accNumber}</option>;
            })}
          </select>
        </div>
        <div className="flex flex-row mx-5 gap-3">
          <div className="font-semibold text-base">Select Date Range:</div>
          <div className="-my-2">
            <Datepicker
              containerClassName="w-60"
              primaryColor="teal"
              value={value}
              onChange={handleValueChange}
              showShortcuts
            />
          </div>
        </div>
        <div className="mx-5 mt-5">
          <div class="relative overflow-x-hidden">
            <table class="text-sm text-left text-gray-500">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Credit Account
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Debit Account
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Transaction Type
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
                      <td class="px-6 py-4">{item.amount}</td>
                      <td class="px-6 py-4">{item.txnType}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
