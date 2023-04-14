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
      <div className='boooody'>
              <div className=' container1'>
        <div className='signin-signup'>
          <from action="" className='sign-in-signup' >
            <h2 className='title'>sign in</h2>
            <div className='input-field1'>
              <i className='fas fas-user'></i>
              <input className='innput' type="text" placeholder='Username'/>
            </div>
            <div className='input-field1'>
              <i className='fas fas-lock'></i>
              <input className='innput' type="password" placeholder='Password'/>
            </div>
            <input className='innput btn' type="submit" value="login" />
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
            
            <div className='input-field1'>
              <i className='fas fas-user'></i>
              <input className='innput' type="text" placeholder='Username'/>
            </div>

            <div className='input-field1'>
              <i className='fas fas-envelope'></i>
              <input className='innput' type="text" placeholder='Email'/>
            </div>

            <div className='input-field1'>
              <i className='fas fas-lock'></i>
              <input className='innput' type="password" placeholder='Password'/>
            </div>

            <input className='innput btn' type="button" value="sign up" />
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
      
    </div></div>

    

  )
}
