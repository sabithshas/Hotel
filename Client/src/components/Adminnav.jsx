import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Adminnav.css"
function Adminnav() {
  const navigate = useNavigate()
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem("userdetails")))
  let adminlogout = (e) =>{
    localStorage.clear("userdetails")
    navigate('/')
  }
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Admin</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="/adminreg">Add Room</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">View Rooms</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/viewuser">Users</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={adminlogout} href="">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Adminnav