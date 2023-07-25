import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography>Simple CRUD with 'json-server'</Typography>
                <Box sx={{ flex: '1 1 auto' }}/>
                <Link to={'/add-data'}><Button variant='outlined' sx={{color: 'white', border: '1px solid '}}>Add Data</Button></Link> 
            </Toolbar>
        </AppBar>
    </div>
  );
}

