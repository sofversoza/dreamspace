import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { Link, Outlet } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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


function LandingPage({ setUser }) {
  const [showLogo, setShowLogo] = useState(true)
  const [showLogin, setShowLogin] = useState(false)

  function handleClick(e) {
    e.preventDefault();
    setShowLogo(false)
  }

  return (
    <div>
     <ThemeProvider theme={theme}>
     <h1>Landing Page</h1>
      {showLogo ? (
        <p onClick={handleClick}>Logo here--click to log in</p> 
      ) : (
        <> 
         {showLogin ? (
           <SignupForm setUser={setUser} setShowLogin={setShowLogin} />
         ) : (
           <LoginForm setUser={setUser} setShowLogin={setShowLogin} />
         )}
        </> 
      )}
      </ThemeProvider>
    </div>
  )
}

export default LandingPage