

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
      <p></p>
      <div className=' container'>
        <h2 className='ml-6'>Connectez-vous</h2>
        <br/>
        <form action="login.php" method="post" class="w-50">
          <div class="form-group mb-3 w-50">
          <input type="email" class="form-control" id="emaill" placeholder="E-mail" name="email" />
          </div>
        <div class="form-group mb-3 w-50">
        <input type="password" class="form-control" id="Mpasse" placeholder="Mot de passe" name="password"/>
        
        </div>
        <div class="btnnlog w-50 ">
          <button type="submit" name="submit" class=" form-control form-control-lg shadow-sm btn btn-primary " >Connexion</button>
        </div>
        
        </form>
      </div>
    </div>
    

  )
}
