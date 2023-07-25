import React from 'react';
import AdminTable from '../../components/tables/admins-table/admin-table';
import Navbar from '../../components/navbar/navbar';

export default function Dashboard() {  

  return (
    <div>
      <Navbar/>
        <h2>Admin Data</h2>
        <AdminTable/>
    </div>
  )
}
