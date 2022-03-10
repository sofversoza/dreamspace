import React, { useState } from 'react'
import { Avatar, Button, TextField, Checkbox, FormControlLabel, Grid } from '@mui/material';
import { Box, Typography, Container, Paper, Alert } from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Link } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  paper: {
    bgColor: '#f9f9f9',
    width: '90%',
    padding: 20,
  },
})

function LoginForm({ setShowLogin, setUser }) {
  const classes = useStyles();
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
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 15, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ p:2, bgcolor: 'info.main', mb:1.5 }}>
          <VpnKeyIcon sx={{ width: 54, height: 55 }} color="primary"/>
        </Avatar>
        <Typography component="h1" variant="h1" color="info.main">
          Sign In
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, marginTop: 4 }}>
          <Paper elevation={0} variant="outlined" className={classes.paper}>
          <TextField onChange={ (e) => setEmail(e.target.value) }
            margin="normal"
            required
            fullWidth
            value={email}
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            color='secondary' 
          />
          <TextField onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
            fullWidth
            value={password}
            label="Password"
            id="password"
            type="password"
            autoComplete="current-password"
            color='secondary'
          />
          <FormControlLabel
            control={ <Checkbox value="remember" color="primary" size="small" /> }
            label="Remember me"
          />

          <Box sx={{ mt:3.5, mb:3.5 }}>
            {errors ? 
              errors.map(error => {
                return (
                  <Alert key={error} severity="error" sx={{ mb:2 }} >
                    {error}
                  </Alert> )
              }) : null
            }
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color='primary'
            endIcon={ <LoginIcon /> }
            sx={{ mt: 3, mb: 2 }} >
            Sign In
          </Button>

          <Grid container sx={{ mt:1}}>
            <Grid item xs>
              <Button size="small">
                Forgot Password?
              </Button>
            </Grid>
            <Grid item>
              <Button color='primary' size="small" onClick={() => setShowLogin(true)}>
                Create an account
              </Button>
            </Grid>
          </Grid>
        </Paper>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginForm