import React from 'react'
import '../Login/signUp.css'
import { Link } from 'react-router-dom'
export default function signUp() {
  return (
    <div className='photosignup'>
      <nav className='navbar container'>
      <div className="navbar-brand">
        <a href="/" style={{ color:'white' }}>TRAVEL AIR</a>
      </div>
      </nav>
      <div className='boddd'>
        <div className='contttainer' id='main'>
          <div className='signn-up'>
            <form className='ffform' action='#'>
              <h1>Create Account</h1>
              <input className='inppput' type='text' name='txtt' placeholder='Name' id='inputsignup' required=''/>
              <input className='inppput' type='email' name='emaill' placeholder='Email' id='inputsignup' required=''/>
              <input className='inppput' type='password' name='pswdd' placeholder='Password' id='inputsignup' required=''/>
              <button className='btnSignIn'>Sign Up</button>
            </form>
          </div>
          <div className='signn-in'>
        <form action='#' className='formSignInn'></form>
      </div>
          <div className='overlayyy-contttainer'>
            <div className='overlayyy'>
              <div className='overlayyy-left'>
                <h1>Hello,Friend </h1>
                <p>Enter your personal details and start journey with us</p>
                <button id='signUppp' className='btnSignUppp'>Sign up</button>
              </div>
              <div className='overlayyy-right'>
                <h1>Welcome Back!</h1>
                <p>To Keep connected with us please login with your personal info</p>
                <button id='signInnn' type='button' className='btnSignInn'><Link to={"/login"}> Sign In</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

