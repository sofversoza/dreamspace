import React, { useState } from 'react'
import landing from '../assets/landing.png'
import bglogoo from '../assets/bglogoo.png'
import { makeStyles } from '@mui/styles'
import LoginForm from './LoginForm'
import Signup from './Signup'
import { Link, Outlet } from 'react-router-dom'
import { Typography, Box } from '@mui/material';


const useStyles = makeStyles({
  bgimg: {
    backgroundImage: `url(${landing})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    position: 'fixed',
    width: '100%',
    left: '0px',
    top: '0px'
  },
  bglogoo: {
    height: '780px',
    width: '950px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    paddingRight: '65px',
    cursor: 'pointer', 
    '&:hover': {
      opacity: '0.7',
    }
  },
  subtext: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'default',
  }
})


function LandingPage({ setUser }) {
  const [showLogo, setShowLogo] = useState(true)
  const [showLogin, setShowLogin] = useState(false)
  const classes = useStyles()

  function handleClick(e) {
    e.preventDefault();
    setShowLogo(false)
  }


  return (
    <div className={classes.bgimg}>
      {/* <Box> */}
        {showLogo ? (
          <>
            <img src={bglogoo} onClick={handleClick} alt='logo' className={classes.bglogoo}/>
            <Typography color="info.main" variant='body2' component="h4" onClick={handleClick} className={classes.subtext} sx={{mt:6}}>
              Click logo to sign in or sign up
            </Typography> 
          </>
        ) : (
          <> 
          {showLogin ? (
            <Signup setUser={setUser} setShowLogin={setShowLogin} />
          ) : (
            <LoginForm setUser={setUser} setShowLogin={setShowLogin} />
          )}
          </> 
        )}
        {/* </Box> */}
    </div>
  )
}

export default LandingPage