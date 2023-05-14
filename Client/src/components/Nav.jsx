import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Nav.css"
import jwtDecode from "jwt-decode"
function Nav(props) {
  const navigate = useNavigate()
  const { colorClass } = props;
  const [user, setuser] = useState()
  console.log("passed Color is ", colorClass)
  const style = {

  }
  

  const [token,setToken]=useState ( JSON.parse(localStorage.getItem("userdetails")))
  console.log(token);


  let logout = (e) => {
    localStorage.clear("userdetails")
    navigate('/')
  }
  console.log(user);
  return (
    <>
      {/* class="navbar navbar-expand-lg color " */}
      <nav className={colorClass + " navbar navbar-expand-lg color"}>
        <div class="container-fluid" style={style}>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            {/* <a class="navbar-brand" href="#">Hidden brand</a> */}
            <img src='./assets/logo1.jpg' className='logo'></img>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {token === null ?
                <>
                  <li class="nav-item ">
                    <a class="nav-link text" aria-current="page" href="/userreg">Register</a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link  text " href="/booking">Login</a>
                  </li>
                </>
                :
               
              <>
              <li class="nav-item ">
              <a class="nav-link text" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link  text " href="/booking">Rooms</a>
            </li>
            {/* <li class="nav-item ">
              <a class="nav-link text" href='/details'>View</a>
            </li> */}
            <li class="nav-item ">
              <a class="nav-link text" onClick={logout}>Logout</a>
            </li>
            </>

  }

             
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav