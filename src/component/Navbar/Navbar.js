import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbag">
        <div className="container-fluid">
          <NavLink className="navbar-brand title" to="/">CoviPedia</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/symptoms">Symptoms</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/prevention">Prevention</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/vaccination">Vaccination</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/cases">Cases</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
