import React from 'react'
import './login.css'
export default function Login() {
  return (
    <div className='photologin'>
      <nav className='navbar container'>
      <div className="navbar-brand">
        <a href="/" style={{ color:'white' }}>TRAVEL AIR</a>
      </div>
      </nav>
      <div className=' container'>
        <div className='signin-signup'>
          <from action="" className='sign-in-signup' >
            <h2 className='title'>sign in</h2>
            <div className='input-field'>
              <i className='fas fas-user'></i>
              <input type="text" placeholder='Username'/>
            </div>
            <div className='input-field'>
              <i className='fas fas-lock'></i>
              <input type="password" placeholder='Password'/>
            </div>
            <input type="submit" value="login" className='btn'/>
            <p className='social-text'>or sign in with social platform</p>
            <div className='social-media'>

              <a href='#' className='social-icon'>
                <i className='fab fa-facebook'></i>
              </a>

              <a href='' className='social-icon'>
                <i className='fab fa-twitter'></i>
              </a>

              <a href='' className='social-icon'>
                <i className='fab fa-google'></i>
              </a>
              
              <a href='' className='social-icon'>
                <i className='fab fa-linkedin-in'></i>
              </a>

            </div>
            </from>
            <from action="" className='sign-up-signup' >
            <h2 className='title'>sign up</h2>
            
            <div className='input-field'>
              <i className='fas fas-user'></i>
              <input type="text" placeholder='Username'/>
            </div>

            <div className='input-field'>
              <i className='fas fas-envelope'></i>
              <input type="text" placeholder='Email'/>
            </div>

            <div className='input-field'>
              <i className='fas fas-lock'></i>
              <input type="password" placeholder='Password'/>
            </div>

            <input type="button" value="sign up" className='btn'/>
            <p className='social-text'>or sign in with social platform</p>
            <div className='social-media'>

              <a href='#' className='social-icon'>
                <i className='fab fa-facebook'></i>
              </a>

              <a href='' className='social-icon'>
              <i className='fab fa-twitter'></i>
              </a>

              <a href='' className='social-icon'>
                <i className='fab fa-google'></i>
              </a>
              
              <a href='' className='social-icon'>
                <i className='fab fa-linkedin-in'></i>
              </a>
              
            </div>
            </from>
        </div>
      </div>
      
    </div>
    

  )
}
