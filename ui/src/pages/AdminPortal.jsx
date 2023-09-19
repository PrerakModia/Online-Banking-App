import * as React from 'react';

import Sidebar from '../components/Sidebar';

export default function Admin(props) {
  return (
    <div>
      <div className="admin_container" style={{ display: 'flex' }}>
        <Sidebar />
        {/* <AddUser/> */}
      </div>
    </div>
  );
}
