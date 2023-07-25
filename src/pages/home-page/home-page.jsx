import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div> 
        <h2>Home Page</h2>
        <Link to={'/login'}><Button variant='outlined'>Sign In</Button></Link>  
    </div>
  );
}
