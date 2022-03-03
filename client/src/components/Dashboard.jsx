import React from 'react'
import Navigation from './Navigation'

function Dashboard({ setUser, user }) {
  return (
    <div>
      <Navigation user={user} setUser={setUser} />
      <h1>dashboard</h1>
      <h1>Welcome to dreamspace, @{user.username}</h1>
    </div>
  )
}

export default Dashboard