import React, { useState } from 'react'
import { Grid, Box, TextField, InputAdornment } from '@mui/material'


function FirstStep({ props }) {
  const { fullName, setFullName, username, setUsername, email, setEmail, dob, setDob, password, setPassword, passwordConfirmation, setPasswordConfirmation } = props;
  
  return (
    <Box component="form" noValidate sx={{ mt:5, display:'flex', flexDirection:'column', alignItems: 'center' }}>
        <TextField required fullWidth autoFocus 
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            id="full_name"
            label="Full name"
            placeholder="Mary Jane Doe"
            autoComplete="name"
            sx={{ mb:2 }}
            color="primary"
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField required fullWidth 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                label="Username"
                color="primary"
                sx={{ mb:2 }}
                InputProps={{ startAdornment: <InputAdornment position="start">@</InputAdornment> }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required fullWidth 
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                id="dob"
                helperText="User must be 18+"
                sx={{ mb:2 }}
                color="primary"
            />
          </Grid>
        </Grid>
        <TextField required fullWidth 
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            label="Email address"
            placeholder="maryjane@example.com"
            autoComplete="email"
            helperText="We'll never share your email"
            sx={{ mb:2 }} 
            color="primary"
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField required fullWidth 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                label="Password"
                sx={{ mb:2 }}
                color="primary"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required fullWidth 
                type="password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                id="password_confirmation"
                label="Confirm password"
                sx={{ mb:2 }}
                color="primary"
            />
          </Grid>
        </Grid>
    </Box>
  )
}

export default FirstStep