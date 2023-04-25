import React from 'react'
import { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
export default function Login() {
  const [email1,setemail1] = useState();
  const [password1,setpassword1] = useState();
  const signinoc = (e) => {
    e.preventDefault(); // Prevent form submission
    axios.post('http://localhost:8000/api/signin', { // Use correct endpoint and request method
      email:email1,
      password:password1
    })
    .then((res) => {
      if(res.data.ex==1){
        window.location.href = '/';
      }else if(res.data.ex==2){
        alert("pass false")
      }else{
        alert("not found")
      }
       // Use window.location.href to navigate to home page
    })
    .catch(error => {
      console.log(error);
    });  
  };
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
        <form className='fform' action='#' onSubmit={(e) => {e.preventDefault();}}>
          <div className='sociall-conttainer'>
            <a href='#' className='sociall'><i className='fab fa-facebook-f'></i></a>
            <a href='#' className='sociall'><i className='fab fa-google-plus-g'></i></a>
            <a href='#' className='sociall'><i className='fab fa-linked-in'></i></a>
          </div>
          <p>or use your email1 for registration</p>
          <input className='inpput' type='text' name='txt' placeholder='Name' required=''/>
          <input className='inpput' type='email1' name='email1' placeholder='email1' required=''/>
          <input className='inpput' type='password1' name='pswd' placeholder='password1' required=''/>
          <button>Sign Up</button>
        </form>
      </div>
      <div className='sign-in'>
        <form action='#' className='formSignIn' onSubmit={(e) => {e.preventDefault();}}>
          <h1>Sign in</h1>
          <div className='sociall-conttainer'>
            <a href='https://www.facebook.com/' className='sociall'><i className='fab fa-facebook-f'><b>f</b></i></a>
            <a href='#' className='sociall'><i className='fab fa-google-plus-g'><b>G+</b></i></a>
            <a href='#' className='sociall'><i className='fab fa-linked-in'><b>in</b></i></a>
          </div>
          {/* <p>or use your Account</p> */}
          
          <input className='inpput' type='email' name='email1' placeholder='email'  value={email1} required='' onChange={(e)=>setemail1(e.target.value)}/>
          <input className='inpput' type='password' name='password1' placeholder='password' value={password1} required='' onChange={(e)=>setpassword1(e.target.value)} />
          <a href='#'>Forget your password1 ?</a>
          <button className='btnSignIn' onClick={signinoc}>Sign In</button>
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
