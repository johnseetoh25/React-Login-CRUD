import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.get('http://localhost:5000/admins');
            const admins = response.data;
            const foundAdmin = admins.find((admin) => admin.username === username && admin.password === password);
            if (foundAdmin) {
                // TODO: Handle successful login (e.g., store token, redirect to protected route)
                console.log('Login successful');
                navigate('/dashboard');
            } else {
                setError('Invalid username or password');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

    return (
        <div>
            <h2>Login</h2>
            <TextField
                label="Admin Name"
                name="adminName"
                sx={{ marginTop: 2, marginBottom: 1 }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <TextField
                label="Password"
                name="password"
                type="password"
                sx={{ marginTop: 1, marginBottom: 2 }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <Button onClick={handleLogin}>Login</Button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}
