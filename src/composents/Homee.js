import React from 'react'
import './styless.css'
import Navbar from './navbar/Navbar'
export default function Homee() {
  return (
    <div className='background'>
      <Navbar/>
      
      <h1 className='centered-text'>Explorez le monde depuis les airs. <br /> Réservez vos vols dès maintenant !</h1>
   <a href="/Reservatiom"> <button className='booknoww'>RESERVER MAINTENANT </button></a>
   
   
    </div>
  )
}
