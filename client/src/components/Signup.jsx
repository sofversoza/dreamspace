import React, { useState, useEffect } from 'react'
import { Box, Button, Typography, TextField, Container, Avatar, Grid, InputAdornment, Paper } from '@mui/material'
import { FormControl, FormLabel, Radio, RadioGroup, FormControlLabel, Divider, Alert } from '@mui/material'
import { makeStyles } from '@mui/styles'
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';


const useStyles = makeStyles({
  paper: {
    bgColor: '#f9f9f9',
    width: '90%',
    padding: 20,
  }
})

function Signup({ setUser, setShowLogin }) {
  const classes = useStyles();
  const [errors, setErrors] = useState([]);
  const [value, setValue] = useState({
    fullName: '',
    username: '',
    dob: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    avatar: '',
    pronouns: '',
    country: '',
    website: '',
    bio: ''
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          ...value,
          full_name: value.fullName,
          password_confirmation: value.passwordConfirmation,
      }),
    }).then(res => {
      if (res.ok) {
        res.json().then(user => setUser(user));
      } else {
        res.json().then(err => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
     <Container component="main" maxWidth="md" sx={{ mb:10 }}>  
     <Box sx={{ marginTop: 7, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h1" sx={{ mb:3 }} color="info.main">
          Create an account
        </Typography>
      </Box>

     <Box sx={{ marginTop:1, marginBottom:1 , display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
     <Paper className={classes.paper} elevation={0} variant="outlined">
     <Typography variant="h2">
        Credentials
     </Typography>
      <Grid container spacing={2} sx={{ mt:1, mb:2}}>
          <Grid item sm={6} >
            <TextField
                autoFocus
                color="secondary"
                fullWidth
                required
                variant="outlined"
                size="small"
                label="Full name"
                name="fullName"
                value={value.fullName}
                onChange={e => setValue({...value, fullName: e.target.value})}
            />
            </Grid>
            <Grid item sm={6}>
            <TextField
                color="secondary"
                fullWidth
                required
                variant="outlined"
                size="small"
                label="Username"
                name="username"
                value={value.username}
                onChange={e => setValue({...value, username: e.target.value})}
                InputProps={{ startAdornment: <InputAdornment position="start">@</InputAdornment> }}
            />
          </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mb:2}}>
        <Grid item sm={6}>
            <TextField
                color="secondary"
                fullWidth
                required
                variant="outlined"
                size="small"
                label="Email"
                name="email"
                value={value.email}
                onChange={e => setValue({...value, email: e.target.value})}
            />
        </Grid>   
        <Grid item sm={6}></Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mb:2}}>
        <Grid item sm={6}>
            <TextField
                color="secondary"
                fullWidth
                required
                variant="outlined"
                size="small"
                type="password"
                label="Password"
                name="password"
                helperText="Must be atleast 6 characters"
                value={value.password}
                onChange={e => setValue({...value, password: e.target.value})}
            />
        </Grid> 
        <Grid item sm={6}>
            <TextField
                color="secondary"
                fullWidth
                required
                variant="outlined"
                size="small"
                type="password"
                label="Confirm Password"
                name="passwordConfirmation"
                value={value.passwordConfirmation}
                onChange={e => setValue({...value, passwordConfirmation: e.target.value})}
            />
        </Grid>    
      </Grid>
      <Divider sx={{ mt:4 }} />

      <Typography variant="h2" sx={{ mt:4 }}>
        Profile Setup
      </Typography>
      <Grid container spacing={2} sx={{ mb:2, mt:0.2 }}>
        <Grid item sm={12}>
            <FormControl>
              <FormLabel>Pronouns</FormLabel>
               <RadioGroup row
                  name="pronouns"
                  value={value.pronouns}
                  onChange={e => setValue({...value, pronouns: e.target.value})} >
                    <FormControlLabel value="she/her" control={<Radio size="small" color="secondary" />} label="she/her" />
                    <FormControlLabel value="he/him" control={<Radio size="small" color="secondary" />} label="he/him" />
                    <FormControlLabel value="they/them" control={<Radio size="small" color="secondary" />} label="they/them" />
               </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item sm={6} sx={{ mt:1 }}>
            <TextField 
                required 
                fullWidth 
                type="date"
                value={value.dob}
                onChange={e => setValue({...value, dob: e.target.value})}
                name="dob"
                helperText="User must be 18+"
                color="secondary"
                size="small"
            />
        </Grid>
        <Grid item sm={6} sx={{ mt:1 }}>
          <TextField
            color="secondary"
            fullWidth
            required
            variant="outlined"
            size="small"
            name="country"
            value={value.country}
            onChange={e => setValue({...value, country: e.target.value})}
            label="Country or City"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mb:2 }}>
        <Grid item sm={6}>
          <TextField
            color="secondary"
            fullWidth
            required
            variant="outlined"
            size="small"
            label="Website"
            name="website"
            value={value.website}
            onChange={e => setValue({...value, website: e.target.value})}
            placeholder="www.myportfolio.com"
            helperText="Portfolio or Social media links"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mb:2}}>
        <Grid item sm={12}>
          <TextField
            color="secondary"
            fullWidth
            required
            variant="outlined"
            size="small"
            label="Bio"
            name="bio"
            value={value.bio}
            onChange={e => setValue({...value, bio: e.target.value})}
            multiline
            rows={2}
            placeholder="A few words about you"
            helperText="250 characters max"
          />
        </Grid>
      </Grid>
      
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

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt:3, mb:2 }}>
        <Button onClick={() => setShowLogin(false)} sx={{ mr:1 }}>
          Back to Login
        </Button>
        <Button variant="contained" type="submit" endIcon={ <LoginIcon /> }>
          Submit & Sign in
        </Button>
      </Box>

     </Paper>
     </Box>  
     </Container>  
    </form>
  )
}

export default Signup