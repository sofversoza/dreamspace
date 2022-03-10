import '../App.css'
import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Layout from "./Layout";
import CreatePost from './CreatePost';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#4A5183',
      light: '#8A91C2',
    },
    secondary: {
      main: '#746F95'
    },
    info: {
      main: '#fff'
    }
  },
  typography: {
    fontFamily: 'Raleway',
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    button: {
      textTransform: 'none',
      fontWeight: 300,
      letterSpacing: 0.2,
      lineHeight: 1.85
    },
    h1: {
      fontSize: 26
    },
    h2: {
      fontSize: 22,
      fontWeight: 300,
    },
    h3: {
      fontSize: 20,
      fontWeight: 300,
    },
    h4: {
      fontSize: 15,
      fontWeight: 200,
    },
    h5: {
      fontSize: 13,
      fontWeight: 400,
    },
    h6: {
      fontSize: 12,
      fontWeight: 300,
      color: '#880406'
    },
    body1: {
      fontSize: 16,
      fontWeight: 200,
    },
    body2: {
      fontSize: 14,
      fontWeight: 200,
    }
  }
})



function App() {
  const [user, setUser] = useState(null)
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user))
      }
    })
  }, [refresh]) 


  if (!user) {
    return (
      <ThemeProvider theme={theme}>
        <LandingPage setUser={setUser} />
      </ThemeProvider>
    ) 
  } 

  return (
    <ThemeProvider theme={theme}>
      <Layout user={user} setUser={setUser}>
        <Routes>
          <Route path='/' element={<Dashboard user={user} refresh={refresh} setRefresh={setRefresh} />} />
          <Route path='/profile' element={<Profile user={user} setUser={setUser} setRefresh={setRefresh} refresh={refresh} />}/>
          <Route path='/createpost' element={<CreatePost user={user} />}/>
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}
 
export default App;