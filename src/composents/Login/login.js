import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div className='photologin'>
      <nav className='navbar container'>
      <div className="navbar-brand">
        <a href="/" style={{ color:'white' }}>TRAVEL AIR</a>
      </div>
      </nav>
      <div className='bodd'>
     <div className='conttainer' id='main'>
      <div className='sign-up'>
        <form className='fform' action='#'>
          <div className='sociall-conttainer'>
            <a href='#' className='sociall'><i className='fab fa-facebook-f'></i></a>
            <a href='#' className='sociall'><i className='fab fa-google-plus-g'></i></a>
            <a href='#' className='sociall'><i className='fab fa-linked-in'></i></a>
          </div>
          <p>or use your email for registration</p>
          <input className='inpput' type='text' name='txt' placeholder='Name' required=''/>
          <input className='inpput' type='email' name='email' placeholder='Email' required=''/>
          <input className='inpput' type='password' name='pswd' placeholder='Password' required=''/>
          <button>Sign Up</button>
        </form>
      </div>
      <div className='sign-in'>
        <form action='#' className='formSignIn'>
          <h1>Sign in</h1>
          <div className='sociall-conttainer'>
            <a href='https://www.facebook.com/' className='sociall'><i className='fab fa-facebook-f'><b>f</b></i></a>
            <a href='#' className='sociall'><i className='fab fa-google-plus-g'><b>G+</b></i></a>
            <a href='#' className='sociall'><i className='fab fa-linked-in'><b>in</b></i></a>
          </div>
          <p>or use your Account</p>
          
          <input className='inpput' type='email' name='email' placeholder='Email' required=''/>
          <input className='inpput' type='password' name='pswd' placeholder='Password' required=''/>
          <a href='#'>Forget your Password ?</a>
          <button className='btnSignIn'>Sign In</button>
        </form>
      </div>
      <div className='overlayy-conttainer'>
        <div className='overlayy'>
          <div className='overlayy-left'>
          </div>
          <div className='overlayy-right'>
            <h1>Hello, Friend</h1>
            <p>Enter your personal details and start journey with us</p>
            <button id='signUp' type='button' className='btnSignUp'><Link to={"/SignUp"}>sign Up</Link></button>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}
