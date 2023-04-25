import {useState} from 'react'
import '../Login/signUp.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
export default function SignUp() {
  const navigator = useNavigate();
  const [name1,setname] = useState();
  const [email1,setemail] = useState();
  const [password1,setpassword] = useState();
  const signupoc = ()=>{axios.post('http://localhost:8000/api/signup', {
    name: name1,
    email: email1,
    password: password1
  })
  .then((res) => {
    alert(res.data.message)
    navigator('/'); // This will navigate to the home page
  })
  .catch(error => {
    console.log(error);
  });
  
  }
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
          <form className='ffform' action='#' onSubmit={(e) => {e.preventDefault();}}>

              <h1>Create Account</h1>
              <input className='inppput' type='text' name='name' value={name1} placeholder='Name' id='inputsignup1' required='' onChange={(e)=>setname(e.target.value)}/>
              <input className='inppput' type='email' name='email' value={email1} placeholder='Email' id='inputsignup2' required='' onChange={(e)=>setemail(e.target.value)} />
              <input className='inppput' type='password' name='password'value={password1} placeholder='Password' id='inputsignup3' required='' onChange={(e)=>setpassword(e.target.value)}/>
              <button className='btnSignIn' onClick={signupoc}>Sign Up</button>
            </form>
          </div>
          <div className='signn-in'>
        <form action='#' className='formSignInn'></form>
      </div>
          <div className='overlayyy-contttainer'>
            <div className='overlayyy'>
              <div className='overlayyy-left'>
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

