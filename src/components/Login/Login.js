import React, { useState } from "react";
import {InputAdornment, Typography, Toolbar, Box, Button, Card, FormControl, TextField, InputLabel, Input, FormHelperText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
      <Box sx={{background: 'rgb(30, 52, 105)', margin: '50px', borderRadius: '5px'}}>
        <Toolbar> 
          <Typography variant="h3" sx={{ flexGrow: 1, color: 'white'}}>
            DigiStrip
          </Typography>
        </Toolbar>
        <Box sx={{margin: '50px'}}>
          <Card sx={{display: 'flex', flexDirection: 'column', height: '25vh', width: '25vw', alignItems: 'center', justifyContent: 'center'}}>
            <TextField
            id="input-with-icon-username"
            label="Username"
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
            sx={{margin: '10px'}}
            InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),}}
            variant="outlined"
            />
             <TextField
            id="input-with-icon-password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            InputProps={{
            startAdornment: (
              <InputAdornment position="start" onClick={() => handleClickShowPassword()}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
            ),}}
            variant="outlined"
            />
            <Link to='/dashboard'>
              <Button type="button" color="primary">
                Log in
              </Button>
            </Link>
          </Card>
        </Box>
      </Box>
      );
}

export default Login

