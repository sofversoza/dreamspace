import React from 'react'
import logo2 from '../assets/logo2.png'
import { makeStyles } from '@mui/styles'
import { AppBar, Toolbar, Avatar, Typography, Button, Box, IconButton, Stack, InputBase, Badge, Grid } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    appbar: {
      height: 120,
      paddingTop: 25,
      paddingBottom: 30,
    },
    page: {
      background: '#f9f9f9',
      width: '100%',
      position: 'absolute',
      left: '0px',
      right: '0px',
    },
    searchInput: {
      color: "#494A4C",
      padding: 1,
      paddingLeft: 15,
      fontSize: 15
    },
    searchBox: {
      backgroundColor: '#E7EBF4',
      borderRadius: 16,
      width: '100%',
      marginRight: 28,
      marginLeft: 15,
    },
    signout: {
      marginLeft: 'auto',
      paddingRight: 10
    },
    logo: {
      height: 180,
      width: 225,
      cursor: 'pointer',
    }
  }
}) 


function Layout({ children, user, setUser }) {
  const classes = useStyles();
  let navigate = useNavigate();

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(res => {
      if (res.ok) {
        setUser(null)
      }
    })  
  }
  
  return (
    <div>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <img 
            src={logo2}
            alt="logo"
            className={classes.logo}
            onClick={() => navigate('/')}
          />
          <Box>
            <Stack direction="row" spacing={2} sx={{ mr:3 }}>
              <IconButton aria-label="home" color="info"
                onClick={() => navigate('/')}>
                  <HomeIcon />
              </IconButton>
              <IconButton aria-label="bookmark" color="info">
                  <BookmarkIcon />
              </IconButton>
              <IconButton aria-label="notification" color="info">
              <Badge badgeContent={10} color="error">
                  <NotificationsIcon />
                </Badge>   
              </IconButton>
            </Stack>
          </Box>
          
        <Box className={classes.searchBox}> 
          <InputBase
            placeholder="Search..."
            className={classes.searchInput}
            inputProps={{ 'aria-label': 'search' }}
          />
        </Box>
        <Box className={classes.signout}>
         <Stack direction="row" spacing={2} sx={{ mr:3 }}>
              <IconButton aria-label="profile" color="info"
                onClick={() => navigate('/profile')}>
                <AccountCircleIcon />
              </IconButton>
             <IconButton aria-label="settings" color="info">
               <SettingsIcon />
             </IconButton>
            <Tooltip arrow title="Sign out">
            <IconButton onClick={handleLogout} aria-label="signout" color="info">
               <LogoutIcon />
            </IconButton>
           </Tooltip>  
          </Stack>
         </Box>
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ mt:7 }} />

      <div className={classes.page}>
        {children}
      </div>  
    </div>
  )
}
 
export default Layout