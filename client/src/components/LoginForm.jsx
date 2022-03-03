import React, { useState } from 'react'
import { Avatar, Button, TextField, Checkbox, FormControlLabel, Grid } from '@mui/material';
import { Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import SignupForm from './SignupForm'

const theme = createTheme({
  palette: {
    primary: {
      main: '#7e57c2',
      contrastText: '#fff'
    },
    secondary: {
      main: '#311b92',
      contrastText: '#fff',
    }
  }    
});

function LoginForm({ setShowLogin, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({ email, password }),
    })
    .then(res => {
      if(res.ok) {
        res.json().then(user => setUser(user))
      } else {
        res.json().then(error => {
          setErrors(error.errors)
        })
      }
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField onChange={ (e) => setEmail(e.target.value) }
              margin="normal"
              required
              fullWidth
              type="text"
              value={ email }
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
              color='primary' 
            />
            <TextField onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              fullWidth
              type="password"
              value={ password }
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color='primary'
            />
            <FormControlLabel
              control={ <Checkbox value="remember" color="primary" /> }
              label="Remember me"
            />

            {errors ? 
              errors.map(error => {
                return (<p className='errors' key={error}>{error}</p>)
              }) : null
            }

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='secondary'
              sx={{ mt: 3, mb: 2 }} >
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
               <Link to="#">
                <Typography variant="body2" color='primary'>
                  Forgot Password?
                </Typography>
               </Link>
              </Grid>
              <Grid item>
                <Typography variant="body2" color='primary'>
                  Don't have an account? Sign Up
                </Typography>
                <Button color='secondary' onClick={() => setShowLogin(true)}>
                 Sign up
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default LoginForm