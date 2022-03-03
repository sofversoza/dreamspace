import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import SequencerMain from "./components/SequencerMain";
import Sidebar from "./components/Sidebar";
import Piano from "./components/Piano";
import './App.css';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me').then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
      }
    })
  }, [])

  if (!user) return <LandingPage onLogin={setUser} />

  return (
    <Router>
      <NavBar user={user} setUser={setUser} />
      <Sidebar />
      <SequencerMain user={user} />
      <Piano />
    </Router>
  );
}

export default App;

/////////////////////////////////////////////////////////////

import React, { useState } from "react";
import {Form, Button} from 'react-bootstrap'

function LoginForm({onLogin, setShowLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password}),
    }).then((resp) => {
      setIsLoading(false);
      if(resp.ok) {
        resp.json().then((user) => onLogin(user));
      } else {
        resp.json().then((error) => {
          setErrors(error.errors)
        });
      }
    });
  }

  return (
    <div className="form-container">
      <div className="d-grid age-100 justify-content-center align-items-center" id="form-container">
        <Form className="text-center rounded p-4 p-sm-3"onSubmit={handleSubmit} id="sign-in-form">
          <Form.Group className="mb-3">
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
              type="text"
              id="username"
              placeholder="Enter Username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {errors ?
            errors.map(e => {
            return (<p className='errors' key={e}>{e}</p>)
            }) : null
          }
          <Button  variant="primary" type="submit" style={{marginTop: '10px', marginBottom: '2rem'}}>
              {isLoading ? "Loading..." : "Login"}
          </Button>
              <p>Don't have an account?</p>
          <Button variant="primary" onClick={() => setShowLogin(false)}>
              Sign Up
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default LoginForm



/////////////////////////////////////////////////////////////

import React, {useState} from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import * as Tone from 'tone'
import logo from '../assets/logo3.png';
import sound from "../assets/test.mp3"


function LandingPage({onLogin}) {
    const [showLogin, setShowLogin] = useState(false)
    const [showForm, setShowForm] = useState(true)

    function clickHandler(e) {
      e.preventDefault()
      setShowForm(false)
   }

   function handleSynth(){
    const player = new Tone.Player({
      url: sound,
      autostart: true,
    });
    const feedbackDelay = new Tone.FeedbackDelay(5, 0.5).toDestination();
    // connect the player to the feedback delay and filter in parallel
    player.connect(feedbackDelay);
    Tone.Master.volume.value = -20
  }

  return (
    <div className="landing-page">
      <style>{'body { background-color: #8d8e8f; }'}</style>
        <div className="submit-container">
          <div className="d-flex justify-content-center align-items-center">
          {showForm ? (
            <img src={logo} className="App-logo" alt="logo" onClick={clickHandler} onMouseOver={handleSynth}/>
            ) : (
            <div>{showLogin ? (
              <SignupForm onLogin={onLogin} setShowLogin={setShowLogin} />
              ) : (
              <LoginForm onLogin={onLogin} setShowLogin={setShowLogin} />
              )}
            </div>
            )}
          </div>
        </div>
    </div>
  )
}

export default LandingPage


/////////////////////////////////////////////////////////////


import React, { useState } from "react";
import {Form, Button} from 'react-bootstrap'

function SignupForm({onLogin, setShowLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((resp) => {
      setIsLoading(false);
      if (resp.ok) {
        resp.json().then((user) => onLogin(user));
      } else {
        resp.json().then((error) => setErrors(error.errors));
      }
    });
  }

  return (
    <div className="form-container">
    <div className="d-grid age-100 justify-content-center align-items-center" id="form-container">
      <Form className="text-center rounded p-4 p-sm-3" onSubmit={handleSubmit} id="sign-in-form">
        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password Confirmation</Form.Label>
          <Form.Control
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            autoComplete="current-password"
          />
        </Form.Group>  
        {errors ?
          errors.map(event => {
            if (event === "Password digest can't be blank") {
              return null
            }
          return (<p className='errors' key={event}>{event}</p>)
          }) :
          null
        }
        <Button type="submit" style={{marginTop: '10px', marginBottom: '2rem'}}>{isLoading ? "Loading..." : "Sign Up"}</Button>
            <p>Already have an account? </p>
        <Button onClick={() => setShowLogin(true)}>
            Log In
        </Button>
      </Form>
    </div>
  </div>
  )
}

export default SignupForm
