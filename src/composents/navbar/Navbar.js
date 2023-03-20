import React from 'react'
import './navbar.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" style={{ color:'white' }}>TRAVEL AIR</a>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>

      </button>
      <ul className={`navbar-nav ${isOpen ? 'open' : ''}`}>

        <li className="nav-item"><a href="/" className="nav-link">Acceuil</a></li>
        <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
        <li className="nav-item"><a href="/Reservatiom" className="nav-link" >Reservation</a></li>
        <li className='nav-item'><a href="/login" className='nav-link' style={{ fontWeight:'normal' }}><FontAwesomeIcon icon={faUser} /> Login|Sign up</a></li>
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
