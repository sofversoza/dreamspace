import React, { useState } from 'react'
import { Box, Stepper, Step, StepLabel, StepButton, Button, Typography, TextField, Container, Avatar, Grid } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { InputAdornment, Input,  } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FirstStep from './stepper/FirstStep'
import SecondStep from './stepper/SecondStep'
import Confirm from './stepper/Confirm'


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

function SignupForm({ setUser, setShowLogin }) {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [errors, setErrors] = useState([]);

  ///// ATTRIBUTES FOR FIRST STEP
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  ///// ATTRIBUTES FOR SECOND STEP
  const [avatar, setAvatar] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [country, setCountry] = useState("");
  const [website, setWebsite] = useState("");
  const [bio, setBio] = useState("");
 
  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name: fullName,
        username,
        dob,
        email,
        password,
        password_confirmation: passwordConfirmation,
        avatar,
        pronouns,
        country,
      }),
    }).then(res => {
      if (res.ok) {
        res.json().then(user => setUser(user));
      } else {
        res.json().then(err => setErrors(err.errors));
      }
    });
  }

  const labels = ['Credentials', 'Profile Set Up', 'Confirmation'];

  function handleSteps(step: number) {
    switch (step) {
      case 0:
        return <FirstStep props={ fullName, setFullName, username, setUsername, email, setEmail, dob, setDob, password, setPassword, passwordConfirmation, setPasswordConfirmation } />
      case 1:
        return <SecondStep props={ pronouns, setPronouns, avatar, setAvatar, country, setCountry, bio, setBio, website, setWebsite } />
      case 2:
        return <Confirm props={ fullName, username, email, dob, country, bio, website, pronouns } />
      default:
        throw new Error('Unknown step')
    }
  }

  function handleNext() {
    if (activeStep < 2)
      setActiveStep(currentStep => currentStep + 1);
  }

  function handleBack() {
    if (activeStep !== 0)
      setActiveStep(currentStep => currentStep - 1);
  }

  return (
  <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="sm" sx={{ alignItems: 'center' }}> 
      
      <Box sx={{ marginTop: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5" sx={{ mb: 4 }}>
          Create an account
        </Typography>
      </Box>

      <Stepper activeStep={activeStep} alternativeLabel fullWidth>
        {labels.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {handleSteps(activeStep)}

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, mb: 5 }}>
          <Button onClick={handleBack} disabled={activeStep === 0} sx={{ mr: 1 }} >
            Back
          </Button>
          <Button onClick={handleNext} variant="contained">
            { activeStep === labels.length - 1 ? 'Confirm' : 'Next' }
          </Button>
        </Box>
        
    </Container>
  </ThemeProvider> 
 )
}

export default SignupForm