import * as React from 'react';
import Nav from '../components/NavBarComponent';
import Sidebar from '../components/Sidebar';
import AddUser from '../components/AddUser';

export default function Admin(props) {
  return (
    <div>
        <Nav/>
        <div className='admin_container' style={{display:'flex'}}>
            <Sidebar/>
            {/* <AddUser/> */}
        </div>
    </div>
  )
}