import * as React from 'react';
import Nav from '../components/NavBarComponent';
import Sidebar from '../components/Sidebar';
import Typography from '@mui/material/Typography';

export default function Admin(props) {
  return (
    <div>
        <Nav/>
        <div className='admin_container' style={{display:'flex'}}>
            <Sidebar/>
            <Typography variant="h3" gutterBottom>
            Greetings of the day, Admin!
      </Typography>
        </div>
    </div>
  )
}