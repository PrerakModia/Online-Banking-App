import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAccounts, getTransactions } from '../utils/auth';
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
    getTransactions(event.target.value, setTransactions);
  };

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
      </div>
    </>
  );
};

export default Transactions;
