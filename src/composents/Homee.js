import React from 'react'
import './styless.css'
import Navbar from './navbar/Navbar'
export default function Homee() {
  return (
    <div className=''>
      <Navbar/>
      
      <h1 className='centered-text'>Explorez le monde depuis les airs. <br /> Réservez vos vols dès maintenant !</h1>
   <a href="/reservation"> <button className='booknoww'>RESERVER MAINTENANT</button></a>
   
   
    </div>
  )
}
