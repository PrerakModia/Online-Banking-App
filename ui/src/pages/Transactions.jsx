import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {getAccounts, getTransactions} from "../utils/auth";
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

const Transactions = () => {
  const [accounts,setAccounts] = useState([]);
  const [selectedAccNo,setSelectedAccNo] = useState(-1);
  const [transactions, setTransactions] = useState([]);

  const handleChange = (event)=>{
    setSelectedAccNo(event.target.value);
  }

  useEffect(()=>{
    getAccounts(window.sessionStorage.getItem("customerId"),setAccounts); 
  },[]);

  useEffect(()=>{
    if(accounts.length>0){
      setSelectedAccNo(accounts[0].accNumber);
    }
  },[accounts]);

  useEffect(()=>{
    if(selectedAccNo!=-1){
      getTransactions(selectedAccNo, setTransactions);
    }
  },[selectedAccNo])

  return (
    <div>
      
      {selectedAccNo!=-1?
      <div>
      <FormControl sx={{marginTop:"20px"}} fullWidth>
        <InputLabel id="demo-simple-select-label">Account</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedAccNo}
          label="Account Number"
          onChange={handleChange}
        >
          {accounts.map((elem)=>{
            return <MenuItem key={elem.accNumber} value={elem.accNumber}>{elem.accType} - {elem.accNumber}</MenuItem>;
          })}
        </Select>
    </FormControl>
    
    {transactions.length>0?<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Transaction ID</TableCell>
            <TableCell align="right">Transaction Type</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Debit Account</TableCell>
            <TableCell align="right">Credit Account</TableCell>
            <TableCell align="right">Time Stamp</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((row) => (
            <TableRow
              key={row.txnId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.txnId}
              </TableCell>
              <TableCell align="right">{row.txnType}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.debitAccount}</TableCell>
              <TableCell align="right">{row.creditAccount}</TableCell>
              <TableCell align="right">{row.timeStamp}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> : <p>There are no transactions made from this account</p>}
      

    </div>: <p>No accounts are created for this customer</p>}


    </div>
  );
};

export default Transactions;
