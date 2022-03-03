// import '../App.css'
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Outlet, Routes, Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import LandingPage from './LandingPage'
import Dashboard from './Dashboard'
import Navigation from './Navigation'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user))
      }
    })
  }, [])

  if (!user) return <LandingPage setUser={setUser} />

  return (
    <Routes>
      <Route path='/' element={<Dashboard user={user} setUser={setUser} />}/>
    </Routes>
  );
}

export default App;