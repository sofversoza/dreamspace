import React from 'react'


function Navigation({ setUser }) {
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
    <header>
      <p>navbar here</p>
      <button onClick={handleLogout}>Sign out</button>
    </header>
  );
}

export default Navigation