import React from 'react'
import './navbar.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser ,BiUserCircle} from '@fortawesome/free-solid-svg-icons'; 
import  image  from './Travel_App_or_Website_Logo-removebg-preview.png' 
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar container">
      <div className="navbar-brand">
        <a href="/" style={{ color:'white'}}>TRAVEL AIR</a>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>

      </button>
      <ul className={`navbar-nav ${isOpen ? 'open' : ''}`}>

        <li className="nav-item"><a href="/" style={{ marginRight:'50px' }} className="nav-link">Acceuil</a></li>
        <li className="nav-item"><a href="/about" style={{ marginRight:'50px' }} className="nav-link">About</a></li>
        <li className="nav-item"><a href="/Reservatiom" style={{ marginRight:'35vh' }} className="nav-link" >Reservation</a></li>
        <li className='nav-item'><a href="/login" className='nav-link' style={{  marginRight:'15px' }}>  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg> Login | Sign up</a></li>
      </ul>
    </nav>
  
/*  <nav className="navbar">
    <div className="navbar-brand" >
      <a href="/" className='logo'>TRAVEL AIR</a>
    </div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <a href="/" className="nav-link">Acceuil</a>
      </li>
      <li className="nav-item">
        <a href="/about" className="nav-link">About</a>
      </li>
      <li className="nav-item">
        <a href="/Homee" className="nav-link">Reservation</a>
      </li>
    </ul>
  </nav> */
  )
}
