import React from 'react';

import '../styles/withdraw.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
function Withdraw() {
  return (
    <div>
      <div className="admin_container" style={{ display: 'flex' }}>
        <div className="withdraw_body" style={{ width: '100%' }}>
          <div className="form_container" align="center">
            <TextField
              id="outlined-basic"
              sx={{ p: 2 }}
              variant="outlined"
              placeholder="Enter Account number of user"
              required
            />
            <br />
            <Button
              variant="contained"
              size="small"
              style={{ alignSelf: 'center' }}
            >
              Add User
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
