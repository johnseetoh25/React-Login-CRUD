import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

export default function AdminTable() {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        fetchItems();
      }, []);

    const fetchItems = async () => {
        try {
          const response = await axios.get('http://localhost:5000/admins');
          setAdmins(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };

    return (
        <Table>
            <TableHead sx={{backgroundColor: '#80dbff'}}>
                <TableRow>
                    <TableCell sx={{width: 'calc(100%/3)', fontWeight: '600', textAlign: 'center', border: '1px solid white'}}>Admin</TableCell>
                    <TableCell sx={{width: 'calc(100%/3)', fontWeight: '600', textAlign: 'center', border: '1px solid white'}}>Password</TableCell>
                    <TableCell sx={{width: 'calc(100%/3)', fontWeight: '600', textAlign: 'center', border: '1px solid white'}}>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {admins.map((admin)=>(
                    <TableRow key={admin.id}>
                        <TableCell>{admin.username}</TableCell>
                        <TableCell>{admin.password}</TableCell>
                        <TableCell><Button variant='outlined'>Edit</Button><Button variant='outlined'>Delete</Button></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        
    );
}
